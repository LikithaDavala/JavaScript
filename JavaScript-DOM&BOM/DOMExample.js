const button = document.getElementById("btn");
const message = document.getElementById("message");
const title = document.getElementById("title");

button.addEventListener("click", function () {

    message.textContent = "You clicked the button!";

    title.textContent = "DOM is working!";

    title.style.color = "red";

});