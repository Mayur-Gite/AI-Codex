import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "ecom-node-server" });
});

app.post("/api/orders", async (req, res) => {
  const auth = req.header("x-api-key");
  if (!process.env.API_KEY || auth !== process.env.API_KEY) {
    return res.status(401).json({ ok: false, message: "Unauthorized" });
  }

  if (!process.env.N8N_WEBHOOK_URL) {
    return res.status(500).json({ ok: false, message: "N8N_WEBHOOK_URL not configured" });
  }

  const payload = {
    source: "ecom.mayurgite.com",
    receivedAt: new Date().toISOString(),
    data: req.body,
  };

  try {
    const webhookResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text();
      return res.status(502).json({
        ok: false,
        message: "n8n webhook rejected payload",
        status: webhookResponse.status,
        detail: text,
      });
    }

    return res.status(202).json({ ok: true, message: "Forwarded to n8n" });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Failed to forward to n8n",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
