myApp.controller('productsController', function ($scope, productsFactory) { 
 
	//3 create scope for array 
	$scope.products = [];
	 //3 get data from factory
	productsFactory.getProducts(function (data){
		$scope.products = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//2a ng-click add
	$scope.addProduct = function (newProduct) {				
		console.log('con addProduct', $scope.newProduct);
		productsFactory.addProduct($scope.newProduct);
			 $scope.newProduct = {};
	}

	//2a ng-click add
	$scope.delete = function(product) {
		console.log('$scope.delete', product);
		productsFactory.delete(product);
	}


}); //ends controller