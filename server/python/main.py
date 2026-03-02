import os
from datetime import datetime, timezone

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException, Request

load_dotenv()

app = FastAPI(title="ecom-python-server")

API_KEY = os.getenv("API_KEY")
N8N_WEBHOOK_URL = os.getenv("N8N_WEBHOOK_URL")


@app.get("/health")
async def health():
    return {"ok": True, "service": "ecom-python-server"}


@app.post("/api/orders")
async def receive_order(request: Request, x_api_key: str | None = Header(default=None)):
    if not API_KEY or x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")

    if not N8N_WEBHOOK_URL:
        raise HTTPException(status_code=500, detail="N8N_WEBHOOK_URL not configured")

    payload = {
        "source": "ecom.mayurgite.com",
        "receivedAt": datetime.now(timezone.utc).isoformat(),
        "data": await request.json(),
    }

    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.post(N8N_WEBHOOK_URL, json=payload)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=f"Failed to forward to n8n: {exc}") from exc

    if response.status_code >= 400:
        raise HTTPException(
            status_code=502,
            detail={
                "message": "n8n webhook rejected payload",
                "status": response.status_code,
                "response": response.text,
            },
        )

    return {"ok": True, "message": "Forwarded to n8n"}
