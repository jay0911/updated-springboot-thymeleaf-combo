angular.module('ionicApp', ['ionic'])
.controller('MyController', function($scope) {
	  $scope.data = {
			    showDelete: false
			  };
			  
			  $scope.edit = function(item) {
			    alert('Edit Item: ' + item.id);
			  };
			  $scope.share = function(item) {
			    alert('Share Item: ' + item.id);
			  };
			  
			  $scope.onItemDelete = function(item) {
			    $scope.items.splice($scope.items.indexOf(item), 1);
			  };
	  $scope.clearSearch = function(){
		  $scope.searchval = {};
	  };
	
	  $scope.items = [
		    { id: 0 , value:"jay" },
		    { id: 1 , value:"ryan" },
		    { id: 2 , value:"oliveros" },
		    { id: 3 , value:"eraine" },
		    { id: 4 , value:"bernadette" },
		    { id: 5 , value:"santos" },
		    { id: 6 , value:"otayde" },
		    { id: 7 , value:"angeles" },
		    { id: 8 , value:"jaylord" },
		    { id: 9 , value:"jaybee" },
		    { id: 10 , value:"jayson" }
		  ];
});