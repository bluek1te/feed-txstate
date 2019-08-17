const db = require('../config/db.config.js');
const Rescue = db.rescues;

exports.create = (req, res) => {
    //Save to postgre database
    Rescue.create({
      "store_name" : req.body.store_name,
      "store_number" : req.body.store_number,
      "district": req.body.district,
      "location": req.body.location,
      "meat_time_pick_up": req.body.meat_time_pick_up,
      "meat_temp_pick_up": req.body.meat_pick_up,
      "meat_time_drop_off": req.body.meat_time_drop_off,
      "meat_temp_drop_off": req.body.meat_drop_off,
      "produce_time_pick_up": req.body.produce_time_pick_up,
      "produce_temp_pick_up": req.body.produce_temp_pick_up,
      "produce_temp_drop_off": req.body.produce_drop_off,
      "produce_temp_drop_off": req.body.produce_temp_drop_off,
      "created_at": req.body.created_at,
      "updated_at": req.body.updated_at,
      "last_updated_by": req.body.last_updated_by
    }).then(rescue => {
        res.json(rescue);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a Rescue by Id
exports.findById = (req, res) => {	
	Rescue.findById(req.params.id).then(customer => {
			res.json(customer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Fetch all rescues
exports.findAll = (req, res) => {
	Rescue.findAll().then(rescues => {
			// Send All Rescues to Client
			res.json(rescues.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Rescue
exports.update = (req, res) => {
	const id = req.body.id;
	Rescue.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Customer Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

//Delete a Rescue
exports.delete = (req, res) => {
	const id = req.params.id;
	Rescue.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Customer Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
        });
    };
