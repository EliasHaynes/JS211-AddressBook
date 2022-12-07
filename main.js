// import fetch from 'node-fetch';
let arrayOfUsers = [];

window.onload = function() {
    // getAUser()
    getTwentyUsers()
}

// function getAUser() {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(user => {
//             arrayOfUsers = user
//             console.log('Get a User:', arrayOfUsers)
//         })
// }

function getTwentyUsers() {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(users => {
            arrayOfUsers = users
            console.log('Get Users:', arrayOfUsers)
        })
}

const displayUser =() => {
    const allUsers = document.getElementById('all-users')
    //arrayOfUsers itself is an object because we turned it into JSON but the array results is nested in the object and contains all the data so then we direct into that array so we can then perform Array higher order functions on the data. If we dont direct to the results array and try to do Array functions on the entire JSON then we will get not a function because you cant perfrom array fucntions on an object!
    arrayOfUsers.results.map((user) => {
        const li = document.createElement('li');
        
        const source = user.picture.thumbnail
        const img = document.createElement('img')
        img.src = source;
        const text = document.createTextNode(`First Name: ${user.name.first}, Last Name: ${user.name.last},`)
        li.appendChild(text)
        allUsers.append(li)
        allUsers.append(img)
    })
}

