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
	  
	  $scope.searchval = {};
	
	  $scope.items = [
		    { id: 0 , name:"jay" },
		    { id: 1 , name:"ryan" },
		    { id: 2 , name:"oliveros" },
		    { id: 3 , name:"eraine" },
		    { id: 4 , name:"bernadette" },
		    { id: 5 , name:"santos" },
		    { id: 6 , name:"otayde" },
		    { id: 7 , name:"angeles" },
		    { id: 8 , name:"jaylord" },
		    { id: 9 , name:"jaybee" },
		    { id: 10 , name:"jayson" }
		  ];
});