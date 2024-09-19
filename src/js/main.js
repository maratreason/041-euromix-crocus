window.addEventListener("DOMContentLoaded", () => {
  /**
   * Tabs
   */
  const tabContainers = document.querySelectorAll("[data-tabs]");
  if (tabContainers) {
    tabContainers.forEach(tabContainer => {
      const tabButtons = tabContainer.querySelectorAll("[data-tab-button]");
      const tabContents = tabContainer.querySelectorAll("[data-tab-content]");

      tabContainer.addEventListener("click", (e) => {
        console.log(e.target.closest("[data-tab-button]"))
        const attribute = e.target.closest("[data-tab-button]").getAttribute("data-tab-button");

        tabContents.forEach(content => content.classList.remove("is--active"));
        tabButtons.forEach(btn => btn.classList.remove("is--active"));

        if (attribute) {
          document.querySelector(`[data-tab-button="${attribute}"]`).classList.add("is--active");
          document.querySelector(`[data-tab-content="${attribute}"]`).classList.add("is--active");
        }
      });
    });
  }


  /**
   * Counter
   */
  const counters = document.querySelectorAll("[data-counter]");
  if (counters) {
    counters.forEach((cnt) => {
      const input = cnt.querySelector("[data-counter-value]");
      const btns = cnt.querySelectorAll("[data-counter-btn]");
      btns.forEach((btn) =>
        btn.addEventListener("click", (e) => {
          if (e.target.classList.contains("counter-minus")) {
            if (input.value <= 1) {
              input.value = 1;
            } else {
              input.value = +input.value - 1;
            }
          } else {
            input.value = +input.value + 1;
          }
        })
      );
    });
  }

  // Horizontal card price buttons. Check шт. or m&sup3;
  const horizontalCardPriceBtns = document.querySelectorAll("[data-horizontal-card-price-btn]");
  if (horizontalCardPriceBtns) {
    horizontalCardPriceBtns.forEach((btn) => {
      const cardBtn = btn.querySelectorAll(".horizontal-card__pricebtn");
      cardBtn.forEach((b, index) => {
        if (cardBtn[index + 1] !== undefined) {
          cardBtn[index + 1].classList.add("is--active");
          cardBtn[index].classList.remove("is--active");
        } else {
          cardBtn[index - 1].classList.add("is--active");
          cardBtn[index].classList.remove("is--active");
        }
        // if (!e.target.classList.contains("is--active")) {
        //   e.target.classList.add("is--active");
        // }
      });
    });
  }

  const burger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (burger) {
    burger.addEventListener("click", function(e) {
      e.preventDefault();

      this.classList.toggle("closed");
      mobileMenu.classList.toggle("is--active");

      if (this.classList.contains("is--active")) {
        this.style.left = "2rem";
      } else {
        this.style.left = "0";
      }

      mobileMenu.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("navigation__link")) {
          burger.classList.toggle("closed");
          mobileMenu.classList.remove("is--active");
        } else {
          return false;
        }
      });
    });
  }

  /**
   * Slider
   */
  const swiper = new Swiper('[data-slider-partners]', {
    loop: true,
    slidesPerView: 1,
    containerModifierClass: "swiper-wrapper",
    pagination: {
      el: ".section-partners__pagination",
      type: "bullets",
      bulletClass: "section-partners__dot",
      bulletActiveClass: "section-partners__dot--active",
      clickable: true
    },
  });

  const swiper2 = new Swiper('[data-slider-partners-2]', {
    loop: true,
    slidesPerView: 1,
    containerModifierClass: "swiper-wrapper",
    pagination: {
      el: ".section-partners__pagination",
      type: "bullets",
      bulletClass: "section-partners__dot",
      bulletActiveClass: "section-partners__dot--active",
      clickable: true
    },
  });

  tabs("[data-producttabs]", "[data-producttabs-content]");

  accordion("[data-accordeon]", "[data-accordeon-list]");

  productSlider("[data-product-slider]");
  
});

/**
 * Dropdown menu
 */
const dropdown = document.querySelectorAll("[data-dropdown]");

