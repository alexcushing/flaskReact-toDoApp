from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')
    #return render_template('test.html')
    
@app.route('/test', methods=['POST'])    
def test():
    print(request)
    return render_template('index.html')
