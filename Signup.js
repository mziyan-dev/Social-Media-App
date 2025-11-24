var  userName = document.querySelector("#userName")
var FirstName = document.querySelector("#FirstName")
var LastName = document.querySelector("#LastName")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var Cpassword = document.querySelector("#Cpassword")



document.querySelector("#signupBtn").addEventListener("click",function () {
    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [] 

if(!userName.value || !FirstName.value || !LastName.value || !email.value || !password.value || !Cpassword.value){
    return alert("all fields are requird ")
}

if(password.value != Cpassword.value) return alert("password ande confirm password should match")

if(password.value.length < 8) return alert("password should be 8 characters long")  


    
const userNameExist = allUsers.find(function (userData) {
    return userData.userName.toLowerCase() == userName.value.toLowerCase()
})

const emailExist = allUsers.find(function (userData) {
    return userData.email.toLowerCase() == email.value.toLowerCase()
})

if(userNameExist) return alert("user name already exist")
if(emailExist) return alert("Email already exist Try to login")



 var userDetails = {
    userName : userName.value , 
    FirstName : FirstName.value , 
    LastName : LastName.value , 
    email : email.value , 
    password : password .value,

    

 
}
 
allUsers.push(userDetails);

localStorage.setItem("allUsers",JSON.stringify(allUsers))

window.location = "login.html"

})