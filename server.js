const express  = require ('express')
const dotenv  = require('dotenv')


const Ddata = require('./Defult.cjs')
const Product = require('./model/Product.cjs')
const bodyparser = require('body-parser')
const cors = require('cors')


// component 
 const connnect = require('./database/db.cjs')
const route = require('./routes/Routes.cjs')
dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000;


username  = process.env.db_username
password = process.env.db_password 

const db = `mongodb+srv://${username}:${password}@cluster0.od8mw.mongodb.net/learning?retryWrites=true&w=majority`

connnect(process.env.MONGODB_URI || db);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

    
app.listen(PORT, ()=>console.log(`the server is started on port ${PORT}`));
//save data in database

 Ddata()


 app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use('/', route)






 
 
 
    


