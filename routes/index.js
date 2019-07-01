var express = require('express');
var router = express.Router();

let landed = require('../controllers/landed')

/* GET home page. */
router.get('/', landed.get_landed);
router.post('/', landed.submit_lead);
module.exports = router;
