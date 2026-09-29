from datetime import datetime
from sqlalchemy import String, Integer, DateTime, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column
from .database import Base

class User(Base):
    __tablename__="users"
    id: Mapped[int]=mapped_column(Integer,primary_key=True)
    name: Mapped[str]=mapped_column(String(120))
    email: Mapped[str]=mapped_column(String(255),unique=True,index=True)
    password_hash: Mapped[str]=mapped_column(String(255))
    role: Mapped[str]=mapped_column(String(30),default="student")
    education_level: Mapped[str|None]=mapped_column(String(50),nullable=True)
    created_at: Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)

class TutorMessage(Base):
    __tablename__="tutor_messages"
    id: Mapped[int]=mapped_column(Integer,primary_key=True)
    user_id: Mapped[int|None]=mapped_column(ForeignKey("users.id"),nullable=True)
    role: Mapped[str]=mapped_column(String(20))
    message: Mapped[str]=mapped_column(Text)
    created_at: Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)
