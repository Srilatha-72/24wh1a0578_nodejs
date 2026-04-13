// Register
function registerUser() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Registered Successfully!");
    window.location.href = "index.html";
    return false;
}

// Login
function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")) {
        window.location.href = "catalog.html";
    } else {
        alert("Invalid Credentials");
    }
    return false;
}

// Cart
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

// Show Cart
window.onload = function () {
    let cartDiv = document.getElementById("cartItems");
    if (cartDiv) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.forEach(item => {
            let div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `<span>${item}</span>`;
            cartDiv.appendChild(div);
        });
    }
};