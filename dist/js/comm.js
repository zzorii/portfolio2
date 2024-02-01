$(function () {
  $(document).ready(function () {
    $("#fullpage").fullpage({
      autoScrolling: true,
      scrollHorizontally: true,
      slidesNavigation: true,
      easing: "easeInOutCubic",
      easingcss3: "ease",
      scrollingSpeed: 1000,
      recordHistory: false,
    });
  });
});

// header

const headerEl = document.querySelector("#header");
let lastScroll = 0;

window.addEventListener(
  "scroll",
  _.throttle(function () {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 150) {
      gsap.to(headerEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(headerEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }

    lastScroll = currentScroll;
  }, 200)
);
