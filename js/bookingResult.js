
$(document).ready(function(){
  loadBookingData();
});

function loadBookingData(){
  const finalBookingResult = JSON.parse(localStorage.getItem("booking-data"));
  $("#complete-name").html(finalBookingResult["first_name"] + " " + finalBookingResult["last_name"]);
  $("#booking-dates").html("Your Stay:" + " " + finalBookingResult["start_date"] + " - " + finalBookingResult["end_date"]);
  $("#email").html("Your Email:" + " " + finalBookingResult["email"]);
  $("#beds").html("Beds:" + finalBookingResult["number_beds"] + " " + finalBookingResult["type_beds"]);
  $("#bathrooms").html("Bathrooms:" + " " + finalBookingResult["number_bathrooms"]);
  $("#food").html("Food:" + " " + finalBookingResult["food"]);
  $("#cleaning").html("Cleaning:" + " " + finalBookingResult["cleaning"]);

}
