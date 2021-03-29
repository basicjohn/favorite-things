let favoriteThingsList = [];
let favoriteThingsInput;


$(document).ready(function () {
  $("form").submit(function (event) {
    favoriteThingsInput = $("input#favoriteThings1").val();
    favoriteThingsList.push(favoriteThingsInput);
    favoriteThingsInput = $("input#favoriteThings2").val();
    favoriteThingsList.push(favoriteThingsInput);
    favoriteThingsInput = $("input#favoriteThings3").val();
    favoriteThingsList.push(favoriteThingsInput);
    favoriteThingsList.shift(favoriteThingsInput);
    console.log(favoriteThingsList);
    event.preventDefault();
  });
});

