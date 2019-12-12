const userInfo = document.querySelector("#username");
const passInfo = document.querySelector("#password");

const loginButton = document.querySelector("#loginButton");

const loginRequest = () => {
    let xhr = new XMLHttpRequest();
    const url = "/login"; //update when corresponding endpoint is updated in router
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
        }
    }
    xhr.open("POST", url, true);
    xhr.send();
};


loginButton.addEventListener("click", )




