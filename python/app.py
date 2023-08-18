from flask import Flask

app = Flask(__name__)


@app.route("/")
def myFunc():
    return "This would work as well"


if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True)
