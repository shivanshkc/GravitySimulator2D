class Dot {
    constructor(id, color, position, mass, dia) {
        this.id = id
        this.color = color
        this.position = position
        this.mass = mass
        this.dia = dia + "px"
        this.velocity = new Vector2(0, 0)
    }

    create () {
        let div = document.createElement("div")
        div.className = "dot"
        div.id = this.id
        div.style.backgroundColor = this.color
        div.style.top = this.position.y + "px"
        div.style.left = this.position.x + "px"

        div.style.height = this.dia
        div.style.width = this.dia

        document.getElementById("universe").appendChild(div)
    }

    applyGravityFrom (dot) {
        let force = this.position.displacementTo(dot.position).multiply(this.mass * dot.mass / this.position.displacementTo(dot.position).magnitude())

        this.applyForce(force)
    }

    isTouching (dot) {
        let minDist = (parseFloat(this.dia) + parseFloat(dot.dia)) / 2
        let distBetween = this.position.displacementTo(dot.position)
        return Math.abs(distBetween.x) <= minDist && Math.abs(distBetween.y) <= minDist
    }

    applyForce (force) {
        let t = 10 / FPS;
        let a = force.multiply(1 / this.mass)

        this.position = this.position.add((this.velocity.multiply(t)).add(a.multiply(t * t).multiply(0.5)))

        this.velocity = this.velocity.add(a.multiply(t))

        let div = document.getElementById(this.id)
        div.style.top = this.position.y + "px"
        div.style.left = this.position.x + "px"
    }
}