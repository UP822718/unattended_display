const express = require('express');
const GoogleAuth = require('simple-google-openid');
let router = express.Router();
const CLIENT = {id:"974090017649-324933ehmsbadsjosv338jpmplfau1b8.apps.googleusercontent.com"}
router.use(GoogleAuth(CLIENT.id));
router.use('/api', GoogleAuth.guardMiddleware());
router.use(GoogleAuth(CLIENT));
module.exports = router
