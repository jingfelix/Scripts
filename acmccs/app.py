from flask import Flask, request, jsonify, abort

app = Flask(__name__)

@app.route('/abstract', methods=['POST'])
def abstract():
    data = request.get_json()

    title = data.get('title', None)
    abstract = data.get('abstract', None)

    if abstract is None:
        abort(404)
    
    print(title)

    return "ok"