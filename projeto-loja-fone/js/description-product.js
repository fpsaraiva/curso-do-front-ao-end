const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const index = 0;

$heart.addEventListener("click", handleClick);

$stars.forEach(function ($star) {
    $star.addEventListener("click", handleClick);
})

function handleClick() {
  this.classList.toggle('-active');
}
