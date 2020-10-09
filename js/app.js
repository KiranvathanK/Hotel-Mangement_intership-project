var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"home.html"

  }).when("/branch",{
    controller:"myController",
    templateUrl:"branch.html"
  })

});
app.controller("myController",function($scope){

  $scope.datas=[{
      name:"Davangere",
      id:"abdjh@gmail.com",
      ph:2324557756
  },{
    name:"Mangalore",
    id:"hhj@yahoo.com",
    ph:455676759780
  },{
    name:"udupi",
    id:"hft@yahoo.com",
    ph:47938759780
  },{
    name:"Goa",
    id:"fgfhhj@yahoo.com",
    ph:867532986
  },{
    name:"Mysore",
    id:"khft@gmail.com",
    ph:89775534
  },{
    name:"hubli",
    id:"jk8t@yahoo.com",
    ph: 909975780
  },{
    name:"Hasan",
    id:"red@gmail.com",
    ph:9765438765
  },{
    name:"Darwad",
    id:"qeem@yahoo.com",
    ph:988759780
  },{
    name:"Bangaluru",
    id:"hhlmk@yahoo.com",
    ph:545659780
  },{
    name:"Haveri",
    id:"hfgchkt@gmail.com",
    ph:952139780
  }]

});
