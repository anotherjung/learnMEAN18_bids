//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/view0users.html'
	})
	.when('/bids',{
		templateUrl: 'partials/view1bids.html'
	})
	.when('/results',{
		templateUrl: 'partials/view2results.html'
	})
	.when('/products',{
		templateUrl: 'partials/view3products.html'
	})
	// .otherwise({
	// 	redirectTo: '/'
	//})
	;
})//ends config

