// Image slideshow gallery
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// contact form through Tally
var Tally = Tally.loadEmbeds();

//filter posts system
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button
var btnContainer = document.getElementsByClassName("btncontainer");
var btns = btnContainer.getElementsByClassName("filterbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//load more feature for lots of posts
const itemsPerLoad = 5;
const items = Array.from(document.getElementsByClassName('filter'));
const loadMoreBtn = document.getElementsByClassName('loadmore-btn');

let currentIndex = itemsPerLoad;

// Initial Setup: Hide everything past the initial limit
items.forEach((item, index) => {
  if (index >= itemsPerLoad) {
    item.classList.add('hidden');
  }
});

// Click Handler
loadMoreBtn.addEventListener('click', () => {
  // Show the next batch of items
  for (let i = currentIndex; i < currentIndex + itemsPerLoad; i++) {
    if (items[i]) {
      items[i].classList.remove('hidden');
    }
  }

  // Update index tracking
  currentIndex += itemsPerLoad;

  // Hide the button if no more items left
  if (currentIndex >= items.length) {
    loadMoreBtn.style.display = 'none';
  }
});