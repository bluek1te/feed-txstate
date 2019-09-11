

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 
require('./app/route/customer.route.js')(app);
require('./app/route/rescue.route.js')(app);
require('./app/route/distribution.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){
  let rescues = [
    {
      store_name: "HEB",
      store_number: "#708",
      district: "Buda",
      location: "14411 RR 12, Wimberely Square, TX 78676",
      meat_time_pick_up: new Date(),
      meat_temp_pick_up: "34",
      meat_time_drop_off: new Date(),
      meat_temp_drop_off: "39",
      produce_time_pick_up: new Date(),
      produce_temp_pick_up: "32",
      produce_time_drop_off: new Date(),
      produce_temp_drop_off: "38",
      time_pick_up: new Date(),
      updated_at: new Date(),
      last_updated_by: "Jerry"
    },
    {
      store_name: "Target",
      store_number: "#7453",
      district: "Hays County",
      location: "701 North Fredericksburg St, San Marcos, TX 78676",
      meat_time_pick_up: new Date(),
      meat_temp_pick_up: "39",
      meat_time_drop_off: new Date(),
      meat_temp_drop_off: "45",
      produce_time_pick_up: new Date(),
      produce_temp_pick_up: "32",
      produce_time_drop_off: new Date(),
      produce_temp_drop_off: "38",
      time_pick_up: new Date(),
      updated_at: new Date(),
      last_updated_by: "Jerry"
    }
  ]
  let distributions = [
    {
      deliveryLocation : "402 North Fredericksburg St, San Marcos, TX 78676",
      deliveryDepartureTime : new Date(),
      deliveryWeights: [30, 34, 65, 0 , 23, 45, 76],
      projectedNumberOfClients : 483
    },
    {
      deliveryLocation : "1623 Treasure Folks Drive, San Marcos, TX 78666",
      deliveryDepartureTime : new Date(),
      deliveryWeights: [36, 34, 30, 55 , 55, 45, 76],
      projectedNumberOfClients : 567
    }
  ]
 
  // // Init data -> save to MySQL
  // const Customer = db.customers;
  // for (let i = 0; i < customers.length; i++) { 
  //   Customer.create(customers[i]);  
  // }

  const Rescue = db.rescues;
  const Distribution = db.distributions;
  for(let i = 0; i < rescues.length; i++)
    Rescue.create(rescues[i]);
  
  for(let i = 0; i < distributions.length; i++)
    Distribution.create(distributions[i]);
}
