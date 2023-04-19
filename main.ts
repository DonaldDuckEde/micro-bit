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
            main(actionNumber)
        } else if (input.buttonIsPressed(Button.B)) {
            if (actionNumber < 10) {
                actionNumber += 1
                basic.showNumber(actionNumber)
            } else {
                actionNumber = 0
                basic.showNumber(actionNumber)
            }
        }
    }
}
function main (action: number) {
	
}
let actionNumber = 0
start()
