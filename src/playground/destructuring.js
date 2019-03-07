//************OBJECTS************

// const person = {
//     name: 'Leo',
//     age: 22,
//     location: {
//         city: 'BsAs',
//         temp: 0
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && (temperature || temperature === 0)) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holliday',
//     publisher: {
//         name: 'Penguin',
//         country: 'UK'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//***************ARRAYS****************

const adress = ['Av Mitre 850', 'Avellaneda', 'Buenos Aires', '1234'];
const [, location = 'Microcentro', province = 'CABA'] = adress;
console.log(`You are in ${location}, ${province}`);

const item = ['Coffe', '40', '50', '70'];
const [product, , price='???'] = item;
console.log(`A medium ${product} costs ${price}`);