const mongoose = require('mongoose')

const residentSchema = mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})

const Resident = mongoose.model('residentList',residentSchema);

module.exports = Resident