"""
The addition service
"""


def do_addition(number1, number2):
    """
    Add two numbers together

    :param number1:
    :param number2:
    :return: result of number1 + number2
    """
    try:
        return float(number1) + float(number2)
    except (ZeroDivisionError, ValueError):
        return float('nan')


def addition_response(number1, number2):
    """
    Return a JSON response of the addition function
    :param number1:
    :param number2:
    :return:
    """
    result = do_addition(number1, number2)

    return {
        'args':
            {
                'number1': str(number1),
                'number2': str(number2)
            },
        'response': str(result)
    }
