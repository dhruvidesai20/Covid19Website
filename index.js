 function imgProperties(){
    if ($(window).width() > 426){
      var width= $(".boyFace").width()- 75;
      $(".mask-img").css("width", width);
    }else{
      var width= $(".boyFace").width()- 45;
      $(".mask-img").css("width", width);
    }

    var offsetTop= $(".boyFace").position().top - 20;
    $(".mask").css("bottom", offsetTop);
    $(".mask").css("display", "block");
  }

  $(window).on('load', imgProperties );

  $(window).on("resize", imgProperties );

  var controller= new ScrollMagic.Controller();

  var scene1= new ScrollMagic.Scene({

  })

  var timeline2= new TimelineMax();
  timeline2
  .from(".mask", 4, {
    y: 450,
    ease: Power1.easeInOut
  })
  .from(".sec2-text:nth-child(2)", 4, {
    y: 450,
    ease: Power1.easeInOut
  }, "-=3")

  var scene2= new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: "100%",
    triggerHook: 0,
  })
  .setTween(timeline2)
  .setPin("#trigger")
  .addTo(controller)

  var timeline3= new TimelineMax();
  timeline3
    .to(".bubble1", 4, {
      opacity:1,
      transform: "translateY(0)"
    })
    .to(".bubble2", 4, {
      opacity:1,
      transform: "translateY(0)"
    }, "-=3")
    .to(".bubble3", 4, {
      opacity:1,
      transform: "translateY(0)"
    }, "-=2")
    .to(".bubble4", 4, {
      opacity:1,
      transform: "translateY(0)"
    }, "-=1")
  var scene3= new ScrollMagic.Scene({
    triggerElement: ".section3",
    duration: "100%",
    triggerHook: 0
  })
  .setTween(timeline3)
  .setPin(".section3")
  .addTo(controller)

  var scene5= new ScrollMagic.Scene({
    triggerElement: ".section5",
    duration: "30%",
    triggerHook: 0
  })

  .setPin(".section5")
  .addTo(controller)

  var scene6= new ScrollMagic.Scene({
    triggerElement: ".section6",
    duration: "30%",
    triggerHook: 0
  })

  .setPin(".section6")
  .addTo(controller)

  function scroll(){
    if($(window).width()> 426){

      var timeline4= new TimelineMax();
      timeline4
      .to(".sec405", 5, {
        transform: "translateX(0)"
      })
      .to(".sec404", 5, {
        opacity:1,
        transform: "translateX(0)"
      }, "-=4")
      .to(".sec403", 5, {
        opacity:1,
        transform: "translateX(0)"
      }, "-=3")
      .to(".sec402", 5, {
        opacity:1,
        transform: "translateX(0)"
      }, "-=2")
      .to(".sec401", 5, {
        opacity:1,
        transform: "translateX(0)"
      }, "-=1")

        var scene4= new ScrollMagic.Scene({
          triggerElement: ".section4",
          duration: "100%",
          triggerHook: 0
        })
        .setTween(timeline4)
        .setPin(".section4")
        .addTo(controller)
    }
  }

    $(window).on('load', scroll );
