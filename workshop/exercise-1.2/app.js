// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...




const body = document.querySelector("body");
const result = document.getElementById("result");
let win = false

const time = Math.floor((Math.random() * 5) + 1);
document.getElementById('time').innerText = time;


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
}, time * 1000);

document.body.addEventListener("click", clickEvent);
