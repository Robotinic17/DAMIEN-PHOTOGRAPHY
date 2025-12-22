const menuIcon = document.getElementById("menu");
const closeMenu = document.getElementById("Xmenu");
const sideNav = document.querySelector("nav ul");
const overLay = document.querySelector(".backdrop-overlay");
const contact = document.querySelector("nav button");

// FAQ Data for Home Page
const faqArray = [
  {
    id: "1",
    title: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    desc: "I specialize in Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
  },
  {
    id: "2",
    title: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?",
    desc: "You can book a session by contacting me through the contact form on my website, email, or phone. I'll guide you through the booking process.",
  },
  {
    id: "3",
    title: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    desc: "I use professional-grade Canon and Sony cameras with a variety of prime and zoom lenses to ensure the highest quality images.",
  },
  {
    id: "4",
    title: "CAN I REQUEST A SPECIFIC LOCATION FOR A PHOTOSHOOT?",
    desc: "Absolutely! I'm happy to travel to your preferred location. We can discuss location options during the booking process.",
  },
  {
    id: "5",
    title: "WHAT IS YOUR EDITING PROCESS LIKE?",
    desc: "My editing process focuses on enhancing the natural beauty while maintaining authenticity using professional software.",
  },
  {
    id: "6",
    title: "ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?",
    desc: "Yes, all packages include high-resolution digital files with print release, delivered through a secure online gallery.",
  },
  {
    id: "7",
    title: "DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?",
    desc: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
  },
  {
    id: "8",
    title:
      "HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?",
    desc: "Typically, edited photos are delivered within 2-3 weeks after the session, depending on the package and season.",
  },
];

const faqContainer = document.getElementById("faq-container");
let activeId = null;

function renderFAQs() {
  if (!faqContainer) return;

  faqContainer.innerHTML = "";

  faqArray.forEach((data) => {
    const isActive = activeId === data.id;
    const accordionItem = document.createElement("div");

    accordionItem.innerHTML = `
      <div class="accordion" style="display:flex; justify-content:space-between; align-items:center; padding: 20px; border:0.5px solid rgba(128, 128, 128, 0.38); border-radius:5px; margin-bottom:10px;">
        <div>
          <p class="js-prob" style="font-size:15px; color:rgba(233, 233, 233, 0.79); margin-bottom:10px;">${
            data.title
          }</p>
          <p class="js-prob2" style="font-size:12px; color:rgba(128, 128, 128, 0.79); display:${
            isActive ? "block" : "none"
          };">${data.desc}</p>
        </div>
        <div>
          <button data-id="${
            data.id
          }" style="background:none; border:0.5px solid rgba(128, 128, 128, 0.38); padding:15px 16px; border-radius: 25px; color:rgba(128, 128, 128, 0.85); cursor:pointer; font-weight:bolder; font-size: 16px;">
           ${
             activeId === data.id
               ? '<i style="color:rgba(128, 128, 128, 0.85); font-size:16px;" class="fa-solid fa-chevron-down"></i>'
               : '<i style="color:rgba(128, 128, 128, 0.85); font-size:16px;" class="fa-solid fa-chevron-up"></i>'
           }
          </button>
        </div>
      </div>
    `;

    faqContainer.appendChild(accordionItem);
  });

  document.querySelectorAll("#faq-container button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      activeId = activeId === id ? null : id;
      renderFAQs();
    });
  });
}

// Menu event listeners
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
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
      offset: 100,
    });
  }

  // Render FAQs
  renderFAQs();

  // Show mobile menu icon on small screens
  if (menuIcon && window.innerWidth <= 768) {
    menuIcon.style.display = "block";
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (menuIcon) {
    menuIcon.style.display = window.innerWidth <= 768 ? "block" : "none";
  }
});
