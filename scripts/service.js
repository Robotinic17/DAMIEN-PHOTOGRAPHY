const faqArray = [
  {
    id: "1",
    title: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    desc: "I specialize in Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
  },
  {
    id: "2",
    title: "HOW DO I BOOK A SESSION?",
    desc: "You can book a session by contacting me directly via email or phone. I'll guide you through the process.",
  },
  {
    id: "3",
    title: "DO YOU OFFER PHOTO EDITING SERVICES?",
    desc: "Yes, I provide professional photo editing to enhance your pictures while keeping them natural.",
  },
  {
    id: "4",
    title: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    desc: "I specialize in Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
  },
  {
    id: "5",
    title: "HOW DO I BOOK A SESSION?",
    desc: "You can book a session by contacting me directly via email or phone. I'll guide you through the process.",
  },
  {
    id: "6",
    title: "DO YOU OFFER PHOTO EDITING SERVICES?",
    desc: "Yes, I provide professional photo editing to enhance your pictures while keeping them natural.",
  },
  {
    id: "7",
    title: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    desc: "I specialize in Portrait, Landscape, Event, etc. photography, capturing moments that tell unique stories.",
  },
  {
    id: "8",
    title: "HOW DO I BOOK A SESSION?",
    desc: "You can book a session by contacting me directly via email or phone. I'll guide you through the process.",
  },
  {
    id: "9",
    title: "DO YOU OFFER PHOTO EDITING SERVICES?",
    desc: "Yes, I provide professional photo editing to enhance your pictures while keeping them natural.",
  },
];

const faqContainer = document.getElementById("faq-container");
let activeId = null;

function renderFAQs() {
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
          }" style="background:none; border:0.5px solid rgba(128, 128, 128, 0.38); padding:15px 16px; border-radius: 25px; color:rgba(128, 128, 128, 0.85); cursor:pointer; font-weight:bolder; font-size: 16px; ">
           ${
             activeId === data.id
               ? '<i class="fa-solid fa-chevron-down"></i>'
               : '<i class="fa-solid fa-chevron-up"></i>'
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

  // Refresh AOS to recognize newly added elements
  AOS.refresh();
}

// Initialize AOS first
AOS.init({
  mirror: true,
});

// Then render FAQs
renderFAQs();

const menuIcon = document.getElementById("menu");
const closeMenu = document.getElementById("Xmenu");
const sideNav = document.querySelector("nav ul");
const overLay = document.querySelector(".backdrop-overlay");
const contact = document.querySelector("nav button ");

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

AOS.init({
  mirror: true,
});
