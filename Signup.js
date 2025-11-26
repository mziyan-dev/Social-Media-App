var  userName = document.querySelector("#userName")
var firstName = document.querySelector("#firstName")
var lastName = document.querySelector("#lastName")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var Cpassword = document.querySelector("#Cpassword")



document.querySelector("#signupBtn").addEventListener("click",function () {
    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [] 

if(!userName.value || !firstName.value || !lastName.value || !email.value || !password.value || !Cpassword.value){
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
    firstName : firstName.value , 
    lastName : lastName.value , 
    email : email.value , 
    password : password.value,
    userImg : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAMFBMVEXk5ueutLfn6eqrsbTb3t/KztCxt7qorrLf4uPR1Na6v8G1ur29wsTGyszU19nN0dMcwvmWAAAEOElEQVR4nO2c27arIAxFIVwVhP//24P2smurrUICjHFcT+3eL3MECAFWytilS5cuXbp06dKlHcGi1hSbSlhWyqCmaVIxSGlZV6AJJkzecSNuMoI7PwXWD2PwmgvBV5q/+y4gwSpn3uieMlrZxozAJr2Hdwulm1rGEVjcDd/LcMdmjCDHn3zLWI+yEaLihwBTGLlqgAj2WADvYfS2PqA7ATivmNqA8ugI/6nqZMwB5FrWBNSn+ZJEtbkINiOCSxSrIZ5ZxasgjpUAfSZgQvQ1VgvEbMCEOFRAlPl8syos6LEIUIzkQRwKxniWCdSIZXycPOWAKgxhkiIltFmbSc0gIoSQG9Ji0ZUDpiDSEcJgMAgJ0zbkbshv8lSAzOIA0lWKoHAA0zATERYUNW+EVCWORVnJCyIRYcAC5IZoIpYUhmuJSBJEwJqGSTQTERD25IdozveAsqHcRFM9WERCmguIgElIUWkjlQ13URQPEBEJSdJN0Tn5g5Ciir0IEQgxzii0hP2vlO6zDZO9Z2zGUHc9CsD+KwfU6us/rWBRLm1uIkmHSQGNkOokhXca5VQXN0jXNulETwQIEQeQ8Fak+5slBmUvFQ+RDTLDWs2C8sGi91tinCqW9m0P47WC1vGAEESqHe+J2HkI57NA9y+PhZfZNV7pyzaWGmaMonGu4iJgMOU7MaZKvqXu3SyM5eVt4eoZ6LJcVULX9MRmWFqEruvkPH1mSUNc2cd52iFZ3/Z86oBfLc2sEYfDTl1N8473G/Gg21mM7YztMPyejcJV2el2EW18b1lYy3DVvnshur35KLhr57h/EUCYnPjs/hBjPy0qc3/P4GcocYcz3Me5z6c12UoATIZBKRVjkKzTbil4qDXIWg8gmyRvmj+u/tdOS4fZENXkndNcmIfSfNRu9JMagrTNMOcGM+UT2LJCNvLN7c+JdBqqU86Ri56b3y1Id1YzZ55qLXyQ9hHvPrrfflIKnShrxFIqLTIbF2b5wAizJIBU49GR3Qul0WQ7DcAw6rNjuwnJ3YRfjqX9QmHQPSDNiBxIkD9aG88zijGirZoUP6ynnjWkHnDiCNIjju9KxiEwAvPI47uScIXHfLCY62NTZU2lEEgm4FqipNki/6LwHGPmjQ6Ec/ceRYw5YUQzsB/TeHZRgx0x3TVHdO7cD5IyxWzr1FsVDLXxFsTjz86oPr4ziEcnYyvAw5dkBc8l5YhHMmNLwEOXye2G+InYN+DPHy0APGtXPuL0jbCwNxlHX98N6tUK37Tvx8G0QBZp7wEQ1bRepL1XXgwvDZK2DeVYTaEoMhtZsYdE86KNOgfRQoqhDctG881kLfHp2O5nmdz07m1qvx9/CvoOIX87WrU5mHzX27Gll/1upVfHsW0Ns6XX42nbyn9X5oWww3XC5/6GJyJqVy2e/krZYucolZ5FGPjWKDtaDJ//ABWWO3TnkoPGAAAAAElFTkSuQmCC",
    

 
}
 
allUsers.push(userDetails);

localStorage.setItem("allUsers",JSON.stringify(allUsers))

window.location = "login.html"

})