// Stack using arrays. O(n) time complexity
class StackArray {
    constructor () {
        this.items = []
    }

    push (element) {
        this.items.push(element)
    }

    pop () {
        return this.items.pop()
    }

    peek () {
        return this.items[this.items.length - 1]
    }

    toString () {
        return this.items.join(',')
    }

    isEmpty () {
        return this.items.length === 0
    }

    size () {
        return this.items.length
    }

    clear () {
        this.items = []
    }
}

// Stack using objects with a count variable to keep track
const _items = Symbol('stackItems')
class StackObject {
    constructor () {
        this.count = 0
        this[_items] = {}
    }

    push (element) {
        this[_items][this.count] = element
        this.count++
    }

    pop () {
        if (this.isEmpty()) return undefined
        
        this.count--
        let result = this[_items][this.count]
        delete this[_items][this.count]
        return result
    }

    peek () {
        if (this.isEmpty()) {
            return undefined
        }

        return this[_items][this.count - 1]
    }

    size () {
        return this.count
    }

    isEmpty () {
        return this.count === 0
    }

    clear () {
        this.count = 0
        this[_items] = {}
    }

    toString () {
        if (this.isEmpty()) {
            return ''
        }

        let objString = this[_items][0]
        for (let i = 0; i < this.size(); i++) {
            objString = `${objString},${this[_items][i]}`
        }
        return objString
    }
}

const items = new WeakMap()
class StackWeak {
    constructor () {
        items.set(this, [])
    }

    pop () {
        const s = items.get(this)
        const r = s.pop()
        return r
    }

    push (element) {
        const s = items.get(this)
        s.push(element)
    }
}

// Application of stack to convert decimal number to binary equivalent
function convertDecimalToBinary (decimalNunber, base) {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decimalNunber
    let remainder
    let binaryString = ''

    if (!(base >= 2 && base <= 36)) {
        return ''
    }

    let stack = new StackArray()
    while (number > 0) {
        remainder = Math.floor(number % base)
        stack.push(remainder)
        number = Math.floor(number / base)
    }
    
    while (!stack.isEmpty()) {
        binaryString += digits[stack.pop()]
    }

    return binaryString
}

console.log(convertDecimalToBinary(11, 2))