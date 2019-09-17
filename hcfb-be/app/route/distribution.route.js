module.exports = function(app) {
  const distributions = require("../controller/distribution.controller.js");

  //Get a Distribution by delivery location
  app.get("/api/distribution/:deliveryLocation", distributions.findByLocation);

  //Get all Distributions
  app.get("/api/distribution", distributions.findAll);

  //Create a Distribution
  app.post("/api/distribution", distributions.create);

  //Update a Distribution
  app.put("/api/distribution", distributions.update);

  //Delete a Distribution
  app.delete("/api/distribution/:deliveryLocation", distributions.delete);
};
