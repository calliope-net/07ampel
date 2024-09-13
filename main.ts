input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Wiederholung = false
    Ampelsteuerung()
})
function Ampelsteuerung () {
    basic.pause(500)
    AAmpel(0, 0, 1)
    FAmpel(1, 0)
    basic.pause(1000)
    AAmpel(0, 1, 0)
    basic.pause(2000)
    AAmpel(1, 0, 0)
    basic.pause(2000)
    FAmpel(0, 1)
    basic.pause(7000)
    FAmpel(1, 0)
    basic.pause(5000)
    AAmpel(1, 1, 0)
    basic.pause(750)
    AAmpel(0, 0, 1)
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
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Wiederholung = true
})
function AAmpel (Red: number, Yellow: number, Green: number) {
    pins.digitalWritePin(DigitalPin.P1, Red)
    pins.digitalWritePin(DigitalPin.P0, Yellow)
    pins.digitalWritePin(DigitalPin.P2, Green)
    if (Red == 1) {
        basic.setLedColor(0xff0000)
    } else if (Yellow == 1) {
        basic.setLedColor(0xffff00)
    } else if (Green == 1) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
}
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    Wiederholung = false
    Ampelsteuerung()
})
let Wiederholung = false
FAmpel(1, 1)
AAmpel(1, 1, 1)
basic.showLeds(`
    . . . # .
    . # . . .
    . . . # .
    . # . . .
    . . . # .
    `)
loops.everyInterval(30000, function () {
    if (Wiederholung) {
        Ampelsteuerung()
    }
})
