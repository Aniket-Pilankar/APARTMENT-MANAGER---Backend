const express = require('express')
const router = express.Router()

const Flat = require('../models/Flat.model')

router.post('',async(req,res) => {
    try {
        const flat = await Flat.create(req.body);
        return res.send(flat)
        // const flat = await Flat.create(body);
        // return res.status(201).send(flat)
    } catch (error) {
        return res.send('error in flat controller :', error.message)
        
    }
})

router.get('',async(req,res) => {
    try {
        console.log('allget')
        const page = req.query.page || 1;
        const size = req.query.size || 5;
        // const flat = await Flat.find().populate({path:'resident_id'}).lean().exec();
        const flat = await Flat.find().skip((page - 1) * size).limit(size).populate({path:'resident_id'}).lean().exec();
        const totalPage = Math.ceil(await Flat.find().countDocuments() / size) 
        // return res.send(flat)
        return res.send({flat,totalPage})

    } catch (error) {
        return res.send('error in flat controller1 :', error)
        
    }
})
router.get('/:id',async(req,res) => {
    try {
        
        const flat = await Flat.findById(req.params.id).populate('resident_id').lean().exec();
        return res.send(flat)

    } catch (error) {
        return res.send('error in flat controller :', error)
        
    }
})
router.patch('/:id',async(req,res) => {
    try {
        
        const flat = await Flat.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('resident_id')
        return res.send(flat)

    } catch (error) {
        return res.send('error in flat controller :', error)
        
    }
})

router.delete('/:id',async(req,res) => {
    try {
        let flat = await Flat.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(flat)
    } catch (error) {
        return res.send('error in flat controller:',error)
    }
})

router.get('/sortBy/:val',async(req,res) => {
    try {
        // const value = req.query.sortValue || 1;
        // console.log('value23:', value)
        // // const flat = await Flat.find().sort({"BlockNo":value}).lean().exec()
        // // return res.send(flat)
        console.log(req.params.val)
        let value = req.params.val
        const flat = await Flat.find().sort({"BlockNo":value}).lean().exec()
        return res.send(flat)

    } catch (error) {
        return res.send('error in flat controller /sortBy:',error)
    }
})

module.exports = router