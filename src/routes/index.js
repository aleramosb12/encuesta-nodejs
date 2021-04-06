const express = require('express');
const router = express.Router();
const { Client} = require('pg');



router.get('/encustasunfvrml',(req,res) => {
    res.render('index')

})


module.exports = router;