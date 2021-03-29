$(document).ready(function () {
  $("form").submit(function (event) {
    let favoriteThingsInput = $("favoriteThings :input");
    console.log(favoriteThingsInput);
    event.preventDefault();
  });
});