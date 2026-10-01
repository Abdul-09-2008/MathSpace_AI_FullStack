@echo off
TITLE MATHSPACE - FullStack Launcher

echo Starting MATHSPACE FullStack Application...

:: Start Backend in a separate new window
start "MATHSPACE Backend" cmd /k "call .venv\Scripts\activate && cd backend && uvicorn app.main:app --reload"

:: Start Frontend in a separate new window
start "MATHSPACE Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Both backend and frontend have been launched in separate windows!
echo Backend: http://127.0.0.1:8000
echo Frontend: http://localhost:3000

exit /b 0