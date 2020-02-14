// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.querySelector("body");
const result = document.getElementById("result");

let win = false

function clickEvent() {
    win = true;
    result.innerText = "You win !";
    body.removeEventListener("click", clickEvent);
}

setInterval(function () {

    if (!win) {
        
        result.innerText = "You lose...";
        body.removeEventListener("click", clickEvent);

    }
}, 2000);

body.addEventListener("click", clickEvent);
