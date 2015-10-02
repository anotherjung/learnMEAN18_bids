// //MVC2a controllers
var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var product = mongoose.model('Product');

//MVC2b export
module.exports =  {
	getbids: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//5a associate customer info in bids using populate
		//MVC model
		Bid.find({})
      .populate('_user')
      .populate('_product')
      .exec(function (err, results) {
        console.log('results',results);
        res.json(results);
      })    
	},

	addbid: function(req, res) {
		console.log('con addbid', req.body);
      //var bid= new Bid(req.body);
      product.findOne({_id: req.body._product._id}, function(err, pro){
          // data from form on the front end
          console.log('found product in db', pro);
          var bid = new Bid(req.body);
          //  set the reference like this:
          // bid._product = pro._id;
          console.log('herehere1pro',pro);
          console.log('herehere2bid',bid);
          pro.bids.push(bid);
          // now save both to the DB
          bid.save(function(err){
           pro.save(function(err){
              if(err) {
               console.log('Error');
             } else {
              res.redirect('/');
            }
          });
          });
        });


    // console.log('con addbid', req.body);
    // var cc = new bid({amount:req.body.amount, created:Date.now()});
    // cc.save(function(err) {
    //   // console.log('11');
    //   if(err) {
    //     console.log("err con addbid", err);
    //   } else {
    //     res.redirect('/');
    //     console.log("baby addbid");
    //   }
    // })


	}


}//ends module.exports