const express = require('express')
const router = express.Router();

const Resident = require('../models/Resident.model')

router.post('',async(req,res) => {
    try{
        const resident = await Resident.create(req.body);
        return res.send(resident)
    } catch(e){
        res.send(error.message)
    }
})


module.exports = router