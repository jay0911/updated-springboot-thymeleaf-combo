angular.module('ionicApp', ['ionic','ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "partials/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "partials/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "partials/ionform.html",
          controller: 'MyController'
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "partials/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "partials/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "partials/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "partials/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})

.controller('MyController', function($scope) {

	  $scope.titlename="ion form sample";
	  $scope.gender=[
	                 	{text:"Male",value:"male"},
	                 	{text:"Female",value:"female"}
	                ];
	  
	  $scope.customer = {
			  name : "",
			  address : "",
			  gender : "male",
			  interested : true
	  };

	  
//	  naming
	  $scope.classgender= "Gender";
	  $scope.info="Basic Information";	  
	  $scope.isinterested="Is Interested";
	  $scope.yesno="yes/no";
	  
	  
	  
	  $scope.onsubmit = function(){
		  
		  alert(JSON.stringify($scope.customer));

		  return false;
		  
	  }
	  

});