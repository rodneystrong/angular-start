var myApp = angular.module('myApp', []);

myApp.controller('MyController',
	function($scope) {
		$scope.author = {
			name: 'aleeex K',
			title: 'tutor',
			company : 'buildicus.com'
		}
	}
);