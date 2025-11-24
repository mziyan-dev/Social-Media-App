
var postModal = document.querySelector(".postmodal")
var post = document.querySelector("#userPost")
var newUserPost = false

const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput  = document.querySelector("#lastNameInput");
const profilePicInput = document.querySelector("#profilePicInput");
const descriptionInput = document.querySelector("#descriptionInput");



  var allUsers = JSON.parse(localStorage.getItem('allUsers')) || []
var postData = JSON.parse(localStorage.getItem('postData')) || [] 
localStorage.setItem("allUsers",JSON.stringify(allUsers));



function getFeed(){
const getData =  localStorage.getItem("postData", JSON.stringify(postDataArray));
   console.log(getData);
   
}
getFeed()

var postDataArray = JSON.parse(localStorage.getItem('postData')) || [];

function signup(){
    window.location = "Signup.html"
    
}
function login(){
    window.location = "login.html"
}
function newPost(){
     if (postModal.style.display === "none") {
        postModal.style.display = "block !important";  // Show
    } else {
        postModal.style.display = "none";   // Hide
    }
}
var userDetails = {
   FirstName : firstNameInput.value , 
   LastName : lastNameInput.value , 
   profilepic : profilePicInput.value,
   description: descriptionInput.value,

}


var postData = {
   FirstName : firstNameInput.value , 
   LastName : lastNameInput.value , 
   profilepic : profilePicInput.value,
   description: descriptionInput.value,

}
function PostHandler() {
  
    var postData = {
        FirstName : firstNameInput.value,
        LastName : lastNameInput.value,
        profilepic : profilePicInput.value,
        description : descriptionInput.value
    }

    if(!postData.FirstName || !postData.LastName || !postData.description){
        return alert("Please fill all fields!");
    }

    postDataArray.push(postData);

    localStorage.setItem("postData", JSON.stringify(postDataArray));

    alert("Post saved successfully!");

    postModal.style.display = "none";

    firstNameInput.value = "";
    lastNameInput.value = "";
    profilePicInput.value = "";
    descriptionInput.value = "";
}













//  firstNameInput.value = loggedUser.FirstName || "";
//  lastNameInput.value = loggedUser.LastName || "";
//  profilePicInput.value = loggedUser?.profilepic || "";
//  descriptionInput.value =loggedUser?.description || "";

