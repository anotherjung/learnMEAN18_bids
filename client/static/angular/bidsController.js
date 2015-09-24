myApp.controller('bidsController', function ($scope, $routeParams,  usersFactory, bidsFactory) { 


	//3 create scope for array 
	$scope.users = [];
	//3 get data from factory
	usersFactory.getUsers(function (data){
		$scope.users = data;
		//console.log('questionFactory.getQuestions', data);
	})



}); //ends controller