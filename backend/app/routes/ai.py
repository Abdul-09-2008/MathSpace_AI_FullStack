import os
from pathlib import Path
import httpx
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import TutorMessage
from ..schemas import TutorRequest

# Force path resolution to find .env regardless of execution folder
BASE_DIR = Path(__file__).resolve().parent.parent.parent
load_dotenv(dotenv_path=BASE_DIR / ".env")
load_dotenv()  # Fallback

router = APIRouter()

@router.post("/tutor")
async def tutor(req: TutorRequest, db: Session = Depends(get_db)):
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY not found in .env. Ensure .env is in the project root or backend folder."
        )

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key={api_key}"
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": f"You are MathSpace AI Tutor. Explain clearly for a {req.level} student: {req.message}"
                    }
                ]
            }
        ]
    }

    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=payload, timeout=20.0)

        if res.status_code != 200:
            raise HTTPException(
                status_code=res.status_code,
                detail=f"Gemini API Error: {res.text}"
            )

        data = res.json()
        answer = data["candidates"][0]["content"]["parts"][0]["text"]

    # Save to database
    db.add(TutorMessage(role="user", message=req.message))
    db.add(TutorMessage(role="assistant", message=answer))
    db.commit()

    return {"answer": answer}