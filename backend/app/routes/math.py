from fastapi import APIRouter
import sympy as sp
router=APIRouter()

@router.post("/solve")
def solve(expression:str):
    try:
        expr=sp.sympify(expression)
        return {"expression":str(expr),"simplified":str(sp.simplify(expr))}
    except Exception as e:
        return {"error":"Invalid mathematical expression","detail":str(e)}

@router.get("/formulas")
def formulas():
    return {"formulas":[
      {"name":"Quadratic Formula","expression":"x=(-b±√(b²−4ac))/(2a)","domain":"Algebra"},
      {"name":"Circle Area","expression":"A=πr²","domain":"Geometry"},
      {"name":"Derivative Power Rule","expression":"d(xⁿ)/dx=nxⁿ⁻¹","domain":"Calculus"},
      {"name":"Mean","expression":"x̄=Σx/n","domain":"Statistics"}
    ]}
