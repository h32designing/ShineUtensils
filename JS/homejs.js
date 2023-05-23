$(document).ready(function(){
  $(function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el){
        function visPx(){
          var H = $(this).height(),
              r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));
  
  
  jQuery(function($) { // DOM ready and $ in scope
  
    $(".fig-number").inViewport(function(px) { // Make use of the `px` argument!!!
      // if element entered V.port ( px>0 ) and
      // if prop initNumAnim flag is not yet set
      //  = Animate numbers
      if(px>0 && !this.initNumAnim) { 
        this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          delay:1000,
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });         
      }
    });
  });
    $("#btn2").click(function(){
        $("#europe").css("display", "inline");
        $("#america").css("display", "none");
        $("#pakistan").css("display", "none");
        $("#uae").css("display", "none");
        $("#btn2").css("background-color" , "#ff9a00")
        $("#btn2").css("color" , "white")

        $("#btn1").css("background-color" , "transparent")
        $("#btn1").css("color" , "#ff9a00")
        $("#btn1").css("border" , "2px solid #ff9a00")

        $("#btn3").css("background-color" , "transparent")
        $("#btn3").css("color" , "#ff9a00")
        $("#btn3").css("border" , "2px solid #ff9a00")

        $("#btn4").css("background-color" , "transparent")
        $("#btn4").css("color" , "#ff9a00")
        $("#btn4").css("border" , "2px solid #ff9a00")
      });
      $("#btn3").click(function(){
        $("#pakistan").css("display", "inline");
        $("#america").css("display", "none");
        $("#europe").css("display", "none");
        $("#uae").css("display", "none");
        $("#btn3").css("background-color" , "#ff9a00")
        $("#btn3").css("color" , "white")

        $("#btn2").css("background-color" , "transparent")
        $("#btn2").css("color" , "#ff9a00")
        $("#btn2").css("border" , "2px solid #ff9a00")

        $("#btn1").css("background-color" , "transparent")
        $("#btn1").css("color" , "#ff9a00")
        $("#btn1").css("border" , "2px solid #ff9a00")

        $("#btn4").css("background-color" , "transparent")
        $("#btn4").css("color" , "#ff9a00")
        $("#btn4").css("border" , "2px solid #ff9a00")
      });
      $("#btn4").click(function(){
        $("#uae").css("display", "inline");
        $("#pakistan").css("display", "none");
        $("#america").css("display", "none");
        $("#europe").css("display", "none");
        $("#btn4").css("background-color" , "#ff9a00")
        $("#btn4").css("color" , "white")

        $("#btn2").css("background-color" , "transparent")
        $("#btn2").css("color" , "#ff9a00")
        $("#btn2").css("border" , "2px solid #ff9a00")

        $("#btn3").css("background-color" , "transparent")
        $("#btn3").css("color" , "#ff9a00")
        $("#btn3").css("border" , "2px solid #ff9a00")

        $("#btn1").css("background-color" , "transparent")
        $("#btn1").css("color" , "#ff9a00")
        $("#btn1").css("border" , "2px solid #ff9a00")

      });

      $("#btn1").click(function(){
        $("#america").css("display", "inline");
        $("#uae").css("display", "none");
        $("#europe").css("display", "none");
        $("#pakistan").css("display", "none");
        $("#btn1").css("background-color" , "#ff9a00")
        $("#btn1").css("color" , "white")

        $("#btn2").css("background-color" , "transparent")
        $("#btn2").css("color" , "#ff9a00")
        $("#btn2").css("border" , "2px solid #ff9a00")

        $("#btn3").css("background-color" , "transparent")
        $("#btn3").css("color" , "#ff9a00")
        $("#btn3").css("border" , "2px solid #ff9a00")

        $("#btn4").css("background-color" , "transparent")
        $("#btn4").css("color" , "#ff9a00")
        $("#btn4").css("border" , "2px solid #ff9a00")

      })
      $(document).ready(function() {
        $(".openUserEditBox").on("click", function() {
            $(".user-drawer")[0].style.margin = '0%';
            $(".user-drawer")[0].style.left = '-0px';
        });
        $(".closeUserEditBox").on("click", function() {
            $(".user-drawer")[0].style.left = '1920px';
        });
        });
      });
      