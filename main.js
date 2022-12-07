// import fetch from 'node-fetch';
let arrayOfUsers = [];

window.onload = function() {
    getUsers()
}

function getUsers() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(users => {
            arrayOfUsers = users
            console.log(arrayOfUsers)
        })
}

