
$(function () {
  "use strict";

  var width = $(window).width();
  var height = $(window).height();
  $(".section.started").css({ height: height });

  /* Preloader */
  $(window).on("load", function () {
    $(".preloader .spinner").fadeOut(function () {
      $(".preloader").fadeOut();
      $("body").addClass("ready");
    });
  });

  /* Fade animations on scroll */
  if (width > 720) {
    window.sr = ScrollReveal();
    sr.reveal(".animated");
  }

  /* Noise background */
  var options = {
    animate: true,
    patternWidth: 400,
    patternHeight: 400,
    grainOpacity: 0.35,
    grainDensity: 3,
    grainWidth: 1,
    grainHeight: 1,
  };
  grained("#home-section", options);

  /* 3D hover */
  $(".image-3d").hover3d({
    selector: ".image-3d-card",
    invert: false,
  });

  /* Youtube video background */
  var myPlayer = $("#video-bg").YTPlayer();

  /* Hire Me button */
  $(".section.about .btn.extra, .section.quotes .btn").on("click", function () {
    var h = parseFloat($(".section.contacts").offset().top);

    $("body,html").animate(
      {
        scrollTop: h - 90,
      },
      800
    );

    return false;
  });

  /* Initialize masonry */
  var $container = $(".box-items");
  $container.imagesLoaded(function () {
    $(".box-items").masonry({
      itemSelector: ".box-item",
    });
  });

  /* Portfolio magnific popup */
  $(".has-popup").magnificPopup({
    type: "inline",
    overflowY: "auto",
    closeBtnInside: true,
    mainClass: "mfp-fade",
  });

  /* Collapsible resume history */
  const coll = document.getElementsByClassName("collapsible-btn");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  /* Contact form */
  $("#cform").validate({
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
      },
      message: {
        required: true,
      },
      subject: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    success: "valid",
    submitHandler: function () {
      const nameInput = $("input[name='name']").val();
      const telInput = $("input[name='tel']").val();
      const emailInput = $("input[name='email']").val();
      const subjectInput = $("input[name='subject']").val();
      const messageInput = $("textarea[name='message']").val();

      const templateParams = {
        to_name: "Frida",
        from_name: nameInput,
        subject: subjectInput,
        message: `${messageInput}, please reply me via ${emailInput} or ${telInput}`,
      };

      emailjs.send("service_lnadkjc", "template_cwm6xpn", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Oops... " + JSON.stringify(error));
        }
      );
    },
  });
});
