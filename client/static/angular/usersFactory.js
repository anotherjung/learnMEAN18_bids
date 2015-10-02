myApp.factory('usersFactory', function ($http, $route, $location) {
	var factory = {};
	//var currentUser;
	var thisUser;

	factory.login = function (user, callback) {
		console.log('factory.login', user);

		var dataObj = {name: user.username};

		$http.post('/login', dataObj)
			 .success(function (output) {
				thisUser = output;
				callback(output);
				console.log('callback-output', thisUser);
		})
		//reload the page to fresh the data
		$route.reload();
		$location.path('bids');
	}

	factory.getThisUser = function(callback) {
		callback(thisUser);
		console.log('userfactory getThisUser',thisUser);
	}

	//3 create getHeros method to a callback 
	factory.getUsers = function (callback) {
		//console.log('here in factory');
		//ask nodejs route
		$http.get('/getusers').success(function(output) {
			//console.log('factory.getlists http', output);
			users = output;
			//pass the heros object to callback
			callback(users);
			//console.log('factory.getQuestions',questions);
		 })
	}

	return factory;
})