controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (shotP2 == true) {
        if (aimP2 == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, P2, -100, 0)
        }
        if (aimP2 == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, P2, 100, 0)
        }
    }
    shotP2 = false
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (P1.isHittingTile(CollisionDirection.Bottom)) {
        P1.vy = -210
    }
})
function Player_2 () {
    P2 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 7 7 f f f . . . 
        . . f f f 7 7 7 7 f f f . . 
        . f f f 9 9 9 9 9 9 f f f . 
        . f f 9 7 7 7 7 7 7 9 9 f . 
        . f 9 7 f f f f f f 7 9 f . 
        . f f f f 9 9 9 9 f f f f . 
        f f 9 f b f a a f b f 9 f f 
        f 9 9 a 1 f d d f 1 a 9 9 f 
        . f f f f d d d d d 9 9 f . 
        f d d d d f a a a 9 9 f . . 
        f b b b b f 7 7 7 7 f a e . 
        f b b b b f 7 7 7 7 f d a . 
        . f c c f a 5 5 a a f a a . 
        . . f f f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    P2.setPosition(130, 90)
    controller.player2.moveSprite(P2, 75, 0)
    P2.ay = 600
    P2.fx = 30
    aimP2 = 0
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setPosition(147, 12)
    statusbar2.value = 100
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (hitP2 == true) {
        if (aimP2 == 1) {
            hitP2 = false
            P2.setImage(img`
                . . . . . . . . . . . f f . . . . . 
                . . . . . . . . . f f 7 f f f f . . 
                . . . . . . . . f f 7 f 9 9 9 9 f . 
                . . . . . . . f f 7 7 f 9 9 9 9 f . 
                . . . . . . . f 9 9 9 9 f f 9 9 f . 
                . . . . . . f 9 7 7 7 7 9 9 f f f . 
                . . . . . . f 7 9 f f f f 7 7 7 f . 
                . . . . . . f f f 9 9 9 f f f f f f 
                . . . . . . f 9 9 a a f b 9 a a 9 f 
                . . . . . . . f 9 d d f b a d a 9 f 
                . . . . . . c . 9 9 d d d a 9 9 f f 
                c c c c c c c 9 d d 9 9 7 7 7 7 f . 
                . c d d d d c 9 d d a a 9 a a a f . 
                . . c c c c c . 9 9 9 9 f f f f f . 
                . . . . . . c . . . f f f f f f f f 
                . . . . . . . . . . . f f . . f f f 
                `)
        }
        if (aimP2 == 2) {
            hitP2 = false
            P2.setImage(img`
                . . . . . f f . . . . . . . . . . . 
                . . f f f f 7 f f . . . . . . . . . 
                . f 9 9 9 9 f 7 f f . . . . . . . . 
                . f 9 9 9 9 f 7 7 f f . . . . . . . 
                . f 9 9 f f 9 9 9 9 f . . . . . . . 
                . f f f 9 9 7 7 7 7 9 f . . . . . . 
                . f 7 7 7 f f f f 9 7 f . . . . . . 
                f f f f f f 9 9 9 f f f . . . . . . 
                f 9 a a 9 b f a a 9 9 f . . . . . . 
                f 9 a d a b f d d 9 f . . . . . . . 
                f f 9 9 a d d d 9 9 . c . . . . . . 
                . f 7 7 7 7 9 9 d d 9 c c c c c c c 
                . f a a a 9 a a d d 9 c d d d d c . 
                . f f f f f 9 9 9 9 . c c c c c . . 
                f f f f f f f f . . . c . . . . . . 
                f f f . . f f . . . . . . . . . . . 
                `)
        }
    }
    pause(250)
    if (aimP2 == 1) {
        P2.setImage(img`
            . . . . . . f f f f f f . . 
            . . . . . f 7 f 9 9 9 9 f . 
            . . . . f 7 7 7 f 9 9 9 f . 
            . . . . f 9 9 9 9 f f 9 9 f 
            c c . f 9 7 7 7 7 9 9 f f f 
            c d c f 7 9 f f f f 7 7 7 f 
            c d d c f f 9 9 9 f f f f f 
            . c d d c 9 a a f b e a f f 
            . . c d c 9 d d f 1 a d a f 
            . . c c c d 9 d d d a 9 9 f 
            . . . 9 d d a 9 a a 9 9 f f 
            . . . . 9 9 a a 7 7 7 7 f . 
            . . . . . f 7 9 7 7 7 7 f . 
            . . . . . f 5 5 a a a a f . 
            . . . . . . f f f f f f . . 
            . . . . . . . . f f f . . . 
            `)
    }
    if (aimP2 == 2) {
        P2.setImage(img`
            . . f f f f f f . . . . . . 
            . f 9 9 9 9 f 7 f . . . . . 
            . f 9 9 9 f 7 7 7 f . . . . 
            f 9 9 f f 9 9 9 9 f . . . . 
            f f f 9 9 7 7 7 7 9 f . c c 
            f 7 7 7 f f f f 9 7 f c d c 
            f f f f f 9 9 9 f f c d d c 
            f f a e b f a a 9 c d d c . 
            f a d a 1 f d d 9 c d c . . 
            f 9 9 a d d d 9 d c c c . . 
            f f 9 9 a a 9 a d d 9 . . . 
            . f 7 7 7 7 a a 9 9 . . . . 
            . f 7 7 7 7 9 7 f . . . . . 
            . f a a a a 5 5 f . . . . . 
            . . f f f f f f . . . . . . 
            . . . f f f . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (shotP1 == false) {
        statusbar2.value += -20
        pause(2000)
    }
    if (shotP2 == false) {
        statusbar1.value += -20
        pause(2000)
    }
})
function Player_1 () {
    P1 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 2 2 f f f . . . 
        . . f f f 2 2 2 2 f f f . . 
        . f f f e e e e e e f f f . 
        . f f e 2 2 2 2 2 2 e e f . 
        . f e 2 f f f f f f 2 e f . 
        . f f f f e e e e f f f f . 
        f f e f b f 4 4 f b f e f f 
        f e e 4 1 f d d f 1 4 e e f 
        . f f f f d d d d d e e f . 
        f d d d d f 4 4 4 e e f . . 
        f b b b b f 2 2 2 2 f 4 e . 
        f b b b b f 2 2 2 2 f d 4 . 
        . f c c f 4 5 5 4 4 f 4 4 . 
        . . f f f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    P1.setPosition(40, 90)
    controller.player1.moveSprite(P1, 75, 0)
    P1.ay = 600
    P1.fx = 30
    aimP1 = 0
    statusbar1 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar1.setPosition(13, 12)
    statusbar1.value = 100
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (P2.isHittingTile(CollisionDirection.Bottom)) {
        P2.vy = -210
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . f f f f f f . . . . . . 
        . f 9 9 9 9 f 7 f . . . . . 
        . f 9 9 9 f 7 7 7 f . . . . 
        f 9 9 f f 9 9 9 9 f . . . . 
        f f f 9 9 7 7 7 7 9 f . c c 
        f 7 7 7 f f f f 9 7 f c d c 
        f f f f f 9 9 9 f f c d d c 
        f f a e b f a a 9 c d d c . 
        f a d a 1 f d d 9 c d c . . 
        f 9 9 a d d d 9 d c c c . . 
        f f 9 9 a a 9 a d d 9 . . . 
        . f 7 7 7 7 a a 9 9 . . . . 
        . f 7 7 7 7 9 7 f . . . . . 
        . f a a a a 5 5 f . . . . . 
        . . f f f f f f . . . . . . 
        . . . f f f . . . . . . . . 
        `)
    aimP2 = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (hitP1 == false) {
        statusbar2.value += -10
        pause(1000)
    }
    if (hitP2 == false) {
        statusbar1.value += -10
        pause(1000)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . f f f f f f . . 
        . . . . . f 7 f 9 9 9 9 f . 
        . . . . f 7 7 7 f 9 9 9 f . 
        . . . . f 9 9 9 9 f f 9 9 f 
        c c . f 9 7 7 7 7 9 9 f f f 
        c d c f 7 9 f f f f 7 7 7 f 
        c d d c f f 9 9 9 f f f f f 
        . c d d c 9 a a f b e a f f 
        . . c d c 9 d d f 1 a d a f 
        . . c c c d 9 d d d a 9 9 f 
        . . . 9 d d a 9 a a 9 9 f f 
        . . . . 9 9 a a 7 7 7 7 f . 
        . . . . . f 7 9 7 7 7 7 f . 
        . . . . . f 5 5 a a a a f . 
        . . . . . . f f f f f f . . 
        . . . . . . . . f f f . . . 
        `)
    aimP2 = 1
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . f f f f f f . . . . . . 
        . f e e e e f 2 f . . . . . 
        . f e e e f 2 2 2 f . . . . 
        f e e f f e e e e f . . . . 
        f f f e e 2 2 2 2 e f . c c 
        f 2 2 2 f f f f e 2 f c d c 
        f f f f f e e e f f c d d c 
        f f 4 e b f 4 4 e c d d c . 
        f 4 d 4 1 f d d e c d c . . 
        f e e 4 d d d e d c c c . . 
        f f e e 4 4 e 4 d d e . . . 
        . f 2 2 2 2 4 4 e e . . . . 
        . f 2 2 2 2 e 2 f . . . . . 
        . f 4 4 4 4 5 5 f . . . . . 
        . . f f f f f f . . . . . . 
        . . . f f f . . . . . . . . 
        `)
    aimP1 = 2
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (hitP1 == true) {
        if (aimP1 == 1) {
            hitP1 = false
            P1.setImage(img`
                . . . . . . . . . . . f f . . . . . 
                . . . . . . . . . f f 2 f f f f . . 
                . . . . . . . . f f 2 f e e e e f . 
                . . . . . . . f f 2 2 f e e e e f . 
                . . . . . . . f e e e e f f e e f . 
                . . . . . . f e 2 2 2 2 e e f f f . 
                . . . . . . f 2 e f f f f 2 2 2 f . 
                . . . . . . f f f e e e f f f f f f 
                . . . . . . f e e 4 4 f b e 4 4 e f 
                . . . . . . . f e d d f b 4 d 4 e f 
                . . . . . . c . e e d d d 4 e e f f 
                c c c c c c c e d d e e 2 2 2 2 f . 
                . c d d d d c e d d 4 4 e 4 4 4 f . 
                . . c c c c c . e e e e f f f f f . 
                . . . . . . c . . . f f f f f f f f 
                . . . . . . . . . . . f f . . f f f 
                `)
        }
        if (aimP1 == 2) {
            hitP1 = false
            P1.setImage(img`
                . . . . . f f . . . . . . . . . . . 
                . . f f f f 2 f f . . . . . . . . . 
                . f e e e e f 2 f f . . . . . . . . 
                . f e e e e f 2 2 f f . . . . . . . 
                . f e e f f e e e e f . . . . . . . 
                . f f f e e 2 2 2 2 e f . . . . . . 
                . f 2 2 2 f f f f e 2 f . . . . . . 
                f f f f f f e e e f f f . . . . . . 
                f e 4 4 e b f 4 4 e e f . . . . . . 
                f e 4 d 4 b f d d e f . . . . . . . 
                f f e e 4 d d d e e . c . . . . . . 
                . f 2 2 2 2 e e d d e c c c c c c c 
                . f 4 4 4 e 4 4 d d e c d d d d c . 
                . f f f f f e e e e . c c c c c . . 
                f f f f f f f f . . . c . . . . . . 
                f f f . . f f . . . . . . . . . . . 
                `)
        }
    }
    pause(250)
    if (aimP1 == 1) {
        P1.setImage(img`
            . . . . . . f f f f f f . . 
            . . . . . f 2 f e e e e f . 
            . . . . f 2 2 2 f e e e f . 
            . . . . f e e e e f f e e f 
            c c . f e 2 2 2 2 e e f f f 
            c d c f 2 e f f f f 2 2 2 f 
            c d d c f f e e e f f f f f 
            . c d d c e 4 4 f b e 4 f f 
            . . c d c e d d f 1 4 d 4 f 
            . . c c c d e d d d 4 e e f 
            . . . e d d 4 e 4 4 e e f f 
            . . . . e e 4 4 2 2 2 2 f . 
            . . . . . f 2 e 2 2 2 2 f . 
            . . . . . f 5 5 4 4 4 4 f . 
            . . . . . . f f f f f f . . 
            . . . . . . . . f f f . . . 
            `)
    }
    if (aimP1 == 2) {
        P1.setImage(img`
            . . f f f f f f . . . . . . 
            . f e e e e f 2 f . . . . . 
            . f e e e f 2 2 2 f . . . . 
            f e e f f e e e e f . . . . 
            f f f e e 2 2 2 2 e f . c c 
            f 2 2 2 f f f f e 2 f c d c 
            f f f f f e e e f f c d d c 
            f f 4 e b f 4 4 e c d d c . 
            f 4 d 4 1 f d d e c d c . . 
            f e e 4 d d d e d c c c . . 
            f f e e 4 4 e 4 d d e . . . 
            . f 2 2 2 2 4 4 e e . . . . 
            . f 2 2 2 2 e 2 f . . . . . 
            . f 4 4 4 4 5 5 f . . . . . 
            . . f f f f f f . . . . . . 
            . . . f f f . . . . . . . . 
            `)
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (shotP1 == true) {
        if (aimP1 == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, P1, -100, 0)
        }
        if (aimP1 == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, P1, 100, 0)
        }
    }
    shotP1 = false
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . f f f f f f . . 
        . . . . . f 2 f e e e e f . 
        . . . . f 2 2 2 f e e e f . 
        . . . . f e e e e f f e e f 
        c c . f e 2 2 2 2 e e f f f 
        c d c f 2 e f f f f 2 2 2 f 
        c d d c f f e e e f f f f f 
        . c d d c e 4 4 f b e 4 f f 
        . . c d c e d d f 1 4 d 4 f 
        . . c c c d e d d d 4 e e f 
        . . . e d d 4 e 4 4 e e f f 
        . . . . e e 4 4 2 2 2 2 f . 
        . . . . . f 2 e 2 2 2 2 f . 
        . . . . . f 5 5 4 4 4 4 f . 
        . . . . . . f f f f f f . . 
        . . . . . . . . f f f . . . 
        `)
    aimP1 = 1
})
let hitP1 = false
let aimP1 = 0
let statusbar1: StatusBarSprite = null
let shotP1 = false
let hitP2 = false
let statusbar2: StatusBarSprite = null
let P1: Sprite = null
let P2: Sprite = null
let projectile: Sprite = null
let aimP2 = 0
let shotP2 = false
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111fff1111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111ff1111
    111f11f11ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11f1f11f111
    111f11f1f1f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11f1111f111
    111fff1111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff1111f1111
    111f111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111f11111
    111f1111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ffff111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
    11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
    11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
    111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
    111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
    ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
    dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
    dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
    ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
tiles.setCurrentTilemap(tilemap`level1`)
Player_1()
Player_2()
game.onUpdateInterval(2000, function () {
    shotP1 = true
    shotP2 = true
})
game.onUpdateInterval(1000, function () {
    hitP1 = true
    hitP2 = true
})
forever(function () {
    scene.centerCameraAt(0, (P1.y + P2.y) / 2)
})
