from flask import Flask
from libs.python.response.response import response

app = Flask(__name__)

@app.route('/')
def suggestions():
  result = [
    {
      "id": "1",
      "name": "Salmon fillet",
    },
    {
      "id": "2",
      "name": "Chicken breast",
    },
    {
      "id": "3",
      "name": "Green smoothie",
    },
    {
      "id": "4",
      "name": "Greek salad",
    },
  ]
  return response(result)

if __name__ == '__main__':
  app.run()
