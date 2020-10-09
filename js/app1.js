var appp=angular.module("myApp1",["ngRoute"]);
appp.config(function($routeProvider){
  $routeProvider.when("/book",{
    templateUrl:"book.html"

  })


});
