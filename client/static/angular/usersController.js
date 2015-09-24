myApp.controller('usersController', function ($scope, usersFactory, $location) {


	$scope.addUser = function (newUser) {				
		console.log('userController', $scope.newUser);

			var dataObj = {
				username: $scope.newUser.username
			};

			usersFactory.login(dataObj, function (data) {
				console.log('userFactory.addUser', dataObj);
				$scope.thisUser = data;
			});
			$scope.newUser = {};
	} //ends


	


})

