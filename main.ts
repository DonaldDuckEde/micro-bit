function error (errorType: string) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
}
function start () {
    let zero = 0
    while (zero == 0) {
        basic.showNumber(actionNumber)
        if (input.buttonIsPressed(Button.A)) {
            if (actionNumber == 0) {
                error("Value Error")
            } else {
                actionNumber += -1
            }
        } else if (input.buttonIsPressed(Button.B)) {
            if (actionNumber == 9) {
                error("Value Error")
            } else {
                actionNumber += 1
            }
        } else if (input.buttonIsPressed(Button.AB)) {
            main(actionNumber)
        }
    }
}
function main (action: number) {
	
}
let actionNumber = 0
start()
