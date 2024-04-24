const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// ----------------------Header----------------------
// Using document.querySelector() to select an element with the class "typed"
const typed = document.querySelector('.typed');

// Check if the element with class "typed" exists
if (typed) {
  // Get the list of strings from the data-typed-items attribute
  let typed_strings = typed.getAttribute('data-typed-items');
  // Split the string into an array of strings using comma as the separator
  typed_strings = typed_strings.split(',');

  // Initialize Typed.js with the appropriate configuration
  new Typed('.typed', {
    strings: typed_strings, // Set the array of strings to type
    loop: false, // Enable looping of the typing animation
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 2000 // Time delay in milliseconds before starting to backspace
  });
}



// Select the element with the class "typed2"
const typed2 = document.querySelector('.typed2');

// Check if the element with class "typed2" exists
if (typed2) {
  // Get the list of strings from the data-typed-items attribute
  let typed_strings = typed2.getAttribute('data-typed-items');
  // Split the string into an array of strings using comma as the separator
  typed_strings = typed_strings.split(',');

  // Initialize Typed.js with the appropriate configuration
  new Typed('.typed2', {
    strings: typed_strings, // Set the array of strings to type
    loop: true, // Enable looping of the typing animation
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 2000 // Time delay in milliseconds before starting to backspace
  });
}


