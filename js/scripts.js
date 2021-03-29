$(document).ready(function () {
  $("form").submit(function (event) {
    let favoriteThingsInput = $("input#favoriteThings").val();
    console.log(favoriteThingsInput);
    event.preventDefault();
  });
});