var myApp=angular.module("myApp",[]);


myApp.controller("myControllerFeeds",function($scope,$http){
$http.get("http://localhost:3000/feedbacks").then(function(response){
  $scope.feeds=response.data;
  

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
       email:$scope.email
       }
       console.log(feedback);
       $http.post("http://localhost:3000/feedback",feedback).then(function(response){
            console.log(response.data);
            $scope.msg=response.data;
            $scope.email="";
            $scope.name="";
            $scope.comments="";
            $scope.review="";
           $scope.msg=response.data;

       })



}
});



myApp.controller("myControllerContact",function($scope,$http){
$http.get("http://localhost:3000/contact").then(function(response){


});
$scope.giveContact=function(){

     let contact={
       name:$scope.name,
       email:$scope.email,

       country:$scope.country,
       mobile:$scope.mobile,
       requirement:$scope.require
       }
       console.log(contact);
       $http.post("http://localhost:3000/contact",contact).then(function(response){
           console.log(response.data);
           $scope.msg=response.data;
           $scope.email="";
           $scope.name="";
           $scope.country="";
           $scope.mobile="";
           $scope.require="";
           $scope.msg=response.data;
       })



}
});





myApp.controller("myControllerstarroom",function($scope,$http){
$http.get("http://localhost:3000/starroom").then(function(response){


});
$scope.givestarroom=function(){

     let starroom={
       firstname:$scope.fname,
       mailid:$scope.mailid,
       checkin:$scope.checkindate,
       checkout:$scope.checkoutdate,
       rooms:$scope.rooms,
       phoneno:$scope.phone,
       address:$scope.address,
       country:$scope.country,

       }
       console.log(starroom);
        $http.post("http://localhost:3000/starroom",starroom).then(function(response){
            console.log(response.data);
             $scope.msg=response.data;
             $scope.fname="";
             $scope.lname="";
             $scope.checkindate="";
              $scope.checkoutdate="";
               $scope.rooms="";
            $scope.mailid="";
             $scope.address="";
             $scope.name="";
             $scope.country="";
             $scope.phone="";
             $scope.msg=response.data;
//  alert("Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you.");

        })



}
});


myApp.controller("myControllersuperiorstarroom",function($scope,$http){
$http.get("http://localhost:3000/superiorstarroom").then(function(response){


});
$scope.givesuperiorstarroom=function(){

     let superiorstarroom={
       firstname:$scope.fname,
       mailid:$scope.mailid,
       checkin:$scope.checkindate,
       checkout:$scope.checkoutdate,
       rooms:$scope.rooms,
       phoneno:$scope.phone,
       address:$scope.address,
       country:$scope.country,
       }
       console.log(superiorstarroom);
       $http.post("http://localhost:3000/superiorstarroom",superiorstarroom).then(function(response){
             console.log(response.data);
             $scope.msg=response.data;
            $scope.fname="";
            $scope.lname="";
            $scope.checkindate="";
             $scope.checkoutdate="";
           $scope.rooms="";
          $scope.mailid="";
             $scope.address="";
             $scope.name="";
             $scope.country="";
             $scope.phone="";
            $scope.msg=response.data;
    //alert("Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you.");

       })



}
});


myApp.controller("myControllers3",function($scope,$http){
$http.get("http://localhost:3000/s3").then(function(response){


});
$scope.gives3=function(){

     let s3={
       firstname:$scope.fname,
       mailid:$scope.mailid,
       checkin:$scope.checkindate,
       checkout:$scope.checkoutdate,
       rooms:$scope.rooms,
       phoneno:$scope.phone,
       address:$scope.address,
       country:$scope.country,
       }
       console.log(s3);
       $http.post("http://localhost:3000/s3",s3).then(function(response){
             console.log(response.data);
             $scope.msg=response.data;
             $scope.fname="";
             $scope.lname="";
             $scope.checkindate="";
              $scope.checkoutdate="";
               $scope.rooms="";
             $scope.mailid="";
             $scope.address="";
             $scope.name="";
             $scope.country="";
             $scope.phone="";
            $scope.msg=response.data;
           //alert("Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you.");

       })



}
});


myApp.controller("myControllers4",function($scope,$http){
$http.get("http://localhost:3000/s4").then(function(response){


});
$scope.gives4=function(){

     let s4={
       firstname:$scope.fname,
       mailid:$scope.mailid,
       checkin:$scope.checkindate,
       checkout:$scope.checkoutdate,
       rooms:$scope.rooms,
       phoneno:$scope.phone,
       address:$scope.address,
       country:$scope.country,
       }
       console.log(s4);
       $http.post("http://localhost:3000/s4",s4).then(function(response){
             console.log(response.data);
             $scope.msg=response.data;
             $scope.fname="";
             $scope.lname="";
             $scope.checkindate="";
              $scope.checkoutdate="";
               $scope.rooms="";
             $scope.mailid="";
             $scope.address="";
             $scope.name="";
             $scope.country="";
             $scope.phone="";
            $scope.msg=response.data;
              //alert("Congrats,your room has reserved as per your choice.you can pay at the time of check-in or-else it leads to the cancellation of room.Thank you.");
       })



}
});
