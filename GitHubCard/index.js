// import axios from axios


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/mmitch2958').then(response => {
  const cards = document.querySelector('.cards')
  cards.append(cardMaker(response.data))


axios.get(response.data.followers_url).then(res => {
  console.log(res.data)
  res.data.forEach(elem => {
    axios.get('https://api.github.com/users/' + elem.login).then(res => {
      cards.append(cardMaker(res.data))
    })
  })
})
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

let cardMaker = (data) => {
  //Create copy of data to go in object 
  const card = document.createElement('div');
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //constrcut card 
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  image.src = data.avatar_url
  name.textContent = data.name
  username.textContent = data.login
  location.textContent = data.location
  profileLink.href = data.html_url
  profileLink.textContent = data.html_url
  profile.textContent = `Profile: `
  followers.textContent = `Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  //Append Information 
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  profile.appendChild(profileLink)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  
  card.appendChild(image)
  card.appendChild(cardInfo)

  //Return Object 

  return card
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
/*

function cardM(data){
  const component = `
  
  <div class="card">
  <img src=${data.img} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
  `
  return component
}git 
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
