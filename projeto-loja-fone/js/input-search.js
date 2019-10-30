const $inputSearch = document.querySelector(".input-search");
<<<<<<< HEAD
const $open = $inputSearch.querySelector(".-open");
const $close = $inputSearch.querySelector(".-close");

$open.addEventListener('click', event => {
  event.preventDefault(); 

  $inputSearch.classList.toggle("-active");
  $open.classList.remove("-active");
  $close.classList.add("-active");
})

$close.addEventListener('click', event => {
  event.preventDefault();

  $inputSearch.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
=======
const $icon = $inputSearch.querySelector(".icon");

$icon.addEventListener('click', event => {
  event.preventDefault(); 
  $inputSearch.classList.toggle("-active");
>>>>>>> a172da643b2670767a3e3b6224f23f318e6ca777
})