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
const allUsers = document.getElementById('all-users')
// const li = document.createElement('li');
// li.id = 'button'

const displayUser =() => {
    // const allUsers = document.getElementById('all-users')
    //arrayOfUsers itself is an object because we turned it into JSON but the array results is nested in the object and contains all the data so then we direct into that array so we can then perform Array higher order functions on the data. If we dont direct to the results array and try to do Array functions on the entire JSON then we will get not a function because you cant perfrom array fucntions on an object!
    arrayOfUsers.results.map((user) => {
        //display their names
        const li = document.createElement('li');
        li.id = 'button'
        const text = document.createTextNode(`First Name: ${user.name.first}, Last Name: ${user.name.last},`)
        //display their thumbnails
        const source = user.picture.thumbnail
        const img = document.createElement('img')
        img.src = source;
        //display more info buttons
        const butt = document.createElement('button')
        const buttDisplayText = document.createTextNode("More Info")
        butt.onclick = displayMoreUserInfo
        //button
        butt.appendChild(buttDisplayText)
        allUsers.append(butt)
        //li text
        li.appendChild(text)
        allUsers.append(li)
        //img
        allUsers.append(img)
        
    })
}

const displayMoreUserInfo = () => {
    arrayOfUsers.results.map((user) => {
        const grabAge = user.dob.age
        const grabPhone = user.phone
        let liId = document.getElementById('button')
        
        const theInfo = document.createTextNode(` Age: ${grabAge} Phone #: ${grabPhone}`)
        liId.appendChild(theInfo)
        allUsers.append(li)
    })
    console.log('Hey!')
    
}

