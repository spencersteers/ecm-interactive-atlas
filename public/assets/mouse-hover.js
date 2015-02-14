$(document).on("mouseenter", "#explore-nav .All", function() {
  console.log("hello");
  $("#explore-mouse").attr('src', 'assets/images/mouse/mouse.png');
});

$(document).on("mouseenter", "#explore-nav .Skin", function() {
  console.log("hello");
  $("#explore-mouse").attr('src', 'assets/images/mouse/mouse-skin.png');
});


$(document).on("mouseenter", "#explore-nav .Muscle", function() {
  $("#explore-mouse").attr('src', 'assets/images/mouse/mouse-muscle.png');
});

// $(document).ready(function() {
//   console.log($('#explore-nav'));

//   $('#explore-nav .Muscle').hover( function () {
//       console.log($(this));
//       $("#explore-mouse").attr('src', 'assets/images/mouse/mouse-muscle.png');
//   });
// });