const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    }
})

const user = mongoose.model('user', userSchema)

// user.insertMany([
//     {name:'Rahul', email:'rahul@gmail.com'},
//     {name:'Rohit', email:'rohit@gmail.com'},
//     {name:'Anchal', email:'anchal@gmail.com'},
//     {name:'Riya', email:'riya@gmail.com'},
//     {name:'Raj', email:'raj@gmail.com'},
//     {name:'Avantika', email:'avantika@gmail.com'},
//     {name:'Girija', email:'girija@gmail.com'},
//     {name:'Rajesh', email:'rajesh@gmail.com'},
//     {name:'Puneet', email:'puneet@gmail.com'},
//     {name:'Rashmi', email:'rashmi@gmail.com'}
// ])

module.exports = user