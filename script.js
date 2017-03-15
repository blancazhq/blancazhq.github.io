//comments

$(document).ready(function(){
//social network icons jump
  icon = document.getElementsByClassName("icon");
  function spin1() {
    TweenMax.from(this,0.25,{rotation: 30})
    TweenMax.to(this,0.25,{rotation: 0});
  }

  for(var i = 0; i < icon.length; i++){
    icon[i].addEventListener("mouseenter", spin1);
  }

  //nav toggle

  $(document).ready(function(){
      $(".menu").click(function(){
          $(nav).toggleClass("nav_toggle");
      });
  });

  //nav giggle

  nav_item = document.getElementsByClassName("nav_ul_item");
  function giggle() {
    TweenMax.from(this,0.25,{rotation: 15});
    TweenMax.to(this,0.25,{rotation: 0});
  }
  for(var i = 0; i < nav_item.length; i++){
    nav_item[i].addEventListener("mouseenter", giggle);
  }

  //nav scrolling
  $('#nav_ul').onePageNav();

  //front page parallax
  $('#scene').parallax();

  //front page circle spin

  front_page_circle = document.getElementsByClassName("front_page_background_img");

  function spin() {
    TweenMax.from(".front_page_background_img",15,{rotation: 0})
    TweenMax.to(".front_page_background_img",15,{rotation: 15});
  }

  front_page_circle[0].addEventListener("mouseenter", spin);
  //front page letter move


      $(".front_page_wrapper").mouseenter(function() {
          $(".h").addClass("hmove");
          $(".u1").addClass("u1move");
          $(".i1").addClass("i1move");
          $(".q").addClass("qmove");
          $(".i2").addClass("i2move");
          $(".z").addClass("zmove");
          $(".h2").addClass("h2move");
          $(".o").addClass("omove");
          $(".u2").addClass("u2move");
          $(".web_developer_pic").addClass("web_developer_pic_move");

          setTimeout(function(){
            $(".h").addClass("hfinal");
            $(".u1").addClass("u1final");
            $(".i1").addClass("i1final");
            $(".q").addClass("qfinal");
            $(".i2").addClass("i2final");
            $(".z").addClass("zfinal");
            $(".h2").addClass("h2final");
            $(".o").addClass("ofinal");
            $(".u2").addClass("u2final");
            $(".web_developer_pic").addClass("web_developer_pic_final");
          }, 4000);
      });



  //line1, line2 pulling

  line1 = document.getElementsByClassName("line1");
  line2 = document.getElementsByClassName("line2");

  function pull_right() {
    TweenMax.from(this,0.25,{x: 120});
    TweenMax.to(this,0.25,{x: 0});
    TweenMax.from(this.nextElementSibling,0.25,{x: -120});
    TweenMax.to(this.nextElementSibling,0.25,{x: 0});
  }

  line1[0].addEventListener("mouseenter", pull_right);

  function pull_left() {
    TweenMax.from(this,0.25,{x: -120});
    TweenMax.to(this,0.25,{x: 0});
    TweenMax.from(this.previousElementSibling,0.25,{x: 120});
    TweenMax.to(this.previousElementSibling,0.25,{x: 0});
  }

  line2[0].addEventListener("mouseenter", pull_left);

  //project_div rotation

  project_div = document.getElementsByClassName("project_div");

  function transformshape() {
    TweenMax.from(this.childNodes[1],0.25,{rotation: -15});
    TweenMax.to(this.childNodes[1],0.25,{rotation: 0, transformOrigin:"left bottom"});
  }

  for(var i = 0; i < project_div.length; i++){
    project_div[i].addEventListener("mouseenter", transformshape);
  }

  //project_div jump when scrolled to

  var waypoint = new Waypoint({
    element: document.getElementById('project_show'),
    handler: function(down) {
      TweenMax.staggerFrom(".project_div", 1.5, {opacity: 0, y: -50, ease: Back.easeOut}, 0.25);
      waypoint.disable();
    },
    offset: 600
  })

  //submit button animation
  contact_submit = document.getElementsByClassName("contact_submit");

  function enable_button() {
    TweenMax.from(this,0.25,{scale: 1});
    TweenMax.to(this,0.25,{scale: 1.1});
  }

  contact_submit[0].addEventListener("mouseenter", enable_button);

});
