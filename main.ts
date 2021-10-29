radio.onReceivedNumber(function (receivedNumber) {
    if (dice <= receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(7)
