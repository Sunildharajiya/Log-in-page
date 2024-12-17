let user = {
    username: "sunildharajiya",
    pd: "1234"
};

let uname = document.querySelector(".uname");
let password = document.querySelector(".password");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    if (uname.value === user.username && password.value === user.pd) {
        alert(`Welcome ${user.username}`);
    } else {
        alert("Invalid username or password");
    }
});




