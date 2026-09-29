# MATHSPACE — MATHEMATICS UNIVERSE

A full-stack mathematics learning and research platform connecting:

MATHEMATICS → CONCEPT → FORMULA → EQUATION → PROBLEM → DOMAIN → INDUSTRY → DATA → MODEL → AI → SIMULATION → 2D/3D → APPLICATION → PROJECT → RESEARCH

## Stack

Frontend: Next.js + TypeScript + CSS
Backend: Python + FastAPI
Database: SQLAlchemy with SQLite development mode and PostgreSQL-ready configuration
Math: SymPy-ready architecture
Visualization: Canvas 2D + Three.js-ready architecture
Authentication: JWT-ready API + password hashing
AI: provider interface; local tutor works without an API key

## Run on Windows

### Backend

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

API: http://127.0.0.1:8000
Docs: http://127.0.0.1:8000/docs

### Frontend

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open: http://localhost:3000

### One-click

`start-backend.bat`
`start-frontend.bat`

## Demo accounts

The signup flow creates real local users. The backend does not contain a hard-coded demo password.

## AI API

Copy `.env.example` to `.env`.

The local tutor works without an external key. To connect a provider, implement the provider interface in `backend/app/services/ai_service.py` and set the provider variables in `.env`.

## Product flow

SIGN UP
→ SELECT EDUCATION LEVEL
→ DASHBOARD
→ SEARCH
→ TOPIC
→ CONCEPT
→ FORMULA
→ EQUATION
→ AI EXPLANATION
→ QUESTION
→ GRAPH
→ 3D
→ SIMULATION
→ REAL DATA
→ APPLICATION
→ PROJECT
→ RESEARCH

## Important

The uploaded reference image is treated as brand/visual inspiration only. The MathSpace product identity is original: orbital mathematics mark, π symbol, black/white editorial interface and mathematics-universe language.

Advanced external services are isolated behind clean interfaces rather than fake buttons.
