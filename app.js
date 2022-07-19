//this is defining the app module and the balancedBracecesTest directive within that module
angular.module('app', [])
.directive('balancedBracesTest', function () {
	return {
		// put your directive definition object here
		templateUrl : 'balanced-braces.tmpl.html',
	};
});
