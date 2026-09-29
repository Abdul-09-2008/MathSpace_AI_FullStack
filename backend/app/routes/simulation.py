from fastapi import APIRouter
import math
router=APIRouter()
@router.get("/projectile")
def projectile(v0:float=20,angle:float=45,g:float=9.81):
    a=math.radians(angle);vx=v0*math.cos(a);vy=v0*math.sin(a);T=2*vy/g
    pts=[]
    for i in range(101):
        t=T*i/100;pts.append({"t":t,"x":vx*t,"y":max(0,vy*t-.5*g*t*t)})
    return {"trajectory":pts,"range":vx*T,"max_height":vy*vy/(2*g)}
