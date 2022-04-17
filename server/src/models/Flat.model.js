const mongoose = require('mongoose')

const flatSchema = mongoose.Schema({
    ownerType:{type:String,required:true},
    Block:{type:String,required:true},
    BlockNo:{type:Number,required:true},
    resident_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'residentList',
    }]
},{
    versionKey:false,
    timestamps:true
})

const Flat = mongoose.model('flatList',flatSchema);

module.exports = Flat