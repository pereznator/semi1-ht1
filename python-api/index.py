from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return jsonify({
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Jorge Antonio Perez Ordoñez - 201900810"
    })

@app.route("/check")
def check():
    return jsonify("API 2"), 200

if __name__ == "__main__":
    print("Ejecutando API en puerto 3000.")
    app.run(port=3000)