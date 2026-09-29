from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from ..database import get_db
from ..models import User
from ..schemas import AuthRequest
from ..security import hash_password,verify_password,create_token

router=APIRouter()

@router.post("/signup")
def signup(req:AuthRequest,db:Session=Depends(get_db)):
    email=req.email.lower()
    if len(req.name.strip())<2: raise HTTPException(400,"Enter your name.")
    if len(req.password)<6: raise HTTPException(400,"Password must be at least 6 characters.")
    if db.scalar(select(User).where(User.email==email)): raise HTTPException(409,"An account with this email already exists.")
    u=User(name=req.name.strip(),email=email,password_hash=hash_password(req.password))
    db.add(u);db.commit();db.refresh(u)
    return {"token":create_token(u.id),"user":{"id":u.id,"name":u.name,"email":u.email,"role":u.role}}

@router.post("/login")
def login(req:AuthRequest,db:Session=Depends(get_db)):
    u=db.scalar(select(User).where(User.email==req.email.lower()))
    if not u or not verify_password(req.password,u.password_hash): raise HTTPException(401,"Invalid email or password.")
    return {"token":create_token(u.id),"user":{"id":u.id,"name":u.name,"email":u.email,"role":u.role}}
