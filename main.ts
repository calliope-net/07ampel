function Ampelsteuerung () {
    basic.pause(500)
    AAmpel(0, 0, 1)
    FAmpel(1, 0)
}
function FAmpel (Red: number, Green: number) {
    pins.digitalWritePin(DigitalPin.C16, Red)
    pins.digitalWritePin(DigitalPin.C17, Green)
    if (Red == 1) {
        basic.showIcon(IconNames.StickFigure)
    } else if (Green == 1) {
        basic.showIcon(IconNames.Giraffe)
    } else {
        basic.clearScreen()
    }
}
function AAmpel (Red: number, Yellow: number, Green: number) {
    pins.digitalWritePin(DigitalPin.P1, Red)
    pins.digitalWritePin(DigitalPin.P0, Yellow)
    pins.digitalWritePin(DigitalPin.P2, Green)
    if (Red == 1) {
        basic.setLedColor(0xff0000)
    } else if (Yellow == 1) {
        basic.setLedColor(0xff0000)
    } else if (Green == 1) {
        basic.setLedColor(0xff0000)
    } else {
        basic.turnRgbLedOff()
    }
}
FAmpel(1, 1)
AAmpel(1, 1, 1)
basic.showLeds(`
    . . . # .
    . # . . .
    . . . # .
    . # . . .
    . . . # .
    `)
