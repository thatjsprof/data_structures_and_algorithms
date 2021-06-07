let result

let friends = [
    {
        name: 'Ade',
        age: 20
    },
    {
        name: 'David',
        age: 30
    },
    {
        name: 'Simon',
        age: 15
    }
]

function compareSort (a, b) {
    if (a.age < b.age) {
        return -1
    }

    if (a.age > b.age) {
        return 1
    }

    return 0
}

result = friends.sort(compareSort)

console.log(result)

let names = ['David', 'Anna', 'anna', 'Joel', 'Ben', 'Blue', 'ivy']
result = names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    }

    if (a.toLowerCase() > b.toLowerCase()) {
        return 1
    }

    return 0
})
console.log(result)
console.log(names.sort((a, b) => a.localeCompare(b)))