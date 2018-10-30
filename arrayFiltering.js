
let array_1 = [{ id: '_i23455szq', description: 'description text' }, { id: '_h6yf2uk1n', description: 'description text' }]

let array_2 = [
    { id: '_h6yf2uk1n', description: 'text', capacity: 2 },
    { id: '_465324423', description: 'text', capacity: 4 },
    { id: '_i23455szq', description: 'text', capacity: 0 },
    { id: '_54234gfgd', description: 'text', capacity: 0 },
]

const ids = array_1.map(obj => obj.id)
// const ids = new Set(array_1.map(({ id, description }) => id));
console.log(ids)

let result = array_2.filter(obj => ids.includes(obj.id) || obj.capacity > 0) 
// let result = array_2.filter(({ id, capacity }) => ids.has(id) || capacity > 0)
console.log(result);
