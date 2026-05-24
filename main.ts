/* * Copyright (c) 2020 MTHS All rights reserved 
 * * Created by: Kyle Matthew 
 * Created on: Mar 2026 
 * This program moves the pixels around the perimeter clockwise and counter clockwise. 
 */

let sprite: game.LedSprite = null
let loopCounterX = 0
let loopCounterY = 0

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When Button A is pressed, the pixels move clockwise
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // Reset counters for the movement
    loopCounterX = 0
    loopCounterY = 0

    // Goes left to right (top edge)
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY += 1
        basic.pause(350)
    }
    loopCounterY = 4 // Lock at edge

    // Goes top to bottom (right edge)
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX += 1
        basic.pause(350)
    }
    loopCounterX = 4 // Lock at edge

    // Goes right to left (bottom edge)
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY -= 1
        basic.pause(350)
    }
    loopCounterY = 0 // Lock at edge

    // Goes bottom to top (left edge)
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX -= 1
        basic.pause(350)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// When Button B is pressed, the pixels move counter-clockwise
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // Reset counters for the movement
    loopCounterX = 0
    loopCounterY = 0

    // Goes top to bottom (left edge)
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX += 1
        basic.pause(350)
    }
    loopCounterX = 4 // Lock at edge

    // Goes left to right (bottom edge)
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY += 1
        basic.pause(350)
    }
    loopCounterY = 4 // Lock at edge

    // Goes bottom to top (right edge)
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX -= 1
        basic.pause(350)
    }
    loopCounterX = 0 // Lock at edge

    // Goes right to left (top edge)
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY -= 1
        basic.pause(350)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
