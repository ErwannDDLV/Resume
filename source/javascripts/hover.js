// $(document).ready(function(){
//   $('.navbar-wagon-link').hover(function(){
//       $(this).css("color": "#8f564d", "text-decoration": "none", "border-top": "3px solid #8f564d", "border-bottom": "3px solid #8f564d", "padding-top": "3px", "padding-bottom": "3px", "transition": "0.2s ease");
//       }, function(){
//       $(this).css("color": "#A6A6A6", "font-size": "17px");
//   });
// });

// $(function() {
//    $('.navbar-wagon-item').hover( function(){
//       $(this).css('background-color', '#F00');
//    },
//    function(){
//       $(this).css('background-color', '#000');
//    });
// });




$(document).ready(function() {
   $('#one').hover(
     function() {
       $('#two').slideDown();
     },
     function() {
       $('#two').slideUp();
     }
   );
});
