"use strict";

const btn = document.querySelector("#btn");
const box = document.querySelector("#six");

btn.addEventListener("click", function () {
  box.scrollIntoViewIfNeeded(true);
});
