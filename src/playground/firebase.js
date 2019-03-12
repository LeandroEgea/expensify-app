//import * as firebase from 'firebase';

//CONFIG

// const config = {
//     apiKey: "AIzaSyDL7GvXvy0XcmYED-cM_h5qb3hXFoteemo",
//     authDomain: "expensify-78545.firebaseapp.com",
//     databaseURL: "https://expensify-78545.firebaseio.com",
//     projectId: "expensify-78545",
//     storageBucket: "expensify-78545.appspot.com",
//     messagingSenderId: "311317581043"
// };

// firebase.initializeApp(config);
// const database = firebase.database();

//SUBSCRIBES

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, () => {
//     console.log('Error with data fetching', e);
// });

// const onExpenseRemove = database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// const onChildChange = database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// const onChildChange = database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//PUSH

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 190050,
//     createdAt: 92237667
// });

//EXAMPLE

// firebase.database().ref().set({
//     name: 'Leo',
//     job: {
//         title: 'Trainee Dev',
//         company: 'Lagash'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('Fail!', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const emp = snapshot.val();
//     console.log(`${emp.name} is a ${emp.job.title} at ${emp.job.company}`);
// }, () => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('name').set('Bob');
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('name').set('Rob');
// }, 10000);

// database.ref() //('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//SET

// firebase.database().ref().set({
//     name: 'Leo E',
//     age: 22,
//     stressLevel: 5,
//     job: {
//         title: 'Trainee Dev',
//         company: 'Lagash'
//     },
//     location: {
//         city: 'BsAs',
//         country: 'Arg'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('Fail!', e);
// });

//UPDATE

// firebase.database().ref().update({
//     stressLevel: 3,
//     'job/company': 'Amazon',
//     'location/city': 'Mendoza',
//     age: null
// });

//REMOVE

// firebase.database().ref('name').remove()
//     .then(() => {
//         console.log('removed');
//     }).catch((e) => {
//         console.log('Fail', e);
//     });