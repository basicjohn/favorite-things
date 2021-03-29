let favoriteThingsList = [];
let favoriteThingsInput;
let removedInput = [];


$(document).ready(function () {
  $("form").submit(function (event) {
    favoriteThingsInput = $("input#favoriteThings1").val();
    favoriteThingsList.push(favoriteThingsInput);
    favoriteThingsInput = $("input#favoriteThings2").val();
    favoriteThingsList.push(favoriteThingsInput);
    favoriteThingsInput = $("input#favoriteThings3").val();
    favoriteThingsList.push(favoriteThingsInput);
    console.log(favoriteThingsList);
    event.preventDefault();
    favoriteThingsList.forEach(function (thing) {
      $(".output ol").append("<li>" + thing + "</li>");


    });
  });


});

