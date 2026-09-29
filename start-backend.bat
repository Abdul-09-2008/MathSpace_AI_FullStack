@echo off
cd /d "%~dp0"

if not exist ".venv\Scripts\python.exe" (
    python -m venv .venv
)

call .venv\Scripts\activate.bat

cd /d "%~dp0backend"

python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000

pause
exit /b 0