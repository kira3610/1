let valu = 0
input.onButtonPressed(Button.A, function () {
    valu = randint(1, 6)
    if (valu == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (valu == 2) {
        basic.showIcon(IconNames.Square)
    } else if (valu == 3) {
        basic.showIcon(IconNames.Target)
    } else if (valu == 4) {
        basic.showIcon(IconNames.No)
    } else if (valu == 5) {
        basic.showIcon(IconNames.Fabulous)
    } else if (valu == 6) {
        basic.showString("Hello!")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
