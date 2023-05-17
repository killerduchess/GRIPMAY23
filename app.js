// require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const multer = require('multer')
const user = require('./models/user')

mongoose.connect('mongodb://localhost:27017/spark', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> {
    console.log('mongo connection open!')
})
.catch(err =>{
    console.log('mongo connection error!')
    console.log(err)
})

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static("public"))
app.use(express.static('images'))

//listening to the port
app.listen(3000, () => {
    console.log('app is listening on port 3000')
})

const transactions = []

//home page
app.get('/spark', (req, res) => {
    res.render('home')
})

//view all transactions
app.get('/spark/transactions', (req, res) => {
    const n = transactions.length
    res.render('transactions', {transactions,n})
})

//transfer money
app.post('/spark', async (req, res) => {
    const {from, to, amount} = req.body
    const fromUser = await user.find({name:from})
    const toUser = await user.find({name:to})
    transactions.push({from:fromUser[0].name, to:toUser[0].name, amount:amount})
    res.redirect('/spark/transactions')
})