window.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelectorAll("[data-dropdown]");

  if (dropdown) {
    dropdown.forEach((el) => {
      const dropdownList = el.querySelector("[data-dropdown-list]");
      el.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        if (!dropdownList.classList.contains("is--active")) {
          dropdownList.classList.add("is--active");
        }

        ["mouseleave", "click"].forEach((eventName) => {
          dropdownList.addEventListener(eventName, () => {
            dropdownList.classList.remove("is--active");
          });
        });
      });
    });
  }

  // Counter script
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

  // const mobile = () => {
  //   const trigger = document.querySelector("[data-mobile-trigger]");
  //   const mobileMenu = document.querySelector("[data-mobile-menu]");

  //   trigger.addEventListener("click", function() {
  //     this.classList.toggle("is--active");
  //     mobileMenu.classList.toggle("is--active");

  //     if (this.classList.contains("is--active")) {
  //       this.style.left = "2rem";
  //     } else {
  //       this.style.left = "0";
  //     }

  //   });
  // }

  // mobile();

  // Slider
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", "[data-section-cards-slider]", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "[data-section-cards-dots]",
      clickable: true,
    },
    someFunc,
  });

  resizableSwiper("(max-width: 768px)", "[data-section-cards-slider-2]", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "[data-section-cards-dots-2]",
      clickable: true,
    },
    someFunc,
  });
});

// Select input script
const selects = document.querySelectorAll("[data-select]");

if (selects) {
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      e.preventDefault();
      const list = select.querySelector(".select__list");
      const icon = select.querySelector("[data-select-icon]");
      const current = select.querySelector(".select__current span");

      select.querySelectorAll(".select__item").forEach((el) => {
        if (current.textContent === el.textContent) {
          el.classList.add("select__item--active");
        }
      });

      list.classList.toggle("show");
      icon.style.transform = "rotate(180deg)";

      if (list.classList.contains("show")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }

      if (e.target.classList.contains("select__item")) {
        current.textContent = e.target.textContent;
        select.querySelectorAll(".select__item").forEach((el) => el.classList.remove("select__item--active"));
        e.target.classList.add("select__item--active");
        list.classList.remove("show");
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

const accordion = (parentSelector) => {
  const parent = document.querySelector(parentSelector);

  if (parent) {
    const header = parent.querySelectorAll("[data-accordion-product-header]");
    const content = parent.querySelectorAll("[data-accordion-product-content]");

    header.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        if (content[index]) {
          header[index].classList.toggle("is--active");
          content[index].classList.toggle("is--active");
        }
      });
    });
  }
};

accordion("[data-accordion-product]");

// /**
//  * Stepper script
//  */
// // const stepper = () => {

// // }

// const steps = document.querySelectorAll("[data-step]");

// if (steps) {
//   steps.forEach((step, index) => {
//     step.addEventListener("click", (e) => {
//       const dataStep = e.target.closest(".subcatalog-work__item");

//       if (dataStep.dataset.step > index + 1) {
//         steps.forEach((s) => s.classList.remove("active"));
//         step.classList.toggle("active");
//       } else if (dataStep.dataset.step == 1) {
//         step.classList.toggle("active");
//         steps.forEach((s, idx) => {
//           if (idx >= dataStep.dataset.step) {
//             steps[idx].classList.remove("active");
//           }
//         });
//       } else if (dataStep.dataset.step <= index + 1) {
//         steps.forEach((s, idx) => {
//           if (idx <= index) {
//             s.classList.add("active");
//           } else {
//             s.classList.remove("active");
//           }
//         });
//       }
//     });
//   });
// }

// /**
//  * Dropdown buttons
//  */
// const dropdownButtons = document.querySelectorAll("[data-dropdown]");
// if (dropdownButtons) {
//   dropdownButtons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const list = btn.querySelector("[data-dropdown-list]");
//       const current = btn.querySelector("[data-dropdown-current]");
//       const chevron = btn.querySelector(".dropdown__icon-chevron");
//       chevron.style.transform = `rotate(90deg)`;

//       if (list) {
//         list.classList.toggle("is--active");

//         if (chevron) {
//           chevron.style.transform = `rotate(270deg)`;
//         }
//       }

//       if (e.target.classList.contains("dropdown__item")) {
//         current.textContent = e.target.textContent;

//         if (chevron) {
//           chevron.style.transform = `rotate(90deg)`;
//         }
//       }
//     });
//   });
// }

// const main_slider = new Swiper(".main-slider", {
//   loop: true,

//   navigation: {
//     nextEl: ".main-slider__btn--next",
//     prevEl: ".main-slider__btn--prev",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },

//   1200: {
//     slidesPerView: 9,
//     spaceBetween: 10,
//   },

//   // Буллеты
//   clickable: true,
//   dynamicBullets: true,
// });

// /**
//  * Mobile menu
//  */
// const mobileTrigger = document.querySelector("[data-toggle-menu]");
// const mobileMenu = document.querySelector("[data-mobile-menu]");
// const closeMobileMenu = document.querySelector("[data-mobile-menu-close]");

// mobileTrigger.addEventListener("click", () => {
//   mobileMenu.classList.toggle("is--active");
// });

// closeMobileMenu.addEventListener("click", () => {
//   mobileMenu.classList.remove("is--active");
// });
