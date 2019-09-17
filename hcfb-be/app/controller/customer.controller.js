const db = require("../config/db.config.js");
const Customer = db.customers;

// Post a Customer
exports.create = (req, res) => {
  // Save to PostgreSQL database
  Customer.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  })
    .then(customer => {
      // Send created customer to client
      res.json(customer);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// FETCH All Customers
exports.findAll = (req, res) => {
  Customer.findAll()
    .then(customers => {
      // Send All Customers to Client
      res.json(
        customers.sort(function(c1, c2) {
          return c1.id - c2.id;
        })
      );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      res.json(customer);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.body.id;
  Customer.update(req.body, { where: { id: id } })
    .then(() => {
      res
        .status(200)
        .json({ mgs: "Updated Successfully -> Customer Id = " + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id },
  })
    .then(() => {
      res
        .status(200)
        .json({ msg: "Deleted Successfully -> Customer Id = " + id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};
