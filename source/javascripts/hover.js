// $(document).ready(function() {
//   $("#card-info").each(function() {
//     $(this).click(function() {
//       $("#card-content").fadeToggle();
//     });
//   });
// });


// $(document).ready(function(){
//         $('#card').addClass('#card-content');

//         $('#card-info').click(function() {
//             var $this = $(this);

//             if ($this.hasClass('#card-content')) {
//                 $(this).removeClass('#card-content').addClass(card);

//             } else {
//                 $(this).removeClass("visible").addClass("hidden");
//             }
//         });
//     });


$(document).ready(function () {
  $('.card').on('click', '.showdiv', function(e) {
      var $card = e.delegateTarget;
      $('#card-content', $card).toggle('slide');
      $('.showdiv', $card).hide();
      $('.hidediv', $card).show();
  })
  .on('click', '.hidediv', function(e) {
      var $card = e.delegateTarget;
      $('#card-content', $card).toggle("slide");
      $(".hidediv", $card).hide();
      $(".showdiv", $card).show();
  });
});
