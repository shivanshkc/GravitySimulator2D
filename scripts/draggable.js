class Draggable {
    constructor(id) {
        this.id = id
        
        document.getElementById(id).addEventListener("mousedown", this._startDragging)
    }

    _startDragging(e) {
        let elem = document.getElementById(this.id)

        const mousemoveFn = (e) => {
            elem.style.top = e.clientY + "px"
            elem.style.left = e.clientX + "px"
        }

        elem.addEventListener("mousemove", mousemoveFn)
        elem.addEventListener("mouseup", () => {
            elem.removeEventListener("mousemove", mousemoveFn)
        })
    }


}