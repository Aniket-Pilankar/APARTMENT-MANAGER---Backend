const express = require('express');
const cors = require('cors')

const app = express();
const connect = require('./server/src/configs/db')
app.use(express.json())
app.use(cors())


const {register,login} = require('./server/src/controllers/auth.controller')

app.post('/register',register)
app.post('/login',login)

app.listen(4040, async() => {
    try {
        await connect();
        console.log('Listening to port 4040');
    } catch (error) {
        console.log('error:', error)
        
    }
})
