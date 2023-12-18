const express = require('express')
const mongoose = require ('mongoose')

const app = express();


app.get('/', (req, res) => {
    res.send('This is a test')
})

app.listen(3000, ()=> {
    console.log('Node API is running on port 3000')
})