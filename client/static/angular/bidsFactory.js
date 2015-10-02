
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


	//3 create getHeros method to a callback 
	factory.getBids = function (callback) {
		//console.log('here in factory');
		//ask nodejs route
		$http.get('/getbids').success(function(output) {
			//console.log('factory.getQuestions http');
			bids = output;
			//pass the heros object to callback
			callback(bids);
			//console.log('factory.getQuestions',questions);
		})
	}



	factory.addBid = function(info) {
		console.log('fac add', info);
		//test local
		// questions.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addbid', info).success(function(output) {
			//questions.push({name:info.name})
			console.log('baby factory.add', info);
			//reload the page to fresh the data
			// $location.path('showQuestions');
		});
		$route.reload();
		$location.path('results');
	}	



	return factory
}) //ends factory