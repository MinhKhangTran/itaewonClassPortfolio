// About

// magic
function animate() {
  const aboutImage = document.querySelector(".about-image");
  const pText = document.querySelector(".p-text");
  const slideTl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });
  slideTl.fromTo(aboutImage, { x: "-200%" }, { x: "0%" });
  //   slideTl.fromTo(aboutImage, { scale: 1.5 }, { scale: 1 }, "-=1");
  slideTl.fromTo(pText, { x: "200%" }, { x: "0%" }, "-=1");
}
animate();

// Characters
let slideScene;
let controller;

function animateSlider() {
  controller = new ScrollMagic.Controller();
  const charImages = document.querySelectorAll(".characters-hero-center");
  const pTextChar = document.querySelectorAll(".p-text-char");
  charImages.forEach((image, index, images) => {
    const slideTl2 = gsap.timeline({
      defaults: { duration: 1 },
    });
    let nextSlide = charImages.length - 1 === index ? "end" : images[index + 1];
    slideTl2.fromTo(image, { opacity: 1 }, { opacity: 0 });
    slideTl2.fromTo(nextSlide, { opacity: 0 }, { opacity: 1 });

    slideScene = new ScrollMagic.Scene({
      triggerElement: image,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(image, { pushFollowers: false })
      .setTween(slideTl2)
      //   .addIndicators()
      .addTo(controller);
  });
}

animateSlider();
