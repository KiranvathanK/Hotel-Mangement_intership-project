var myApp=angular.module("myApp",[]);
myApp.controller("myController",function($scope,$http){
$http.get("http://localhost:3000/data").then(function(response){
  $scope.datas=response.data;

});



});
myApp.controller("myControllerFeeds",function($scope,$http){
$http.get("http://localhost:3000/feedbacks").then(function(response){
  $scope.feeds=response.data;

});
});

myApp.controller("myControllerCorp",function($scope,$http){
$http.get("http://localhost:3000/").then(function(response){
  $scope.corps=response.data;

});



});

myApp.controller("myControllerBirth",function($scope,$http){
$http.get("http://localhost:3000/birth").then(function(response){
  $scope.births=response.data;

});



});
myApp.controller("myControllerNew",function($scope,$http){
$http.get("http://localhost:3000/new").then(function(response){
  $scope.partys=response.data;

});



});
myApp.controller("myControllerFeed",function($scope,$http){
$http.get("http://localhost:3000/feedback").then(function(response){


});
$scope.givefeedback=function(){

     let feedback={
       review:$scope.rating,
       comments:$scope.comments,
       name:$scope.name,
       email:$scope.email,
       serviceid:$scope.sid
       }
       console.log(feedback);
       $http.post("http://localhost:3000/feedback",feedback).then(function(response){
           console.log(response.data);
           $scope.msg=response.data;
           $scope.email="";
           $scope.name="";
           $scope.comments="";
           $scope.review="";
           $scope.sid="";
       })



}
});



myApp.controller("myControllerContact",function($scope,$http){
$http.get("http://localhost:3000/contact").then(function(response){


});
$scope.giveContact=function(){

     let contact={
       name:$scope.name,
       emailid:$scope.email,
       eventdate:$scope.date,
       country:$scope.country,
       events:$scope.event,
       mobile:$scope.mobile,
       requirement:$scope.require
       }
       console.log(contact);
       $http.post("http://localhost:3000/contact",contact).then(function(response){
           console.log(response.data);
           $scope.msg=response.data;
           $scope.email="";
           $scope.name="";
           $scope.date="";
           $scope.country="";
           $scope.event="";
           $scope.mobile="";
           $scope.require="";
       })



}
});
