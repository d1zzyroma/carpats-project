const heroBtn = document.querySelector(".hero-btn");
const backDrop = document.querySelector(".back-drop");
const closeBtn = document.querySelector(".modal-menu-close-btn");

heroBtn.addEventListener("click", handleClick)



closeBtn.addEventListener("click", handleClick)

function handleClick(){
  backDrop.classList.toggle("is-open")
}