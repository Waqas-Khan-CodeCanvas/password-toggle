const inputElement=document.querySelector("input");
const eyeElement=document.querySelector(".eye");


eyeElement.addEventListener("click",()=>{
    if (inputElement.type=="password") {
        inputElement.type="text"
        eyeElement.classList.replace("fa-eye-slash","fa-eye")
    } else {
        inputElement.type="password"
        eyeElement.classList.replace("fa-eye","fa-eye-slash")
    }
})