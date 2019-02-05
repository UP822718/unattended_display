const express  = require('express');
const database  = require('../database.js');
let bodyParser = require('body-parser')

let router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/getContent', function (req, res) {
  res.json({"content":database.getContentV1(),"text":database.getText()});
})
router.post('/imageUpload', function (req, res) {
  res.json({"content":database.getContentV1(),"text":database.getText()});
})


router.post('/text', function (req, res) {
  console.log(req.body);
  database.setText(req.body.text);
  res.sendStatus(200);
})
module.exports = router
