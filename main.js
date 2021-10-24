// Grabbing event targets from DOM
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Creating event handler function
function showInfo() {
  moreInfo.style.display = 'block';
}

// Adding event listener to event target to make readMore button interactive
readMore.addEventListener('click', showInfo);