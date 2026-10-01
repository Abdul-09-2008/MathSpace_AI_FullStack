from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import sympy as sp

app = FastAPI()

# Enable CORS for your Vercel frontend deployments and local testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://frontend-chi-one-94.vercel.app",
        "https://math-space-ai-full-stack.vercel.app",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

@router.post("/solve")
def solve(expression: str):
    try:
        expr = sp.sympify(expression)
        return {"expression": str(expr), "simplified": str(sp.simplify(expr))}
    except Exception as e:
        return {"error": "Invalid mathematical expression", "detail": str(e)}

@router.get("/formulas")
def formulas():
    return {"formulas": [
        {"name": "Quadratic Formula", "expression": "x=(-b±√(b²−4ac))/(2a)", "domain": "Algebra"},
        {"name": "Circle Area", "expression": "A=πr²", "domain": "Geometry"},
        {"name": "Derivative Power Rule", "expression": "d(xⁿ)/dx=nxⁿ⁻¹", "domain": "Calculus"},
        {"name": "Mean", "expression": "x̄=Σx/n", "domain": "Statistics"}
    ]}

# Include the router in the main FastAPI application
app.include_router(router)