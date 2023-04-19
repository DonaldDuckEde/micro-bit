def error(errorType: str):
    basic.show_leds("""
        . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
    """)
def start():
    global actionNumber
    zero = 0
    while zero == 0:
        basic.show_number(actionNumber)
        if input.button_is_pressed(Button.A):
            if actionNumber > 0 and actionNumber < 10:
                actionNumber += 1
            else:
                actionNumber = 0
        elif input.button_is_pressed(Button.B):
            main(actionNumber)
def main(action: number):
    pass
actionNumber = 0
start()