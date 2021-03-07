class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    direction() {
        return this.multiply(1 / this.magnitude())
    }

    displacementTo(vector2) {
        return new Vector2(vector2.x - this.x, vector2.y - this.y)
    }

    add(vector2) {
        return new Vector2(this.x + vector2.x, this.y + vector2.y)
    }

    multiply(num) {
        return new Vector2(this.x * num, this.y * num)
    }

    magnitude () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    dotProductWith (vector2) {
        return (this.x * vector2.x) + (this.y * vector2.y)
    }

    angleWith(vector2) {
        let ang = this.dotProductWith(vector2) / (this.magnitude() * vector2.magnitude())
        ang = ang > 1 ? 1 : ang < -1 ? -1 : ang
        return Math.acos(ang)
    }

    rotateByAngle(radians) {
        let ca = Math.cos(radians)
        let sa = Math.sin(radians)

        return new Vector2(ca * this.x - sa * this.y, sa * this.x + ca * this.y)
    }

    toString () {
        return "x: " + this.x + ", y: " + this.y
    }
}