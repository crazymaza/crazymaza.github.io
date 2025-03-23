document.addEventListener("DOMContentLoaded", () => {
  const colorInputs = document.querySelectorAll("input[type=radio]");
  const bigImg = document.querySelector(".middle_second img");

  const tl = gsap.timeline();
  tl.from(bigImg, { scale: 0, duration: 2 }).to(bigImg, {
    rotation: 10,
    duration: 5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  colorInputs.forEach((item) => {
    item.addEventListener("click", () => {
      const tl2 = gsap.timeline();

      tl2
        .to(bigImg, { scale: 0, duration: 2 })
        .set(bigImg, {
          attr: { src: `./img/${item.value}.svg` },
        })
        .to(bigImg, { scale: 3, duration: 2 })
        .to("html", {
          "--checked-color": item.getAttribute("data-color"),
          duration: 2,
        }, "-=100%");
    });
  });
});
