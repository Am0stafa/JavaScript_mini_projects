const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')




async function getUser(username) {
    try{
   const {data} = await axios.get(APIURL + username)
   createusercard(data);

    }
    catch(error){
     if(error.response.status === 404){
        createerror();
     } 
    }

}

form.addEventListener('submit',(e)=>{
e.preventDefault();
const user = search.value;

getUser(user);
search.value ='';
})

function createusercard(user) {
    const cardhtml =` 
    <div class="card">
    <img src="${user.avatar_url}" alt="userphoto" class="avatar">

   <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
        <li> ${user.followers} <strong>Followers</strong></li>
        <li>${user.following}  <strong>Following</strong></li>
        <li>${user.public_repos} <strong> Number of Repos</strong></li>
    </ul>
    <div id="repos">
        <a href="#" class="repos">repo 1</a>
        <a href="#" class="repos">repo 2</a>
        <a href="#" class="repos">repo 3</a>
    </div>
  </div>
  </div>
`

main.innerHTML = cardhtml
}

function createerror(){
    const cardhtmlerror =` 
    <div class="card">
    <h1> User not Found 404 </h1>
  </div>
`

main.innerHTML = cardhtmlerror;
}