import os
import re
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

# Class-specific tutor personas and instructions
CLASS_PROMPTS = {
    "Class 1": "You are MathSpace AI Tutor. Explain using simple countables, fruits, toys, and fun basic examples.",
    "Class 2": "You are MathSpace AI Tutor. Explain using simple visual stories and fundamental counting/addition concepts.",
    "Class 3": "You are MathSpace AI Tutor. Explain using relatable real-life items, simple word problems, and a friendly, encouraging tone.",
    "Class 4": "You are MathSpace AI Tutor. Explain step-by-step using clear visuals, basic mental math, and everyday scenarios.",
    "Class 5": "You are MathSpace AI Tutor. Explain clearly with simple arithmetic steps, basic fractions, geometric shapes, and intuitive examples.",
    "Class 6": "You are MathSpace AI Tutor. Explain using simple everyday analogies, step-by-step arithmetic, and clear definitions suitable for a middle-school beginner.",
    "Class 7": "You are MathSpace AI Tutor. Explain using logical step-by-step reasoning, simple word problems, and intuitive algebra and geometry concepts.",
    "Class 8": "You are MathSpace AI Tutor. Explain by introducing algebraic logic, linear equations, and geometric principles clearly with worked examples.",
    "Class 9": "You are MathSpace AI Tutor. Explain using standard mathematical terminology, algebraic formulas, step-by-step derivations, and structured problem-solving.",
    "Class 10": "You are MathSpace AI Tutor for Class 10 board exam prep. Explain with formal mathematical rigor, standard formulas, theorems, step-by-step proofs, and exam-focused tips.",
    "Class 11": "You are MathSpace AI Tutor for Class 11. Explain in depth with formal mathematical proofs, calculus/trigonometry concepts, and precise notation.",
    "Class 12": "You are MathSpace AI Tutor for Class 12 board and competitive exam prep. Explain with advanced analytical rigor, detailed derivations, and problem-solving techniques."
}


def normalize_class_level(level_raw: str) -> str:
    """Standardizes inputs like '6', 'class 6', '6th', 'Class 6th' -> 'Class 6'"""
    if not level_raw:
        return "Class 10"  # Default fallback if empty
    
    # Extract numbers from string
    match = re.search(r'\d+', str(level_raw))
    if match:
        grade_num = match.group()
        return f"Class {grade_num}"
    
    return str(level_raw).strip().title()


@router.post("/tutor")
async def tutor(req: TutorRequest, db: Session = Depends(get_db)):
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY not found in .env. Ensure .env is in the project root or backend folder."
        )

    # Clean and normalize the incoming class level from frontend
    class_level = normalize_class_level(req.level)
    
    # Get class-specific system prompt or fall back to a default instruction
    system_prompt = CLASS_PROMPTS.get(
        class_level,
        f"You are MathSpace AI Tutor. Explain clearly and step-by-step for a {class_level} student."
    )

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}"
    
    payload = {
        "system_instruction": {
            "parts": [
                {
                    "text": f"{system_prompt}\nKeep explanations well-structured, easy to follow, and appropriate for this learning grade."
                }
            ]
        },
        "contents": [
            {
                "parts": [
                    {
                        "text": req.message
                    }
                ]
            }
        ]
    }

    async with httpx.AsyncClient() as client:
        try:
            res = await client.post(url, json=payload, timeout=20.0)
        except httpx.RequestError as exc:
            raise HTTPException(
                status_code=500,
                detail=f"Network error while connecting to Gemini API: {str(exc)}"
            )

        if res.status_code != 200:
            raise HTTPException(
                status_code=res.status_code,
                detail=f"Gemini API Error: {res.text}"
            )

        data = res.json()
        
        try:
            answer = data["candidates"][0]["content"]["parts"][0]["text"]
        except (KeyError, IndexError):
            raise HTTPException(
                status_code=500,
                detail="Unexpected response format received from Gemini API."
            )

    # Save to database
    try:
        db.add(TutorMessage(role="user", message=req.message))
        db.add(TutorMessage(role="assistant", message=answer))
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Failed to save message to database: {str(e)}"
        )

    return {"answer": answer}