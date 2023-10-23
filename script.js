const inputBox = document.getElementById("input-box")
const btn = document.getElementById("btn")

const length = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#!$%^&*()_+/*><"

const allChars = upperCase + lowerCase + number + symbol

const genRanPass = ()=>{
    let password = ""
    password+=upperCase[Math.floor(Math.random() * upperCase.length)]
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]

while(length>password.length)
{
  password += allChars[Math.floor(Math.random() * allChars.length)]

}
inputBox.value = password
}

btn.addEventListener("click",genRanPass)

//copy password

const copyPass = document.getElementById("copy-pass")

function copyPassword(){
    inputBox.select()
    document.execCommand("copy") 
    console.log("copied")
    // navigator.clipboard.writeText(inputBox.value);
    // alert("copied")
}

copyPass.addEventListener("click",copyPassword)