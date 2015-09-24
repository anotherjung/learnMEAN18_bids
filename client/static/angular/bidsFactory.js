
//5b add factory to provide data to controller
myApp.factory('bidsFactory', function ($route, $http, $location) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var bids = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];
	var factory = {};


	return factory
}) //ends factory