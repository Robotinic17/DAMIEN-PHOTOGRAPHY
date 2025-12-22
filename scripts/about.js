const menuIcon = document.getElementById("menu");
const closeMenu = document.getElementById("Xmenu");
const sideNav = document.querySelector("nav ul");
const overLay = document.querySelector(".backdrop-overlay");
const contact = document.querySelector("nav button ");

// menuIcon.addEventListener("click", () => {
//   sideNav.style.right = "0";
//   overLay.style.display = "Block";
//   setTimeout(() => {
//     contact.style.display = "block";
//   }, 600);
// });

// closeMenu.addEventListener("click", () => {
//   sideNav.style.right = "-100%";
//   overLay.style.display = "none";
//   contact.style.display = "none";
// });

if (menuIcon && closeMenu) {
  menuIcon.addEventListener("click", () => {
    sideNav.style.right = "30px";
    overLay.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    sideNav.style.right = "-100%";
    overLay.style.display = "none";
    if (contact) contact.style.display = "none";
  });
  overLay.addEventListener("click", () => {
    sideNav.style.right = "-100%";
    overLay.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    mirror: true,
    duration: 200,
    once: false,
  });
});
