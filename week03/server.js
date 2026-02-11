import exp from 'express'
import { userApp } from './APIs/user.js'
import { productApp } from './APIs/product.js'


import cookieParser from 'cookie-parser'
import { connect } from 'mongoose'
  
const app = exp()

// function connectDB(){
//     connect('mongodb://localhost:27017')
//     .then(()=>console.log('connceted to database server'))
//     .catch((err)=>console.log('Error in connection to database'))
// }

async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragbd')
        console.log('connceted to database server')
        // app starts listening only after database connection is established
        app.listen(3000, () => { console.log("HTTP port running on 3000") })
    }
    catch (err) {
        console.log('Error in connection to database',err)
    }
}


connectDB();

// body passing middle ware
app.use(exp.json())
// app.listen(3000, () => { console.log("HTTP port running on 3000") })


app.use(cookieParser())
app.use('/user-api', userApp)


app.use('/product-api', productApp)





// error handling middle ware 
// this should be at end of server

// function errorHandler(err,req,res,next){
//     res.json({message:"error",reason:err.message})
// }
// app.use(errorHandler)

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})
