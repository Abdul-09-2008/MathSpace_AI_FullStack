import os
import httpx
from dotenv import load_dotenv

load_dotenv()


class LocalMathTutor:
    def answer(self, message: str, level: str = "Class 10") -> str:
        m = message.lower()
        if "derivative" in m or "differentiation" in m:
            return "Differentiation measures instantaneous rate of change. For f(x)=x², the derivative is f'(x)=2x. In physics, position → velocity → acceleration through differentiation."
        if "quadratic" in m:
            return "For ax²+bx+c=0, use x=(-b±√(b²−4ac))/(2a). The discriminant b²−4ac tells us whether the roots are real and distinct, real and equal, or complex."
        if "linear regression" in m:
            return "A simple linear model can be written y=mx+b. The slope m describes how y changes as x changes. In an applied project, x and y should be tied to a real dataset and the model should be evaluated."
        if "pythagorean" in m:
            return "For a right triangle, a²+b²=c². The theorem is useful in geometry, robotics, navigation, computer graphics and engineering."
        return f"Let’s solve this at {level} level: identify the concept → write the equation → define variables → calculate → verify → connect the result to a real-world application. Your question was: {message}"


class AIService:
    def __init__(self):
        self.local = LocalMathTutor()

    def answer(self, message: str, level: str) -> str:
        # Check environment for API Key
        api_key = os.getenv("API_KEY") or os.getenv("GEMINI_API_KEY")

        if api_key:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={"GEMINI_API_KEY"}"
            payload = {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": f"You are MathSpace AI Tutor. Explain clearly for a {level} student: {message}"
                            }
                        ]
                    }
                ]
            }

            try:
                # Synchronous POST request using httpx
                response = httpx.post(url, json=payload, timeout=20.0)
                if response.status_code == 200:
                    data = response.json()
                    return data["candidates"][0]["content"]["parts"][0]["text"]
                else:
                    print(f"[Gemini API Error {response.status_code}]: {response.text}")
            except Exception as e:
                print(f"[Gemini Request Exception]: {e}")
        else:
            print("[AIService Warning]: No API key found in .env file. Falling back to local tutor.")

        # Fallback to local hardcoded tutor if API key is missing or fails
        return self.local.answer(message, level)