import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import userApp from "./API's/userAPI.js"
import authorApp from "./API's/authorApI.js"
import { adminRouter } from "./API's/adminApi.js"

config() //process.env access


const app = exp()
//add body parser middleware
app.use(exp.json())

// connect APIs
app.use("/users-api", userApp)
app.use("/articles", authorApp)
app.use("/admin", adminRouter)

//connect to the database
const connectDB =async() => {
try{
 await connect(process.env.DB_URL)
 console.log("DB connection successful")
 app.listen(process.env.PORT , () => console.log("server connected"))
}catch(err){
    console.log("DB connection failed")
}
}
connectDB()

//error handling middleware
app.use((err, req, res, next) => {
    console.log("err: ", err)
    res.status(500).json({message:"error",reason: err.message})
})

    
