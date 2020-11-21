const tween = gsap.to("h1", {
    paused: true,
    x: 100
  });
  window.addEventListener("click", () => tween.play());
  
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.3,
    defaults: { duration: 0.5, ease: "power4.out" }
  });
  
  timeline
    .from(".box", {
      scale: 0
    })
    .to(".box1", {
      left: "50px"
    })
    .to(
      ".box2",
      {
        right: "50px"
      },
      "<"
    )
    .to(".box", {
      scale: 0
    });
  