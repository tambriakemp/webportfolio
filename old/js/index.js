
// function homePage () {
//   $(".home").click(function(){
//     $("#home").show();
//   });
//   $(".btn2").click(function(){
//     $("p").show();
//   });
// }  

function homePage () {

$(".nav-link").click(function(e) {
  e.preventDefault();
  $('.content-container section').fadeOut('slow');
  $('#' + $(this).data('rel')).fadeIn('slow');
});
} 
  function init (){
    homePage()
  }