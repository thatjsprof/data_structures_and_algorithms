class Dequeue {
    constructor () {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    addFront (element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.lowestCount; i < this.count; i++) {
                let val = this.items[i]
                this.items[i + 1] = val
            }
            this.items[this.lowestCount] = element
            this.count++
        }
    }

    addBack (element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront () {
        if (this.isEmpty()) {
            return undefined
        }

        let result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack () {
        if (this.isEmpty()) {
            return undefined
        }

        this.count--
        let result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    isEmpty () {
        return this.count - this.lowestCount === 0
    }
}

const dequeue = new Dequeue()
dequeue.addFront('holla')
dequeue.addFront('nice')
dequeue.removeFront()
dequeue.addFront('nice')
console.log(dequeue)