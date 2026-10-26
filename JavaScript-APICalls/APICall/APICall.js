
let btnGetUsers = document.getElementById("btnGetUsers");
let userList = document.getElementById("userList");
let message = document.getElementById("message");

btnGetUsers.addEventListener("click", async function () {

    try {
        message.innerText = "Loading users...";
        userList.innerHTML = "";
        btnGetUsers.disabled = true;

        // 1. Send API request
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // 2. Check response status
        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        // 3. Convert JSON into JavaScript data
        let users = await response.json();

        // 4. Display the users
        users.forEach(function (user) {
            let card = document.createElement("div");
            card.className = "user-card";

            let heading = document.createElement("h3");
            heading.innerText = user.name;

            let email = document.createElement("p");
            email.innerText = "Email: " + user.email;

            let city = document.createElement("p");
            city.innerText = "City: " + user.address.city;

            card.append(heading, email, city);
            userList.appendChild(card);
        });

        message.innerText = "Users loaded successfully!";

    } catch (error) {
        message.innerText = "Error: " + error.message;
        message.className = "error";

    } finally {
        btnGetUsers.disabled = false;
    }
});
