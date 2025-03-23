document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const mm = gsap.matchMedia();

  // First section animation
  const initH1Animation = () => {
    const h1 = document.querySelector(".first-section h1 span");
    const places = ["дома", "дачи", "сада", "офиса"];

    const h1Timeline = gsap.timeline({ repeat: -1, yoyo: true });

    places.forEach((word) => {
      h1Timeline
        .to(h1, { text: { value: word }, duration: 1 })
        .to(h1, { text: { value: "" }, duration: 1 }, "+=5");
    });
  };

  const initFirstDescrAnimation = () => {
    const descriptionSpans = document.querySelectorAll(
      ".first-section p.description span"
    );

    gsap.fromTo(
      descriptionSpans,
      { opacity: 0, yPercent: -20, rotateX: gsap.utils.random(-100, 100) },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.5,
        rotateX: 0,
      }
    );
  };

  const initFirstImgsParalax = () => {
    gsap.to(".top-left img", {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        trigger: ".first-section",
        start: "top bottom",
      },
    });

    gsap.to(".top-right img", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        trigger: ".first-section",
        start: "top bottom",
      },
    });
  };

  // Second section animation
  const initSecondSetionAnimation = () => {
    const secondSection = document.querySelector(".second-section");
    const secondH2 = secondSection.querySelector(".title h2");
    const secondDescription = secondSection.querySelector(".description");
    const secondTeam = secondDescription.querySelector(".team");
    const secondTarget = secondDescription.querySelector(".target");
    const secondMaterials = secondDescription.querySelector(".materials");

    const secondH2Chars = secondH2.textContent.trim().split("");
    secondH2.textContent = "";

    secondH2Chars.forEach((char) => {
      secondH2.insertAdjacentHTML(
        "beforeend",
        `<span style="min-width: ${char === "" ? 0 : 0.7}rem">${char}</span>`
      );
    });

    const secondTl = gsap.timeline({
      defaults: {
        duration: 2.5,
        ease: "back.out(1.4)",
      },
      scrollTrigger: {
        toggleClass: {
          targets: ".second-section .title h2 span",
          className: "animate-span",
        },
        trigger: ".second-section",
        start: "top bottom",
      },
    });

    secondTl
      .fromTo(
        ".second-section .title h2 span",
        {
          yPercent: 101,
          autoAlpha: 0,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.04,
          ease: "elastic.out(0.5,0.5)",
        }
      )
      .fromTo(
        secondTeam,
        { xPercent: -30, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        secondTarget,
        { xPercent: 30, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<20%"
      )
      .fromTo(
        secondMaterials,
        { xPercent: -30, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        "<20%"
      )
      .fromTo(
        ".hero h3",
        {
          scale: 0,
          opacity: 0.5,
        },
        {
          scale: 2,
          opacity: 1,
          stagger: 0.3,
          ease: "power2.out",
          duration: 0.5,
        },
        "<10%"
      )
      .to(".hero h3", {
        scale: 1,
        stagger: 0.3,
        ease: "power2.out",
        duration: 0.5,
      })
      .fromTo(
        ".hero p",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.3,
          duration: 0.5,
        },
        "<10%"
      );
  };

  // Third section animation
  const thirdTitle = document.querySelector(".third-section h2");
  const algorithmTitle = document.querySelector(
    ".third-section .algorithm > p"
  );

  const initSetThirdSectionRules = () => {
    gsap.set(".third-section", { position: "relative" });
    gsap.set(thirdTitle, {
      position: "absolute",
      fontSize: "8rem",
      top: "20%",
      left: "50%",
      transform: "translate(-100%, -50%)",
      width: "100%",
      maxWidth: "100%",
    });

    gsap.set(".algorithm .step", { opacity: 0, yPercent: 50 });
    gsap.set(algorithmTitle, { opacity: 0, display: "inline-block" });
  };

  const initThirdSectionScrollTrigger = () => {
    const right = document.querySelector(".algorithm");
    ScrollTrigger.create({
      trigger: ".third-section",
      start: "top top",
      end: () => "+=" + (right.scrollHeight - window.innerHeight),
      pin: ".title",
      pinSpacing: false,
    });
  };

  const initThirdSectionTimeline = () => {
    const tlThird = gsap.timeline();

    tlThird
      .to(thirdTitle, {
        fontSize: "48px",
        maxWidth: "70%",
        left: "1%",
        position: "sticky",
        transform: "translate(0%, 0%)",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".third-section",
          start: "top top+=200",
          end: "bottom center",
        },
      })
      .to(algorithmTitle, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".third-section",
          start: "top+=200 top+=50%",
          end: "bottom center",
        },
      });
  };

  const initThirdSectionSteps = () => {
    const steps = gsap.utils.toArray(".algorithm .step");

    steps.forEach((step, i) => {
      gsap.to(step, {
        opacity: 1,
        yPercent: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top+=50% center+=10%",
          end: "bottom center",
          scrub: true,
          id: "bx-" + (i + 1),
        },
      });
    });
  };

  // Fourth section animation
  const initFourthSectionAnimation = () => {
    const projects = document.querySelectorAll(".fourth-section .wrapper");

    const fourthTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-section",
        start: "top center",
        end: "bottom bottom",
      },
    });

    fourthTl.fromTo(
      projects,
      { rotateY: 60, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  };

  const initMediaSlider = () => {
    mm.add("(max-width:600px", () => {
      const projects = document.querySelectorAll(".fourth-section .wrapper");
      const slider = document.querySelector(".fourth-section > .projects");
      let startXTouchPoint = 0;

      const handleTouchStart = (event) => {
        const firstTouch = event.touches[0];
        startXTouchPoint = firstTouch.clientX;
      };

      const handleTouchMove = (event) => {
        const firstPicture = projects[0];
        const firstStopTrigger =
          window.innerWidth -
          Math.round(firstPicture.getBoundingClientRect().x) -
          firstPicture.clientWidth / 3;

        if (!startXTouchPoint) {
          return;
        }

        // Сохраняем текущие координаты
        let xUp = event.touches[0].clientX;

        // Вычисляем разницу
        const xDiff = startXTouchPoint - xUp;
        gsap.to(projects, {
          x: () => {
            // листаем от последнего к первому
            if (
              startXTouchPoint < xUp &&
              firstStopTrigger <= firstPicture.clientWidth * 1.2
            ) {
              return 0;
            }
            // листаем от первого к последнему
            if (
              startXTouchPoint > xUp &&
              firstStopTrigger >=
                slider.clientWidth - firstPicture.clientWidth * 0.7
            ) {
              return;
            }
            return xDiff >= 0 ? `-=${xDiff}` : `+=${Math.abs(xDiff)}`;
          },
          ease: "back.out(1.7)",
          duration: 0.7,
        });
      };

      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
    });
  };

  // Fifth section animation
  const initFifthSectionAnimation = () => {
    ScrollTrigger.create({
      trigger: ".fifth-section",
      start: "top center",
      end: "bottom bottom",
    });

    gsap.fromTo(
      ".fifth-section .reviews .review",
      {
        opacity: 0,
        xPercent: 50,
      },
      {
        opacity: 1,
        xPercent: 0,
        stagger: 0.5,
        ease: "power2.out",
        duration: 0.3,
      }
    );

    const fifthTimeline = gsap.timeline({
      defaults: {
        repeat: -1,
        duration: 2,
        delay: 1,
        yoyo: true,
        ease: "elastic.out(1,0.3)",
      },
    });
    fifthTimeline
      .from(".fifth-section .reviews .review img", {
        rotate: 0,
      })
      .to(
        ".fifth-section .reviews .review img",
        {
          rotate: 20,
        },
        "<"
      )
      .to(
        ".fifth-section .reviews .review img",
        {
          rotate: 0,
        },
        "<"
      );
  };

  // Sixth section animation
  const initSixthSectionAnimation = () => {
    const inputWrappers = gsap.utils.toArray("form .input-wrapper");
    const startLine =
      "M0 0.500036C0 0.500036 118.5 0.500072 303 0.500036C487.5 0.5 606 0.500036 606 0.500036";
    const endLine = "M1 0.5C1 0.5 121.5 13 306 13C490.5 13 607 0.5 607 0.5";

    inputWrappers.forEach((item) => {
      const title = item.querySelector("label");
      const svgPath = item.querySelector("svg > path");
      const input = item.querySelector("input");
      const sixthTimeline = gsap.timeline();

      input.addEventListener("focus", () => {
        if (!input.value) {
          sixthTimeline
            .fromTo(
              svgPath,
              { attr: { d: startLine } },
              {
                attr: { d: endLine },
                ease: "power2.out",
              }
            )
            .to(
              svgPath,
              {
                attr: {
                  d: startLine,
                },
                ease: "elastic.out(2,0.3)",
              },
              "<50%"
            )
            .to(
              title,
              {
                yPercent: -120,
                scale: 0.8,
              },
              "<"
            );
        }
      });

      document.addEventListener("click", ({ target }) => {
        if (target !== input && !input.value) {
          gsap.to(title, {
            yPercent: 0,
            scale: 1,
            duration: 0.75,
          });
        }
      });
    });
  };

  const initSubmitForm = () => {
    const form = document.querySelector("form");
    const formTimeline = gsap.timeline({
      defaults: { duration: 0.75, ease: "Power2.easeOut" },
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      formTimeline
        .to([".form-wrapper .description", "form .input-wrapper"], {
          opacity: 0,
          scale: 0,
          pointerEvents: "none",
        })
        .to(
          ["form button", "form input"],
          {
            opacity: 0,
            scale: 0,
            pointerEvents: "none",
            userSelect: "none",
            attr: { disabled: "true" },
          },
          "<"
        )
        .to(
          "form .congrats",
          {
            pointerEvents: "auto",
            scale: 1,
            opacity: 1,
          },
          "<20%"
        );
    });
  };

  const init = () => {
    // First section animation
    initH1Animation();
    initFirstDescrAnimation();
    initFirstImgsParalax();

    mm.add("(min-width:940px", () => {
      // Second section animation
      initSecondSetionAnimation();

      // Third section animation
      initSetThirdSectionRules();
      initThirdSectionScrollTrigger();
      initThirdSectionTimeline();
      initThirdSectionSteps();

      // Fourth section animation
      initFourthSectionAnimation();
    });

    initMediaSlider();

    // Fifth section animation
    initFifthSectionAnimation();

    // Sixth section animation
    initSixthSectionAnimation();
    initSubmitForm();
  };

  init();
});
