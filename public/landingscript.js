
const loginButton = document.querySelector("#loginButton");


const loginRequest = () => {
    event.preventDefault()
    let userInfo = document.querySelector("#username").value;
    let passInfo = document.querySelector("#password").value;
    console.log("This is user and pass", userInfo, passInfo);
    let data = {
        username: userInfo,
        password: passInfo
    }    
    let xhr = new XMLHttpRequest();
    const url = "/game"; //update when corresponding endpoint is updated in router
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
        }
    }
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(data));
};


loginButton.addEventListener("click", loginRequest)




