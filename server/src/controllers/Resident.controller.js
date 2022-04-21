const express = require('express')
const router = express.Router();

const Resident = require('../models/Resident.model')

router.post('',async(req,res) => {
    try{
        const resident = await Resident.create(req.body);
        return res.send(resident)
    } catch(e){
        return res.send(error.message)
    }
})

router.get('', async(req,res) => {
    try {
        const resident = await Resident.find().lean().exec()
        return res.send(resident)
    } catch (error) {
        return res.send('error in resident Controller',error.message)
    }
})


module.exports = router