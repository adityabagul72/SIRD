const express = require('express');
const router = express.Router();

const {getAllMous}= require('../controllers/mou.controller.js')

router.get('/all-mous',getAllMous)

module.exports=router;