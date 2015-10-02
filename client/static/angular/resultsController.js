myApp.controller('resultsController', function ($scope, bidsFactory) { 


	//3 create scope for array 
	$scope.bids = [];
	//3 get data from factory
	bidsFactory.getBids(function (data){
		$scope.bids = data;
		//console.log('questionFactory.getQuestions', data);
	})



}); //ends controller