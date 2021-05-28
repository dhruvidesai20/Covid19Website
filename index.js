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

  var timeline= new TimelineMax();
  timeline
  .from(".mask", 4, {
    y: 450,
    ease: Power1.easeInOut
  })
  .from(".sec2-text:nth-child(2)", 4, {
    y: 450,
    ease: Power1.easeInOut
  }, "-=3")

  var scene1= new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: "100%",
    triggerHook: 0,
  })
  .setTween(timeline)
  .setPin("#trigger")
  .addTo(controller)

  var section= document.querySelectorAll(".sec");
  for (var i = 3; i <= section.length; i++) {
  var scene2= new ScrollMagic.Scene({
      triggerElement: ".section" + i ,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(".section" + i, {pushfollowers: true})
      .addTo(controller)
    }
