angular.module('myApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.titlename="ion refresher";
  $scope.customers = [
	  					{"name":"eraine1","address":"hagonoy"},
	  					{"name":"eraine2","address":"malolos"},
	  					{"name":"eraine3","address":"sta maria"}
	  				 ];
  $scope.doRefresh = function() {
    $http.get('/refresh')
     .success(function(c) {
       $scope.customers = c;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});