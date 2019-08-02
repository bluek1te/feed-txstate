module.exports = function(app) {
    const rescues = require('../controller/rescue.controller.js');

    //Create a new Rescue
    app.post('/api/rescues', rescues.create);

    //Get all rescues
    app.get('/api/rescues', rescues.findAll);

    //Update rescue given id
    app.put('/api/rescues', rescues.update);

    // Delete a rescue with Id
    app.delete('/api/customers/:id', rescues.delete);
}