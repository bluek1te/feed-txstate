

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

const Role = db.role;
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

require('./app/route/rescue.route.js')(app);
require('./app/route/distribution.route.js')(app);
require('./app/route/verify.route.js')(app);


//require('./app/route/verifySignUp.route.js')(app);
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){

  Role.create({
    id: 1,
    name: "USER"
  });
 
  Role.create({
    id: 2,
    name: "ADMIN"
  });

 
  let rescues = [
    {
      store_name: "HEB",
      store_number: "#708",
      district: "Buda",
      location: "14411 RR 12, Wimberely Square, TX 78676",
      date: new Date(),
      food_name: "Bread",
      time_pick_up: new Date(),
      time_drop_off: new Date(),
      last_updated_by: 1,
    },
    {
      store_name: "Target",
      store_number: "#7453",
      district: "Hays County",
      location: "701 North Fredericksburg St, San Marcos, TX 78676",
      date: new Date(),
      food_name: "Meat",
      time_pick_up: new Date(),
      time_drop_off: new Date(),
      last_updated_by: 1,
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

  let users = [
    {
      name : "Phillip",
      username : "phpTran",
      email: "phpTran@earthlink.net",
      password: "powerProgrammer"
    }
  ]
 
  // // Init data -> save to MySQL
  const Rescue = db.rescues;
  const Distribution = db.distributions;
  const User = db.user;

  for(let i = 0; i < users.length; i++)
    User.create(users[i]);

  for(let i = 0; i < rescues.length; i++)
    Rescue.create(rescues[i]);
  
  for(let i = 0; i < distributions.length; i++)
    Distribution.create(distributions[i]);
}
