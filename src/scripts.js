import "./js/mega-menu-metageeky";
import "./js/resize";
import  "./js/ecbf-combobox-search";
import { isMobile, toggleAriaExpanded } from "./js/_helpers";
import { initCarousel } from "./js/carousel";
import { sorting } from "./js/sorting";
import { formManagement } from "./js/form-management";
import { cart } from "./js/cart";
import { animations } from "./js/animations";


// eslint-disable-next-line
const mainSearchToggle = document.getElementById("main-search-toggle");
const cookieModal = document.querySelector("#cookie-modal");
const cartModal = document.querySelector("#cart-modal");
const urlParams = new URLSearchParams(window.location.search);
// eslint-disable-next-line
const cookieModalTrigger = document.querySelector("[data-cookie-modal-trigger]");
const cartModalTriggers = document.querySelectorAll("[data-cart-modal-trigger]");
const triggerBigImageDialog = document.querySelector('#trigger-big-image-dialog');
const bigImageDialog = document.querySelector('#big-image');

  cart();
  // eslint-disable-next-line no-undef
  PetiteVue.createApp().mount("#content");

  // Dialog
  if (triggerBigImageDialog) {
    triggerBigImageDialog.addEventListener('click', function() {
      bigImageDialog.showModal();
    })
  }

  if (bigImageDialog) {
    bigImageDialog.addEventListener('click', function (event) {
      let rect = bigImageDialog.getBoundingClientRect();
      let isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        bigImageDialog.close();
      }
    });
  }

  cartModalTriggers.forEach((cartModalTrigger) => {
    cartModalTrigger.addEventListener('click', () => {
      cartModal.showModal();
    })
  })

  // Because the following is a modal dialog, prevent closing via ESC key press
  cookieModal.addEventListener('cancel', (event) => {
    event.preventDefault();
  });


if (document.querySelector(".festive-animation")) {
  animations();
}

  // Debug
  if (urlParams.get("debug") === "mainnav-open") {
    document.querySelector('.mega-menu-toggle').setAttribute('aria-expanded', 'true');
  }

  if (urlParams.get("debug") === "combobox") {
    setTimeout(() => {
      if (document.body.classList.contains("mobile")) {
        document.querySelector('#main-search-toggle').setAttribute('aria-expanded', 'true');
        document.querySelector('[role="listbox"]').style.width = document.querySelector('[role="combobox"]').getBoundingClientRect().width + "px";
      }
      document.querySelector('[role="combobox"]').setAttribute('aria-expanded', 'true');
    }, 500);
  }

  if (urlParams.get("debug") === "cart") {
    cartModal.showModal();
  }

if (urlParams.get("debug") === "cart-prefilled") {
  setTimeout(() => {
    document.getElementById('product-list').querySelectorAll('button')[6].click();
  }, 200);

  setTimeout(() => {
    document.getElementById('product-list').querySelectorAll('button')[0].click();

    document.getElementById('order').focus();
  }, 400);
}

  if (urlParams.get("debug") === "cookiedialog") {
    cookieModal.showModal();
  }

// Detect the broad context
  isMobile();

// Close all open disclosure widgets when pressinf ESC
document.addEventListener('keydown', function(e) {
  if(e.key === "Escape"){
    document.querySelectorAll('[aria-expanded="true"]').forEach((disclosure) => {
      disclosure.setAttribute('aria-expanded', 'false');
    });
  }
});

// Deal with "My Account" dislosure in header
  toggleAriaExpanded(document.querySelector('.account--widget__button'));



if (document.getElementById("carousel") && urlParams.get("debug") === "carousel-autostart") {
  initCarousel(true);
} else if (document.getElementById("carousel") && urlParams.get("debug") !== "carousel-autostart") {
  initCarousel();
}

if (document.querySelector("[data-order]")) {
  formManagement();
}

if (document.querySelector("#product-list")) {
  sorting();
}







