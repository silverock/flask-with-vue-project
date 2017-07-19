from flask import Flask


class Vue(Flask):
    """
    Use vue templates instead of Jinja
    https://aitoehigie.wordpress.com/2016/08/01/using-flask-with-vue-js/
    """
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        block_start_string='$$',
        block_end_string='$$',
        variable_start_string='$',
        variable_end_string='$',
        comment_start_string='$#',
        comment_end_string='#$',
        )
    )

app = Vue(__name__)
