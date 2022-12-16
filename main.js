// import fetch from 'node-fetch';
let arrayOfUsers = [];

window.onload = function() {
    // getAUser()
    getTwentyUsers()
}

function getTwentyUsers() {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(users => {
            arrayOfUsers = users
            console.log('Get Users:', arrayOfUsers)
        })
}

let allUsers = document.getElementById('all-users')
let ul = document.getElementById('more-info')
let li2 = document.createElement('li');
let br = document.createElement('br')

const displayUser =() => {
    
    //arrayOfUsers itself is an object because we turned it into JSON but the array results is nested in the object and contains all the data so then we direct into that array so we can then perform Array higher order functions on the data. If we dont direct to the results array and try to do Array functions on the entire JSON then we will get not a function because you cant perfrom array fucntions on an object!
    arrayOfUsers.results.map((user) => {
        //display their names
        const id = Math.floor(Math.random() * 10000000000)

        li = document.createElement('li');
        li.setAttribute('id', id)
    
        const text = document.createTextNode(`First Name: ${user.name.first}, Last Name: ${user.name.last}`)
        console.log(user)
        //display their thumbnails
        const source = user.picture.thumbnail
        const img = document.createElement('img')
        img.src = source;
        //display more info buttons
        let butt = document.createElement('button')
        const buttDisplayText = document.createTextNode("More Info")
        butt.setAttribute('id',id)
        
        butt.onclick = function displayMoreUserInfo () {
            // arrayOfUsers.forEach(user => {
                // user = arrayOfUsers.results[0].id.value;
                const currentLi = document.getElementById(id)
                const grabAge = user.dob.age
                const grabPhone = user.cell
                const li2 = document.createElement('li')
                const innerul = document.createElement('ul');
                const theInfo = ` Age: ${grabAge} Phone #: ${grabPhone}`
                li2.innerHTML = theInfo;
                
                innerul.appendChild(li2) 
                currentLi.appendChild(innerul)
                console.log(li2,innerul,currentLi)
            // })
        }
        //img
        allUsers.append(img) //append each users img to the allUsers ul
        
        // allUsers.append(butt) //Give each user a more info button
        //li text
        li.append(text) //append the information to each li(user)
        allUsers.append(li)// append the lis to the allUsers ul
        //button
        butt.appendChild(buttDisplayText) //Buttons label
        li.append(butt)
})
}


//get the value of the button by giving it an id instead of the li
// target the ids of the users given in the response
// with the users special ids i can filter throught the array and find that users id in the array




// function displayMoreUserInfo () {
//     // arrayOfUsers.forEach(user => {
//         // user = arrayOfUsers.results[0].id.value;
//         const grabAge = arrayOfUsers.results[0].dob.age
//         const grabPhone = arrayOfUsers.results.cell
//         li2 = document.createElement('li')
//         ul = document.getElementById('more-info')
//         const theInfo = document.createTextNode(` Age: ${grabAge} Phone #: ${grabPhone}`)
        
//         li2.append(theInfo)
//         li.appendChild(li2)
//         allUsers.appendChild(li2) 
//     // })
    
// console.log(arrayOfUsers.results[0].id.value)
// console.log(arrayOfUsers.results[0].dob.age)

















//     // ul.innerHTML = ""
//     // let number = Array.from(contact.parentElement.children).indexOf(contact) // I understand that .from() is to turn an array into a string but which one is the array, parentElement or children? and what are these properties exactly?
//     // let index = data.results[number]
//     // li2 = document.createElement('li')
//     // li2.innerHTML = `Email: <u>${index.email}</u>
//     // <br>
//     // Age: ${index.dob.age}
//     // <br>
//     // Address:
//     // <br><i>
//     // ${index.location.street.number} ${index.location.street.name} <br>${index.location.city}, ${index.location.state} <br>${index.location.country} </i>`
//     // ul.append(li2)
//     // contact.append(ul)//?
// }

