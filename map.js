const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]


// MAP

// const itemNames = items.map((item) => {
//     return item.name
// })


// console.log(itemNames)


////////////////////////////////////////////////////////////
// FIND

// const foundItem = items.find((item => {
//     return item.name === 'Phone' 
// }))

// console.log(foundItem)


////////////////////////////////////////////////////////////
// FOR EACH

// items.forEach((item) => {
//     console.log(item.name)
//     console.log(item.price)
// })

// const hasInexpensiveItems = items.some((item) => {
//     return item.price <= 50
// })

// console.log(hasInexpensiveItems)

// const hasExpensiveItems = items.every((item) => {
//     return item.price <= 100
// })

// console.log(hasExpensiveItems)

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

////////////////////////////////////////////////////////////
