
var postModal = document.querySelector(".postmodal");
var post = document.querySelector("#feed"); 
var newUserPost = false; 
const titleInput = document.querySelector("#titleInput"); 
const ImgUrlInput = document.querySelector("#ImgUrlInput"); 
// const profilePicInput = document.querySelector("#profilePicInput"); 
const descriptionInput = document.querySelector("#descriptionInput");
const postbtn = document.querySelector("#postBtn")
const signupbtn = document.querySelector("#signupbtn")
const loginbtn = document.querySelector("#loginbtn")
const Logoutbtn = document.querySelector("#Logoutbtn")
const EditBtn = document.getElementById("#EditBtn")

var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
localStorage.setItem("allUsers", JSON.stringify(allUsers));

let editingPostId = null;

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
                 <button id= "EditBtn" data-id="${p?.id}" onclick="editPosts(${p?.id})" style="margin-left:10px;">Edit Post</button>
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


function btns(){
 
    if (loggedUser){

  loginbtn.style.display = "none"
  signupbtn.style.display = "none"
  Logoutbtn.style.display = "block"

}else if(!loggedUser){
    
  loginbtn.style.display = "block"
  signupbtn.style.display = "block"
  Logoutbtn.style.display = "none"
}
}
btns()

function signup(){
    window.location = "Signup.html"

    
}
function login(){
    window.location = "login.html"


    
}

function LogoutHandler(){
  localStorage.removeItem("logged in user");
  window.location = "login.html"
 }
function isUserLoggedIn() { 
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
if (editingPostId) {
    let posts = JSON.parse(localStorage.getItem("postData")) || [];

    posts = posts.map(p => {
        if (p.id === editingPostId) {
            return {
                p,
                description: descriptionInput.value.trim(),
                imgUrl: ImgUrlInput.value.trim()
            };
        }
        return p;
    });

    localStorage.setItem("postData", JSON.stringify(posts));

    editingPostId = null;
    document.querySelector(".btn-primary").innerText = "Post";

    let modalEl = document.getElementById("exampleModal");
    let modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    renderPosts();
    alert("Post updated successfully!");
    return
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

    renderPosts();
    alert("Post saved successfully!");
}

function deletePost(id){

    let posts = JSON.parse(localStorage.getItem("postData")) || [];
    let filterdPosts = posts.filter(p => p.id != id );
    const setData = localStorage.setItem("postData", JSON.stringify(filterdPosts || []));
    alert("confirm you delete your post")

    renderPosts();
}



function editPosts(id) {
    let posts = JSON.parse(localStorage.getItem("postData")) || [];
    let editPosts = posts.find(p => p.id == id);

    if (!editPosts) return;

    ImgUrlInput.value = editPosts.imgUrl;
    descriptionInput.value = editPosts.description;


    editingPostId = id;


    document.querySelector(".btn-primary").innerText = "Update";


    let m = new bootstrap.Modal(document.getElementById("exampleModal"));
    m.show();
}






//  let posts = JSON.parse(localStorage.getItem("postData"));
//     if (!Array.isArray(posts)) posts = [];

//     if (editingPostId) {

//         let updatedPosts = posts.map(p => {
//             if (p.id === editingPostId) {
//                 return {
//                     ...p,
//                     description: descriptionInput.value.trim(),
//                     imgUrl: ImgUrlInput.value.trim()
//                 };
//             }
//             return p;
//         });

//         localStorage.setItem("postData", JSON.stringify(updatedPosts));

//         editingPostId = null;
//         document.querySelector(".btn-primary").innerText = "Post";

//         descriptionInput.value = "";
//         ImgUrlInput.value = "";

//         let modalEl = document.getElementById("exampleModal");
//         let modal = bootstrap.Modal.getInstance(modalEl);
//         modal.hide();

//         renderPosts();
//         return alert("Post updated successfully!");
//     }

