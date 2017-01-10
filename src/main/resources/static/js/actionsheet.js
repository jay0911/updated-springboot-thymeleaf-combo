

var myApp = angular.module('myApp',['ionic']);

myApp.controller('todoCtrl',function($scope,$ionicActionSheet,$timeout) {
	 $scope.show = function() {

		   // Show the action sheet
		   var hideSheet = $ionicActionSheet.show({
		     buttons: [
		       { text: '<b>Share</b> This' },
		       { text: 'Move' }
		     ],
		     destructiveText: 'Delete',
		     titleText: 'Modify your album',
		     cancelText: 'Cancel',
		     cancel: function() {
		          // add cancel code..
		    	 alert("cancel");
		        },
		     buttonClicked: function(index) {
		         if(index===0) {
		             alert("share this");
		         }else if(index===1){
		        	 alert("move");
		         }
		    	 return true;
		     },
		     destructiveButtonClicked: function(){
		    	 alert("delete");
		    	 return true;
		     }
		   });
		   // For example's sake, hide the sheet after two seconds
/*		   $timeout(function() {
		     hideSheet();
		   }, 2000);*/
	};
	$scope.showaction="Show Action Sheet";
});