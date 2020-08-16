

window.onscroll = function(){


    document.querySelector("#page-header").style. = "none";
    
    document.querySelector("#site-header").style.border = "none";
    var nav = document.querySelector("#site-header");
    var sticky = nav.offsetTop;
    var navheight = nav.clientHeight;
    var main = document.querySelector("#main");
    //main.style.paddingTop = navheight + "px";
      if (window.pageYOffset >= sticky) {
      nav.style.position = "fixed";
      nav.style.transition = "background-color 0.5s ease";
      nav.style.backgroundColor = "#ffffff";
      } else {
      nav.style.position = "fixed";
      nav.style.backgroundColor = "rgba(255, 255, 255, 0)";
    
      }