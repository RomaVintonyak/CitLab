jQuery(document).ready(function(){
  "use script";
  /*scroll down btn*/
  var scrollBtn = $("#scrollBtn");
  scrollBtn.on("click", function (event){
    event.preventDefault();
    var wHight = $(window).height();
    $("html, body").animate({
      scrollTop: wHight
    }, 1000);
  });
  /*post block*/
  var dropDownBtn = $(".drop__down--header");
  var downCloseBtn = $(".header__close");
  dropDownBtn.on("click", function(){
    $(".header__close").toggleClass("header__close--active");
  });
});