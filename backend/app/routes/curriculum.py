from fastapi import APIRouter
router=APIRouter()
LEVELS=["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12","BSc","MSc","Research"]
TOPICS={
"Class 6":["Number System","Fractions","Geometry","Data Handling"],
"Class 7":["Integers","Algebra","Lines & Angles","Data"],
"Class 8":["Rational Numbers","Linear Equations","Geometry","Graphs"],
"Class 9":["Polynomials","Coordinate Geometry","Statistics","Probability"],
"Class 10":["Quadratic Equations","Trigonometry","Statistics","Probability"],
"Class 11":["Sets","Functions","Limits","Permutations","Statistics"],
"Class 12":["Calculus","Matrices","Vectors","Probability"],
"BSc":["Real Analysis","Linear Algebra","Differential Equations","Numerical Methods"],
"MSc":["Advanced Analysis","Optimization","Stochastic Processes"],
"Research":["Mathematical Modelling","Scientific Computing","Optimization","Applied Research"]
}
@router.get("/levels")
def levels(): return [{"name":x,"topics":TOPICS.get(x,[])} for x in LEVELS]
