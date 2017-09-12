$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });

  $(".clickable2").click(function() {
    $("#initially-showing2").slideToggle();
    $("#initially-hidden2").slideToggle();
  });

  $(".clickable3").click(function() {
    $("#initially-showing3").slideToggle();
    $("#initially-hidden3").slideToggle();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("light-text")
  });
});
