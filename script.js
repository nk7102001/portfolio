
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("nav ul");

let isMenuOpen = false;

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");

 
  if (!isMenuOpen) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }

  isMenuOpen = !isMenuOpen;
});


function opentab(tabname) {
  const tabLinks = document.getElementsByClassName("tab-links");
  const tabContents = document.getElementsByClassName("tab-contents");

  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  document.getElementById(tabname).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}
  


 const scriptURL = 'https://script.google.com/macros/s/AKfycbxf1CxUvUFFeVT1G5-l1puDOLjH1oBTgq_r8FaUKdyL8zA_h_eLpvgbjEu3uh3Q4Q4FKg/exec';
const form = document.getElementById('contact-form');
const loader = document.getElementById('form-loader');
const messageBox = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();

 
  loader.style.display = 'block';
  messageBox.style.display = 'none';

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      loader.style.display = 'none';
      messageBox.style.display = 'block';
      form.reset();
    })
    .catch(error => {
      loader.style.display = 'none';
      alert('Error! Please try again.');
    });
});