if (dropdown) {
  dropdown.forEach((select) => {
    select.addEventListener("click", (e) => {
      e.preventDefault();

      const list = select.querySelector("[data-dropdown-list]");
      const icon = select.querySelector("[data-dropdown-icon]");

      list.classList.toggle("is--active");
      icon.style.transform = list.classList.contains("is--active") ? "rotate(180deg)" : "rotate(0deg)";

      if (e.target.classList.contains("submenu__item")) {
        e.target.classList.add("is--active");
        list.classList.remove("is--active");
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
}

/**
 * Select
 */
const selects = document.querySelectorAll("[data-select]");

if (selects) {
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      e.preventDefault();
      const list = select.querySelector("[data-select-list]");
      const icon = select.querySelector("[data-select-icon]");
      const current = select.querySelector("[data-select-current] span");

      select.querySelectorAll("[data-select-item]").forEach((el) => {
        if (current.textContent === el.textContent) {
          el.classList.add("is--active");
        }
      });

      list.classList.toggle("is--active");
      icon.style.transform = "rotate(180deg)";

      if (list.classList.contains("is--active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }

      if (e.target.classList.contains("submenu__item")) {
        current.textContent = e.target.textContent;
        select.querySelectorAll("[data-select-item]").forEach((el) => el.classList.remove("is--active"));
        e.target.classList.add("is--active");
        list.classList.remove("is--active");
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
}

// /**
//  * Modal script
//  */
// const modal = ($trigger, $modal, $backdrop, $activeClass, $close) => {
//   const modalTriggers = document.querySelectorAll($trigger);
//   const modal = document.querySelector($modal);
//   const backdrop = document.querySelector($backdrop);
//   const close = modal.querySelector($close);

//   if (modalTriggers) {
//     modalTriggers.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         backdrop.classList.add($activeClass);
//         modal.classList.add($activeClass);
//       });
//     });

//     backdrop.addEventListener("click", (e) => {
//       backdrop.classList.remove($activeClass);
//       modal.classList.remove($activeClass);
//     });

//     close.addEventListener("click", () => {
//       backdrop.classList.remove($activeClass);
//       modal.classList.remove($activeClass);
//     });
//   } else {
//     return false;
//   }
// };

// modal("[data-show-modal]", "[data-modal]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-2]", "[data-modal-2]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-3]", "[data-modal-3]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-4]", "[data-modal-4]", ".backdrop", "is--active", "[data-modal-close]");

const accordion = (trigger, content) => {
  const accordeonTrigger = document.querySelectorAll(trigger);
  const accordeonContent = document.querySelectorAll(content);

  if (accordeonTrigger.length > 0 && accordeonContent.length > 0) {

    accordeonTrigger.forEach((item, index) => {
      let icon = item.querySelector(".producttabs-sitebar__item-wrapper svg");

      if (accordeonTrigger[index].classList.contains("is--active")) {
        icon.style.transform = "rotate(0deg)";
      }

      item.addEventListener("click", (e) => {
        if (content[index]) {
          accordeonTrigger[index].classList.toggle("is--active");
          accordeonContent[index].classList.toggle("is--active");
        }

        if (accordeonTrigger[index].classList.contains("is--active")) {
          icon.style.transform = "rotate(0deg)";
        } else {
          icon.style.transform = "rotate(-90deg)";
        }
      });
    });
  }
};

/**
 * Tabs
 */
function tabs(tabTrigger, tabContent) {
  let tab = document.querySelectorAll(tabTrigger);
  let content = document.querySelectorAll(tabContent);

  if (tab.length > 0 && content.length > 0) {
    let id;

    tab.forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        
        id = +e.target.getAttribute("data-producttabs");

        tab.forEach(el => el.classList.remove("is--active"));
        content.forEach(el => el.classList.remove("is--active"));

        tab[id].classList.add("is--active");
        content[id].classList.add("is--active");
      });
    });
  }
}

/**
 * Product Custom Slider
 */
const productSlider = (productSlider) => {
  let mainPicture = productSlider.querySelector("[data-product-slider-main]");
  let thumbs = productSlider.querySelectorAll("[data-product-slider-thumb]");
  let btns = productSlider.querySelectorAll("[data-product-slider-btn]");
}
