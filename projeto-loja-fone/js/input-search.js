const $inputSearch = document.querySelector(".input-search");
const $icon = $inputSearch.querySelector(".icon");

$icon.addEventListener('click', event => {
  event.preventDefault(); 
  $inputSearch.classList.toggle("-active");
})