const express  = require('express');
const database  = require('../database.js');
let bodyParser = require('body-parser')
let multer  = require('multer')
let upload = multer({ dest: 'uploads/' })

let router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('.hodingcell/hodingcell', upload.none(), function (req, res, next) {
  // req.body contains the text fields
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


async function uploadPicture(req, res) {
    const retval = await database.uploadPicture(req.file);
    res.json(retval);
}

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
