
var postModal = document.querySelector(".postmodal");
var post = document.querySelector("#feed"); 
var newUserPost = false; 
const titleInput = document.querySelector("#titleInput"); 
const profilePicInput = document.querySelector("#profilePicInput"); 
const descriptionInput = document.querySelector("#descriptionInput");

const postbtn = document.querySelector("#postBtn")

var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
localStorage.setItem("allUsers", JSON.stringify(allUsers));



// var postData = localStorage.setItem('postData',JSON.stringify(postData))|| [] 

 



function getFeed(){
const getData = localStorage.getItem("postData");
   console.log(getData);
   
}
renderPosts()
function renderPosts() {
    post.innerHTML = "";
    var posts = JSON.parse(localStorage.getItem("postData")) || [];
    posts.forEach(p => {
        var postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <div class="post-header">
                <img src="${p.userinfo.userPic}" alt="Profile Pic">
                <div>
                    <div class="post-name">${p.userinfo.userName}</div>
                    <div class="post-time">2 hours ago</div>
                </div>
            </div>
            <img class="post-img" src="${p.imgUrl}" alt="Post Image">
            <div class="post-actions">
                <div class="btn">❤️ Like</div>
                <div class="btn">💬 Comment</div>
                <div class="btn">↗ Share</div>
            </div>
        `;
        post.appendChild(postCard);
    });
}

var postDataArray = JSON.parse(localStorage.getItem('postData')) || [];
var loggedUser = JSON.parse(localStorage.getItem("logged in user"));
console.log(loggedUser);


function signup(){
    window.location = "Signup.html"
    
}
function login(){
    window.location = "login.html"
}
function newPost() { 
    if(!loggedUser){
   postbtn.style.display ="none"
    }
    if (postModal.style.display === "none" || postModal.style.display === "") {
     postModal.style.display = "block";
    }else { postModal.style.display = "none"; }
 }



function PostHandler() { 
if (!titleInput.value || !descriptionInput.value) { 
    return alert("Please fill all fields!"); 

} 
    
    if(!loggedUser){
        alert("login first")
     return window.location = "login.html"
    }
var postData = { 
    title: titleInput.value, 
    description: descriptionInput.value, 
    imgUrl: profilePicInput.value, 
    likes: [], 
    userinfo: { 
        firstName: loggedUser?.firstName, 
        lastName: loggedUser?.lastName, 
        userName: loggedUser?.firstName + " " + loggedUser?.lastName, 
        userPic: loggedUser?.userPic  
      } 
    };
    postDataArray.push(postData); 
    localStorage.setItem("logged in user", JSON.stringify(loggedUser));
    localStorage.setItem("postData", JSON.stringify(postDataArray));

    // renderPosts();    
       
    alert("Post saved successfully!");



    postModal.style.display = "none";
    window.location = "index.html"

    // titleInput.value = ;
    // profilePicInput.value = "";
    // descriptionInput.value = "";
    renderPosts();
}










//  post.innerHTML = `   <div class="post-card">
//         <div class="post-header">
//     <img src="${postData.userinfo.userPic}">
//     <div>
//     <div class="post-name">${postData.title}</div>
//     <div class="post-time">2 hours ago</div>
//     </div>
//     </div>
    
//       <img class="post-img" src="${postData.imgUrl}">
      
//       <div class="post-actions">
//       <div class="btn">❤️ Like</div>
//       <div class="btn">💬 Comment</div>
//       <div class="btn">↗ Share</div>
//       </div>
//     </div>`
 

 
