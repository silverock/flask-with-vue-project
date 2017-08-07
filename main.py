import app

from flask import render_template, request, jsonify

import routes

from services.addition import addition_response


@app.app.route(routes.index)
def index():
    """
    index.html
    :return: Vue template for index.html
    """
    return render_template('index.html')


@app.app.route(routes.addition_api)
def addition_api():
    """
    The addition API
    :return: Response as JSON
    """
    number1 = request.args['number1']
    number2 = request.args['number2']
    return jsonify(addition_response(number1, number2))


@app.app.route(routes.addition)
def addition():
    """
    Gives the `addition` Vue component
    :return: Vue template for addition.html
    """
    return render_template('addition.html')

if __name__ == "__main__":
    app.app.run()
