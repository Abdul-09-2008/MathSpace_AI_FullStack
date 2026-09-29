import os
from datetime import datetime, timedelta
import bcrypt
from jose import jwt

SECRET = os.getenv("JWT_SECRET", "development-secret-change-me")
ALGORITHM = "HS256"


def hash_password(password: str) -> str:
    """Hashes a password safely using bcrypt.

    Encodes input to UTF-8 bytes and truncates to 72 bytes to respect bcrypt's limit.
    """
    password_bytes = password.encode("utf-8")[:72]
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password_bytes, salt)
    return hashed.decode("utf-8")


def verify_password(password: str, hashed: str) -> bool:
    """Verifies a plain password against a stored bcrypt hash string."""
    password_bytes = password.encode("utf-8")[:72]
    hashed_bytes = hashed.encode("utf-8")
    return bcrypt.checkpw(password_bytes, hashed_bytes)


def create_token(user_id: int) -> str:
    """Generates a signed JWT access token valid for 7 days."""
    expire = datetime.utcnow() + timedelta(days=7)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, SECRET, algorithm=ALGORITHM)