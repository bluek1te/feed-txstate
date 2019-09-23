const verifySignUp = require('./verifySignUp.route.js');
const authJwt = require('./verifyJwtToken.route.js');
 
module.exports = function (app) {
 
  const controller = require('../controller/user_role.controller.js');
 
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
 
  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
 
  app.post('/api/auth/signin', controller.signin);
 
  app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
 
  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
}