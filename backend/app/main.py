from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base,engine
from .routes import auth,curriculum,ai,math,simulation

Base.metadata.create_all(bind=engine)

app=FastAPI(title="MathSpace API",version="1.0.0",description="Mathematics Universe full-stack API")
app.add_middleware(CORSMiddleware,allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],allow_credentials=True,allow_methods=["*"],allow_headers=["*"])

@app.get("/")
def root(): return {"name":"MathSpace","subtitle":"Mathematics Universe","status":"running"}

@app.get("/health")
def health(): return {"status":"healthy"}

app.include_router(auth.router,prefix="/api/auth",tags=["Authentication"])
app.include_router(curriculum.router,prefix="/api/curriculum",tags=["Curriculum"])
app.include_router(ai.router,prefix="/api/ai",tags=["AI Tutor"])
app.include_router(math.router,prefix="/api/math",tags=["Mathematics"])
app.include_router(simulation.router,prefix="/api/simulation",tags=["Simulation"])
