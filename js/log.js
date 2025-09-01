let form = document.querySelector(".inputform")
let input = document.querySelectorAll("input");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let sedt = true;
    input.forEach((input) => {
        if (!input.value.trim()) {
            sedt = false;
        }
    });  
    
    if (sedt) {
        window.location.href = "login.html"
    }
})



