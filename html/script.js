"use strict";

function newPicture() {
  let randomInt = Math.floor(Math.random() * 10) + 1;
  document.getElementById(
    "meme-div"
  ).innerHTML = `<img src='images/meme${randomInt}.png'>`;
}

document.getElementById("new-meme").addEventListener("click", newPicture);
