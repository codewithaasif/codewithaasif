const mongoose = require('mongoose')

const connnect = async(db)=>{     
    try{
     await mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true})
     console.log('database connnection successfully')
    }catch(error){
        console.log('error in database:' ,error.message)
    }
 }
module.exports = connnect;
