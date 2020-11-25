"use script";
document.addEventListener("DOMContentLoaded", () => {
  /*intro*/
  let scrollBtn = document.getElementById("scrollBtn");
  scrollBtn.addEventListener('click', scrollDown);
  function scrollDown(event) {
    event.preventDefault();
  }
});