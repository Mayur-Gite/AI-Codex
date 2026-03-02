# AI-Codex: ecom.mayurgite.com Server Templates

This repository now contains **production-ready starter templates** for your `ecom.mayurgite.com` backend, with forwarding to your n8n instance at `n8n.mayurgite.com`.

- Node.js template: `server/node`
- Python (FastAPI) template: `server/python`

---

## 1) Choose one server template

### Option A: Node.js (Express)
- Location: `server/node`
- Endpoint to receive data: `POST /api/orders`
- Health check: `GET /health`
- Forwards payload to: `N8N_WEBHOOK_URL`

### Option B: Python (FastAPI)
- Location: `server/python`
- Endpoint to receive data: `POST /api/orders`
- Health check: `GET /health`
- Forwards payload to: `N8N_WEBHOOK_URL`

Both templates use:
- `x-api-key` header validation
- JSON payload forwarding to n8n
- clear error responses for webhook failures

---

## 2) n8n workflow import/setup steps (n8n.mayurgite.com)

1. Open `https://n8n.mayurgite.com` and create a new workflow.
2. Add a **Webhook** node:
   - Method: `POST`
   - Path: `ecom-ingest`
   - Response mode: “On Received” (recommended for quick ack)
3. Add your processing nodes (Set, Code, DB, Google Sheets, etc.).
4. (Optional) Add **IF** node to validate incoming fields.
5. Activate workflow.
6. Copy production webhook URL, expected as:
   - `https://n8n.mayurgite.com/webhook/ecom-ingest`
7. Set this URL in server `.env` as `N8N_WEBHOOK_URL`.

---

## 3) DNS setup for ecom.mayurgite.com (Hostinger)

In Hostinger DNS Zone for `mayurgite.com`:
1. Create an **A record**:
   - Host/Name: `ecom`
   - Value: `<YOUR_VPS_PUBLIC_IP>`
   - TTL: default
2. Wait for propagation (usually a few minutes, sometimes longer).

---

## 4) VPS setup (Ubuntu) common steps

Run on your Hostinger VPS:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx git curl
```

Clone project:

```bash
git clone <your-repo-url> /var/www/AI-Codex
cd /var/www/AI-Codex
```

---

## 5A) Deploy Node.js template with PM2

Install Node.js LTS + PM2:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Prepare app:

```bash
cd /var/www/AI-Codex/server/node
cp .env.example .env
# edit values: API_KEY and N8N_WEBHOOK_URL
npm install
```

Start service:

```bash
pm2 start src/index.js --name ecom-node
pm2 save
pm2 startup
```

Local test on VPS:

```bash
curl http://127.0.0.1:3000/health
```

---

## 5B) Deploy Python template with systemd

Install Python tools:

```bash
sudo apt install -y python3-venv
```

Prepare app:

```bash
cd /var/www/AI-Codex/server/python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# edit values: API_KEY and N8N_WEBHOOK_URL
deactivate
```

Create systemd service `/etc/systemd/system/ecom-python.service`:

```ini
[Unit]
Description=Ecom FastAPI Service
After=network.target

[Service]
User=root
WorkingDirectory=/var/www/AI-Codex/server/python
EnvironmentFile=/var/www/AI-Codex/server/python/.env
ExecStart=/var/www/AI-Codex/server/python/.venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable ecom-python
sudo systemctl start ecom-python
sudo systemctl status ecom-python
```

Local test on VPS:

```bash
curl http://127.0.0.1:8000/health
```

---

## 6) Nginx reverse proxy + SSL for ecom.mayurgite.com

Use one upstream only (Node 3000 **or** Python 8000).

Create `/etc/nginx/sites-available/ecom.mayurgite.com`:

### For Node (port 3000)
```nginx
server {
    listen 80;
    server_name ecom.mayurgite.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### For Python (port 8000)
```nginx
server {
    listen 80;
    server_name ecom.mayurgite.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/ecom.mayurgite.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Issue SSL cert:

```bash
sudo certbot --nginx -d ecom.mayurgite.com
```

---

## 7) End-to-end test

From your local machine or VPS:

```bash
curl -X POST "https://ecom.mayurgite.com/api/orders" \
  -H "Content-Type: application/json" \
  -H "x-api-key: replace_with_strong_secret" \
  -d '{"orderId":"ORD-1001","amount":999,"currency":"INR"}'
```

Expected:
- API returns success response (`Forwarded to n8n`)
- Workflow execution appears in n8n

---

## 8) Recommended production hardening

- Use a long random API key and rotate periodically.
- Restrict inbound ports with UFW (allow only 22,80,443).
- Add request rate limiting in Nginx.
- Use Cloudflare proxy/WAF if available.
- Run app service with least privilege user (not root) where possible.
