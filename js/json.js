const user = { name: "Osman", id: 12, job: "Developer" };
// JavaScript Object Notation (JSON)
const stringiFied = JSON.stringify(user);
// console.log(user);
// console.log(stringiFied);

/*
{ name: 'Osman', id: 12, job: 'Developer' }
{"name":"Osman","id":12,"job":"Developer"}
*/

const shop = {
    name: 'Osman',
    address: {
        street: 'Balaram Hat',
        city: 'Boda',
        country: 'Bangladesh'
    },
    products: ['Laptop', 'Mic', 'Monitor', 'Ups'],
    revenue: 50000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
