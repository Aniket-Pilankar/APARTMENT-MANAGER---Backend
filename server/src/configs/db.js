const mongoose = require('mongoose')
// apartmentManagement
const connect = () => {
    return mongoose.connect('mongodb+srv://apartmentManagement:apartmentManagement@cluster0.fyrz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

module.exports = connect