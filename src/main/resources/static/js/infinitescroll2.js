angular.module('myApp', ['ionic'])

.controller('MyController', function($scope,$http) {
  
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
  
  $scope.items = [
	    { id: 0 },
	    { id: 1 },
	    { id: 2 },
	    { id: 3 },
	    { id: 4 },
	    { id: 5 },
	    { id: 6 },
	    { id: 7 },
	    { id: 8 },
	    { id: 9 },
	    { id: 10 },
	    { id: 11 },
	    { id: 12 },
	    { id: 13 },
	    { id: 14 },
	    { id: 15 },
	    { id: 16 },
	    { id: 17 },
	    { id: 18 },
	    { id: 19 },
	    { id: 20 }
  ];
  
  $scope.loadMoreData=function(done)
  {
      
        $http.get('/infiniterefresh')
        .success(function(c) {
        	$scope.items= $scope.items.concat(c);
        })
        .finally(function() {
          // Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
	
  };
  
});