dotArray = []
let interval = null
let timeRunning = false
const FPS = 60

const colors = ["red", "green", "blue", "cyan", "yellow", "magenta", "purple", "teal"]

const start = () => {
    document.getElementById("universe").addEventListener("click", (e) => {
        createDot(colors[Math.floor(Math.random() * colors.length)], new Vector2(e.clientX, e.clientY), 2, "10")
    })

    toggleTime()
}

const fixedUpdate = () => {
    for (let i = 0; i < dotArray.length; i++) {
        for (let j = 0; j < dotArray.length; j++) {
            if (i === j) {
                continue
            }
 
            dotArray[j].applyGravityFrom(dotArray[i])
        }
    }
 }

const toggleTime = () => {
    if (timeRunning) {
        clearInterval(interval)
        timeRunning = false
    } else {
        interval = setInterval(fixedUpdate, 1000 / FPS)
        timeRunning = true
    }
}

const createDot = (color, position, mass, dia) => {
    let dot = new Dot(dotArray.length, color, position, mass, dia)
    dot.create()
    dotArray.push(dot)
}

start()

