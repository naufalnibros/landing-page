// Form Booking
// function focusForm() {
//   console.log("form focus");
//   document.getElementById('form-booking-focus').style.zIndex = 10000;
//   document.getElementById('form-booking-cover').style.opacity = 0.92;
//
//   var value = 1;
//   value++;
//
//   console.log("log",value);
//
// }
//
// function formNormal(value = 1) {
//   console.log("form normal");
// }
$(document).ready(function () {

  $('#form-booking-focus').on('click', function(e) {
    console.log("DATA");
    e.preventDefault();
    // document.getElementById('form-booking-cover').style.opacity = 0.92;
    $('#form-booking-cover').css({
      "opacity" : 0.92,
      "z-index" : 5,
      "pointer-events" : "all"
    });
    document.getElementById('form-booking-focus').style.zIndex = 6;
  });

  $('button').on('click', function(e) {
    console.log("TEST BTN");
  });

  $('#form-booking-cover').on('click', function(e) {
    console.log("DATA2");
    e.preventDefault();

    $('#form-booking-cover').css({
      "opacity" : 0,
      "z-index" : 0,
      "pointer-events" : "none"
    });

  });

});
