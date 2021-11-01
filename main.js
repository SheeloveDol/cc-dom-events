// Grabbing event targets from DOM
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Creating event handler function
function showInfo() {
  moreInfo.style.display = 'block';
}

// Adding event listener to event target to make readMore button interactive
readMore.addEventListener('click', showInfo);



// Example of using the .onclick method 

/* 

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here

let textChange = function() {
  view.innerHTML = 'Hello, World!';
}

let textReturn = function() {
  view.innerHTML = 'View';
}

view.onclick = textChange;
close.onclick = textReturn;
*/