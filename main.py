from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()

answer='NIGHT'


@app.get('/answer')
def get_answer():
    return answer
#   return {'answer':answer} // return answer를 객체로 줄때

app.mount("/", StaticFiles(directory="static", html=True), name="static")

# uvicorn main:app --reload