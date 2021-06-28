input.onButtonPressed(Button.A, function () {
    basic.showNumber(Fallhöhe)
})
let Fallhöhe = 0
let Beschleunigung = 0
basic.showString("Init")
for (let index = 0; index < 300; index++) {
    Beschleunigung = input.acceleration(Dimension.Strength)
}
basic.showString("Ready")
while (input.acceleration(Dimension.Strength) > 500) {
	
}
let Start = input.runningTime()
while (input.acceleration(Dimension.Strength) < 1500) {
	
}
let Ende = input.runningTime()
let Fallzeit = (Ende - Start) / 1000
Fallhöhe = 0.5 * 9.81 * Fallzeit * Fallzeit
basic.setLedColor(0xff0000)
basic.pause(1000)
