from flask import Flask, render_template

app = Flask(__name__, template_folder='public', static_folder="src")


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test/')
def test():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(debug=True, port=8080)
