angular.module('myApp', ['ionic'])

.controller('todoCtrl', function($scope,$ionicBackdrop,$timeout, $rootScope) {
	
	$scope.titlename = "backdrop";
	$scope.buttonname = "button name";
	$scope.showbackdrop = "Show Backdrop";
	$scope.hidebackdrop = "Hide Back Drop";
 
	$scope.action = function() {
		$ionicBackdrop.retain();
	    $timeout(function() {
	      $ionicBackdrop.release();
	    }, 1000);
	};
	
	  // Execute action on backdrop disappearing
	  $scope.$on('backdrop.hidden', function() {
	    // Execute action
		  alert("disappearing");
	  });

	  // Execute action on backdrop appearing
	  $scope.$on('backdrop.shown', function() {
	    // Execute action
		  alert("appearing");
	  });
 
	//back object is set to hidden=true by ng-hide
	$scope.show = function() {
	    $scope.back = true;
	    $ionicBackdrop.retain();
	};
	
	//back object is set to hidden=false by ng-hide
	$scope.hide = function () {
	    $scope.back = false;
	    $ionicBackdrop.release();
	};
	
  
});