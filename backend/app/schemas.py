from pydantic import BaseModel, EmailStr

class AuthRequest(BaseModel):
    name: str = ""
    email: EmailStr
    password: str

class TutorRequest(BaseModel):
    message: str
    level: str = "Class 10"
