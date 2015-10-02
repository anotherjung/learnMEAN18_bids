myApp.controller('bidsController', function ($scope, usersFactory, bidsFactory, productsFactory) { 

	//3 create scope for array 
	$scope.users = [];
	//3 get data from factory
	usersFactory.getUsers(function (data){
		$scope.users = data;
		//console.log('questionFactory.getQuestions', data);
	})


	//3 create scope for array 
	$scope.products = [];
	//3 get data from factory
	productsFactory.getProducts(function (data){
		$scope.products = data;
		//console.log('questionFactory.getQuestions', data);
	})



	//2a ng-click add
	$scope.addBid = function (bid, product) {				
		console.log('con addBid', product);
		bid._product = product;
		usersFactory.getThisUser(function (data) {
			thisUser = data;
			console.log('usersFactory.getThisUser', thisUser);
		})
		bid._user = thisUser;
		bidsFactory.addBid(bid);
			 
	}
}); //ends controller