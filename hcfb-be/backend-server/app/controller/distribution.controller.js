const db = require('../config/db.config.js');
const Distribution = db.distributions;

exports.create = (req, res) => {
    //Save to postgre database
    Distribution.create({
      "deliveryLocation" : req.body.deliveryLocation,
      "deliveryDepartureTime" : req.body.deliveryDepartureTime,
      "deliveryWeights" : req.body.deliveryWeights,
      "projectedNumberOfClients" : req.body.projectedNumberOfClients
    }).then(distribution => {
        res.json(distribution);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a the most recent distribution
exports.findByLocation = (req, res) => {	
    Distribution.findAll(
        { where: {deliveryLocation: req.params.deliveryLocation} }).then(distribution => {
			res.json(distribution);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Fetch all Distributions
exports.findAll = (req, res) => {
	Distribution.findAll().then(distributions => {
			// Send All Distributions to Client
			res.json(distributions.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Distribution
exports.update = (req, res) => {
    const Op = db.Sequelize.Op;
    const devLoc = req.body.deliveryLocation;
    var date = new Date(req.body.deliveryDepartureTime);
    Distribution.update( req.body, 
			{ where: {
                deliveryLocation: devLoc,
                deliveryDepartureTime: date
            }
             }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully"} );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

//Delete a Distrbution
exports.delete = (req, res) => {
    const id = req.params.id;
    const devLoc = req.body.deliveryLocation;
    var date = new Date(req.body.deliveryDepartureTime);
	Distribution.destroy({
			where: { 
                deliveryLocation: devLoc,
                deliveryDepartureTime: date
             }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
        });
    };