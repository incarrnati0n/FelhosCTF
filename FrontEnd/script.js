"use strict";

function newPicture() {
  let randomInt = Math.floor(Math.random() * 10) + 1;
  document.getElementById(
    "meme-div"
  ).innerHTML = `<img src='http://127.0.0.1:5500/FrontEnd/src/meme${randomInt}.png'>`;
}

document.getElementById("new-meme").addEventListener("click", newPicture);
