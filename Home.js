let storedData = localStorage.getItem("Signup");
console.log(storedData);
if (storedData) {
    let user = JSON.parse(storedData);
    function createUserLogo(name) {
        console.log(name);
        const initials = name.split(" ").map(n => n[0].toUpperCase()).join("");
        document.getElementById("userLogo").textContent = initials;
        console.log(initials);
    }

    // Call when user logs in
    createUserLogo(user.name);
}