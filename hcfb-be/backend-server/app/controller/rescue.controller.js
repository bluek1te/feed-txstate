const db = require("../config/db.config.js");
const Rescue = db.rescues;

exports.create = async (req, res) => {
  //Save to postgre database
  try {
    const rescue = await Rescue.create({
      store_name: req.body.store_name,
      store_number: req.body.store_number,
      district: req.body.district,
      location: req.body.location,
      date: req.body.date,
      food_name: req.body.food_name,
      time_pick_up: req.body.time_pick_up,
      time_drop_off: req.body.time_drop_off,
      last_updated_by: req.body.last_updated_by,
    });
    res.json(rescue);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  }
};

// Find a Rescue by Id
exports.findById = async (req, res) => {
  try {
    const rescue = await Rescue.findById(req.params.id);
    res.json(rescue);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error", details: err });
  }
};

// Fetch all rescues
exports.findAll = async (req, res) => {
  try{
    const allRescues = await Rescue.findAll();
    res.json(rescues.sort(function(c1, c2) {return c1.id - c2.id;}));
  } catch(err) {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
  }
};

// Update a Rescue
exports.update = async (req, res) => {
  try {
    const id = req.body.id;
    const rescue = await Rescue.update(req.body, { where: { id: id } });
    res.status(200).json({ mgs: "Updated Successfully -> Rescue Id = " + id });
  } catch(err) {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
  }
};

//Delete a Rescue
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    Rescue.destroy({
      where: { id: id },
    })
    res.status(200).json({ msg: "Deleted Successfully -> Rescue Id = " + id });
  } catch(err) {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
  }
    
};
