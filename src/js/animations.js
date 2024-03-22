gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

// Loader
// tlLoader
//   .set(".loader__top", {
//     yPercent: -100
//   })
//   .set(".loader__bottom", {
//     yPercent: 100
//   })
//   .set(".loader__logo", {
//     opacity: 0
//   })
//   .to([".loader__top", ".loader__bottom"], {
//     yPercent: 0,
//     duration: 1,
//     ease: "bounce.out",
//   })
//   .to(".loader__logo", {
//     opacity: 1,
//     duration: 0.5,
//     scale: 1.2,
//   })
//   .to(".loader__logo", {
//     rotation: 20,
//     duration: 0.3,
//   })
//   .to(".loader__logo", {
//     rotation: -20,
//     duration: 0.3,
//     delay: 0.2
//   })
//   .to(".loader__logo", {
//     rotation: 0,
//     duration: 0.3,
//     delay: 0.3
//   })
//   .to(".loader__logo", {
//     opacity: 0,
//     duration: 1,
//     scale: 1,
//   })
  
//   .to([".loader__top", ".loader__bottom"], {
//     opacity: 0,
//   })
//   .to(".loader", { // убирают из dom-дерева блок .loader
//     display: "none"
//   });

const sectionMain = gsap.timeline();
sectionMain
  .set([
    ".section-main", ".section-credit", ".section-advantages",
    ".section-decor", ".section-cards__old", ".section-steps",
    ".section-cards__new"
  ], {
    yPercent: 20,
  })
  .from([".section-suitable"], {
    yPercent: 30,
  })
  .to(".section-main", {
    yPercent: 0,
    duration: 0.7,
    opacity: 1,
  })
  .to(".section-credit", {
    yPercent: 0,
    duration: 0.9,
    opacity: 1,
  });


const sectionSuitable = gsap.timeline();
sectionSuitable
  .to(".section-suitable", {
    scrollTrigger: {
      trigger: ".section-credit",
      start: "-200 0",
      end: "200 0",
      scrub: true,
    },
    yPercent: 0,
    opacity: 1,
    duration: 0.5,
  });

const sectionAdvantages = gsap.timeline();
sectionAdvantages
  .from(".section-advantages", {
    scrollTrigger: {
      trigger: ".section-suitable",
      start: "-200 0",
      scrub: true,
    },
    autoAlpha: 0,
    yPercent: 0,
  })
  .from(".section-advantages__benefit-item", {
    scrollTrigger: {
      trigger: ".section-advantages",
      start: "-100 0",
      scrub: true,
      pin: true,
      end: "200 0",
    },
    y: 50,
    stagger: 0.5,
    autoAlpha: 0,
  });

const sectionDecor = gsap.timeline();
sectionDecor
  .from(".section-decor", {
    scrollTrigger: {
      trigger: ".section-advantages",
      start: "-400 0",
      scrub: true,
    },
    autoAlpha: 0,
    yPercent: 0
  })
  .from(".section-decor__item", {
    scrollTrigger: {
      trigger: ".section-decor",
      start: "-250 0",
      scrub: true,
      pin: true,
      end: "+=150"
    },
    // y: 50,
    stagger: 0.2,
    autoAlpha: 0,
  });

const sectionCardsOld = gsap.timeline();
sectionCardsOld.from(".section-cards__old", {
  scrollTrigger: {
    trigger: ".section-decor",
    start: "-100 0",
    scrub: true,
  },
  autoAlpha: 0,
  yPercent: 0
});

const sectionSteps = gsap.timeline();
sectionCards
  .from(".section-steps", {
    scrollTrigger: {
      trigger: ".section-cards__old",
      start: "0 0",
      scrub: true,
      pin: true,
    },
    y: 250,
    autoAlpha: 0,
    yPercent: 0
  })
  .from(".section-steps__item", {
    scrollTrigger: {
      trigger: ".section-steps",
      start: "-200 0",
      scrub: true,
      pin: true,
      end: "+=350"
    },
    yPercent: 0,
    y: 50,
    stagger: 0.25,
    autoAlpha: 0,
  });

const sectionCardsNew = gsap.timeline();
sectionCardsNew.from(".section-cards__new", {
  scrollTrigger: {
    trigger: ".section-steps",
    start: "-100 0",
    scrub: true,
  },
  autoAlpha: 0,
  yPercent: 0
});
