angular.module('myApp', ['ionic'])
.controller('MyController', function($scope) {
  $scope.titlename="ion form sample";
  $scope.name="Name";
  $scope.address="Address";
  $scope.gender=[
                 	{text:"Male",value:"male"},
                 	{text:"Female",value:"female"}
                ];
  $scope.gendervalue = {value:"male"};
  $scope.classgender= "Gender";
  $scope.info="Basic Information";
	  
  $scope.isinterested="Is Interested";
  $scope.yesno="yes/no";
  
  $scope.customerinterested = {checked : true};
  
});