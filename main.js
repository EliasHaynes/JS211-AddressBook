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
let li2 = document.createElement('li');
let br = document.createElement('br')

const displayUser =() => {
    
    //arrayOfUsers itself is an object because we turned it into JSON but the array results is nested in the object and contains all the data so then we direct into that array so we can then perform Array higher order functions on the data. If we dont direct to the results array and try to do Array functions on the entire JSON then we will get not a function because you cant perfrom array fucntions on an object!
    arrayOfUsers.results.map((user) => {

    // Create each users li and then give each user a random # as their id
            // !!!!!!!!!      // const id1= user.id.value //This is the normal way to set a element to have an id from an apis data (We had to do it differently because the ids in the api are weird)
        const id1 = Math.floor(Math.random() * 10000000000)
        li = document.createElement('li');
        li.setAttribute('id', id1)
    //Display their First and Last name from the data
        const text = `First Name: ${user.name.first}, Last Name: ${user.name.last}`
        console.log(user)
    //Display their thumbnail images
        const source = user.picture.thumbnail
        const img = document.createElement('img')
        img.src = source;
    //Display more info buttons
        let butt = document.createElement('button')
        const buttDisplayText = document.createTextNode("More Info")
        
    //Display the additional info when button is pressed
        butt.onclick = function displayMoreUserInfo () {
                    //The JS created elements
                const li2 = document.createElement('li')
                const innerul = document.createElement('ul');
                    //Grab each individual users li by its id (The first li)
                const currentLi = document.getElementById(id1)
                    //Infromation of the users from the data
                const grabAge = user.dob.age;
                const grabPhone = user.cell;
                    //Creating a string from the stored properties
                const theInfo = `Age: ${grabAge} Phone #: ${grabPhone}`;
            //Display the string containing each individual users additional info
                li2.innerHTML = theInfo;
                    //Append the second li to the second ul
                innerul.appendChild(li2)
                    //Append the new ul to the users existing li
                currentLi.appendChild(innerul)
        }

    //Img's
        //Append each users img to the allUsers ul
        allUsers.append(img) 
        
    
    //Individual users information
        li.innerHTML = text;
            //Append each users individual li to the ul
        allUsers.appendChild(li)
            
    //Button's
            //Buttons label
        butt.appendChild(buttDisplayText)
            //Also append the 'More Info' button to each user along their information
        li.append(butt)
})
}
