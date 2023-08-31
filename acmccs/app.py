from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/abstract', methods=['POST'])
def abstract():
    data = request.get_json()

    abstract = data.get('abstract', None)
    if abstract is None:
        return 404
    
    print(abstract)

    return jsonify(data)