// const $ = require('jquery');
// import $ from 'jquery';

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

  /*      contact form */
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
    // submitHandler: function() {
    // 	$.ajax({
    // 		url: 'mailer/feedback.php',
    // 		type: 'post',
    // 		dataType: 'json',
    // 		data: 'name='+ $("#cform").find('input[name="name"]').val() + '&tel='+ $("#cform").find('input[name="tel"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&subject='+ $("#cform").find('input[name="subject"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
    // 		beforeSend: function() {

    // 		},
    // 		complete: function() {

    // 		},
    // 		success: function(data) {
    // 			$('#cform').fadeOut();
    // 			$('.alert-success').delay(1000).fadeIn();
    // 		}
    // 	});
    // }
    submitHandler: function () {	
	//   event.preventDefault();
      const nameInput = $("input[name='name']").val();                   
      const telInput = $("input[name='tel']").val();
      const emailInput = $("input[name='email']").val();
      const subjectInput = $("input[name='subject']").val();
      const messageInput = $("textarea[name='message']").val();   

      const templateParams = {
        to_name: "Artemis",
        from_name: nameInput,
        subject: subjectInput,
        message: `${messageInput}, please reply me via ${emailInput} or ${telInput}`,
      };

      emailjs
        .send("service_lnadkjc", "template_artemis_website", templateParams)
        .then(
          function (response) {
			console.log('SUCCESS!', response.status, response.text)
            alert('Your message has been sent!');
          },
          function (error) {
			console.log('FAILED...', error);
            alert('Oops... ' + JSON.stringify(error));
          }
        );
    },
  });
});
