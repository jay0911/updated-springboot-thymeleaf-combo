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
  
  $scope.onsubmit = function(){
	  var helo = "hahah"
	  alert(helo);
	  var el1 = angular.element(document.querySelector('#name')).val();
	  var el2 = angular.element(document.querySelector('#address')).val();
	  alert(el1);
	  alert(el2);
	  
  }
  
});