// Write your Pizza Builder JavaScript in this file.

var total_price = 10;

$(document).ready(function() {
  $(".white-sauce").css("display", "none");
  $(".gluten-free").css("display", "none");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".total-price").html("$" + total_price);

  // $(".btn").on("click", function(){
  //   getTotalPrice();
  // });

  $(".btn-pepperonni").on("click", function() {
    $(".pepperonni").toggle();
    $(".pep").toggle();
  });

  $(".btn-mushrooms").on("click", function() {
    $(".mushrooms").toggle();
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".green-peppers").toggle();
  });

  $(".btn-sauce").on("click", function() {
    $(".white-sauce").toggle();
    $(".sauce").toggleClass("sauce-white");
  });

  $(".btn-crust").on("click", function() {
    $(".gluten-free").toggle();
    $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn").on("click", function() {
    $(this).toggleClass("active");
  });

  // function getTotalPrice() {
  //   var pepperonni = 0;
  //   var mushroom = 0;
  //   var peppers = 0;
  //   var sauce = 0;
  //   var crust = 0;
  //   if ($(".btn-pepperonni").hasClass(".active")) {
  //     pepperoni = 1;
  //   }
  //
  //   total_price = total_price + pepperoni;
  // }
});







// function() {
//     $(".green-pepper").toggle();
//     $(".green-peppers").toggle();
//   });
//
// // });
