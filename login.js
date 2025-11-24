const emailLogin = document.querySelector("#email")
const passwordLogin = document.querySelector("#password")



document.querySelector("#loginBtn").addEventListener('click', function () {
    if (!emailLogin.value || !passwordLogin.value) return alert("write all of the field");

    if (passwordLogin.value.length < 8) return alert("password is incorrect")

    const allUser = JSON.parse(localStorage.getItem("allUsers")) || []
    const isExist = allUser.find(function (userData) {
        return userData.email === emailLogin.value
    })
    console.log(isExist, "===>>>isExist");

    if (!isExist) {
        alert("please create your account first")
        return window.location = "SignUp.html"
    }

    if (isExist.password === passwordLogin.value) {
        alert("congrats, we are siging up you")
        localStorage.setItem("logged in user", JSON.stringify(isExist))
         return window.location = "index.html"

    } else {
        alert("Incorrect password")
    }
})