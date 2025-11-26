
var postModal = document.querySelector(".postmodal");
var post = document.querySelector("#feed"); 
var newUserPost = false; 
const titleInput = document.querySelector("#titleInput"); 
const ImgUrlInput = document.querySelector("#ImgUrlInput"); 
// const profilePicInput = document.querySelector("#profilePicInput"); 
const descriptionInput = document.querySelector("#descriptionInput");
const postbtn = document.querySelector("#postBtn")



var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
localStorage.setItem("allUsers", JSON.stringify(allUsers));

var e = document.querySelector("body");
let isblack  = false;

function changeRules() {
  if (isblack === true) {
     e.style.backgroundColor = "#37383b";
    isblack  = false

  }else{
    e.style.backgroundColor = "white";
    isblack  = true 

  } 
}

function renderPosts() {

    post.innerHTML = "";
    var posts = JSON.parse(localStorage.getItem("postData")) || [];
    posts.forEach(p => {
        var postCard = document.createElement("div");
        postCard.classList.add("post-card");


        postCard.innerHTML = `
            <div class="post-header">
                <img src="${p?.userinfo?.userPic || 'https://picsum.photos/40'}" alt="Profile Pic">
                <div>
                <div class="post-name">${p?.userinfo.userName}</div>
                <div class="post-time">2 hours ago</div>
                 <button id= "EditBtn" data-id="${p?.id}" style="margin-left:10px;">Edit Post</button>
                </div>
            </div>
            <img class="post-img" src=${p?.imgUrl || "https://picsum.photos/600?food"} alt="Post Image">
            <p>${p.description || ''}</p>
            <div class="post-actions">
                <div class="btn">❤️ Like</div>
                <div class="btn">💬 Comment</div>
                <div class="btn">↗ Share</div>
                <button class="delete-btn" onclick="deletePost(${p?.id})" >Delete Post</button>
            </div>
        `;
        post.appendChild(postCard);
    });

}
renderPosts()



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
if (!descriptionInput.value && !profilePicInput) { 
    return alert("Please fill all fields!"); 

} 
    
    if(!loggedUser){
        alert("login first")
     return window.location = "login.html"
    }
var postData = { 
    id: Date.now().toString(),
    description: descriptionInput.value.trim(), 
     imgUrl: ImgUrlInput.value.trim(),  
    likes: [], 
    userinfo: { 
        firstName: loggedUser?.firstName, 
        lastName: loggedUser?.lastName, 
        userName: loggedUser?.firstName + " " + loggedUser?.lastName, 
        userPic: loggedUser?.userImg,
        postPic : loggedUser?.ImgUrlInput   
      } 
    };
    postDataArray.push(postData); 
    localStorage.setItem("logged in user", JSON.stringify(loggedUser));
    localStorage.setItem("postData", JSON.stringify(postDataArray));

    descriptionInput.value = "";
    ImgUrlInput.value = "";
    
    
    
    postModal.style.display = "none";    
    window.location = "index.html",
    
    // titleInput.value = ;
    // profilePicInput.value = "";
    // descriptionInput.value = "";
    renderPosts();
    alert("Post saved successfully!");
}

// function deletePost(id){
//     // return console.log(id)
//     let posts = JSON.parse(localStorage.getItem("postData")) || [];

//     let findPost = posts.find(p => p.id == id );
//     console.log(findPost)

//     // posts = posts.splice()

//     // localStorage.setItem("postData", JSON.stringify(posts));

//     // renderPosts();
// }





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
 

