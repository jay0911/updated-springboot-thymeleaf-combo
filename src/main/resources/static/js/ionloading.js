angular.module('myApp', ['ionic'])
.controller('MyController', function($scope, $ionicLoading) {
	  $scope.titlename="ion loading";
	  


  	  $scope.show = function() {
	    $ionicLoading.show({
	    	 template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>'+
	            '<p>Login ...</p>',
	          animation: 'fade-in',
	          noBackdrop: false,
	          maxWidth: 200,
	          showDelay: 500,
	      duration: 3000
	    }).then(function(){
	       console.log("The loading indicator is now displayed");
	    });
	  };
});