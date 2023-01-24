const express = require("express");
const router = express.Router();




//=================== HOME ENDPOINT ==============================
router.get('/', (req,res)=>{
    res.render('home');

});

//=================== LOGIN ENDPOINT ==============================

//=================== POST ENDPOINT ===============================

//=================== NEWSLETTER ENDPOINT =========================
module.exports = router;