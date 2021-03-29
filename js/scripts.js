$(document).ready(function () {

  var favoriteIcecreams = ["Cookies & cream", "choclate", "vanilla"];

  favoriteIcecreams.forEach(function (flavior) {
    $("ul").append('<li>' + flavior + '</li>');
  });

});