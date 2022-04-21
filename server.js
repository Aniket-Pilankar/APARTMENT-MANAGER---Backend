require('dotenv').config()
const express = require('express');
const cors = require('cors')

const app = express();
const connect = require('./server/src/configs/db')
app.use(express.json())
app.use(cors())


const {register,login} = require('./server/src/controllers/auth.controller')
const residentController = require('./server/src/controllers/Resident.controller')
const flatController = require('./server/src/controllers/flat.controller')

app.post('/register',register)
app.post('/login',login)

app.use('/resident',residentController)
app.use('/flat',flatController)

// app.listen(4040, async() => {
app.listen(process.env.PORT || 4040, async() => {
    try {
        await connect();
        console.log('Listening to port 4040');
    } catch (error) {
        console.log('error:', error)
        
    }
})
