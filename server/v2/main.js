const express  = require('express');
const database  = require('../database_MYSQL.js');
let bodyParser = require('body-parser')
let multer  = require('multer')
let upload = multer({ dest: 'uploads/' })
const authentication = require("../authentication.js");

let router = express.Router();
router.use('/authentication',authentication);

//router.use(bodyParser.urlencoded({ extended: false }))
//router.use(bodyParser.json())

router.post('/uploadimage', upload.single('file'),function (req, res, next) {
  const pictures =   database.addImage(req.file);
  console.log(req.file);
  res.json({});
})


router.get('/getContent', function (req, res) {
  res.json({"content":database.getContentV2(),"text":database.getText()});
})

router.post('/text', function (req, res) {
  console.log(req.body);
  database.setText(req.body.text);
  res.sendStatus(200);
})

module.exports = router


function uploadPicture(req, res) {
    const retval =  database.uploadPicture(req.file);
    res.json(retval);
}

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
