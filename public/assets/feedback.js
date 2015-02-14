
$(document).ready(function() {
  var ref = new Firebase("https://ecm-atlas-feedback.firebaseio.com/");

  function submitFeedback() {
    var name = $('#name').val();
    var comments = $('#comments').val();
    var loc = window.location.href;
    ref.push({
      'name': name,
      'comments': comments,
      'location': loc
    });
  }

  $("#feedback-form-submit").click(function() {
    submitFeedback();
  });
});
