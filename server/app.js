//Library Imports
const cors=require('cors')
const express=require('express')
const app=express()
const mongoose=require('mongoose')

//Connection Data
const PORT=process.env.PORT||5000
const CONNECTION_URL='mongodb://localhost:27017/daintree'
// const CONNECTION_URL='mongodb+srv://jacksapera:lsY8V3rFbSUfpr3Z@cluster0.qadkz.mongodb.net/Daintree?retryWrites=true&w=majority'

//DB Connection
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})

//Utilites
app.use(cors())
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))

//Routes
const userRoutes=require('./routes/userRoutes')
const merchantRoutes=require('./routes/merchantRoutes')
const productRoutes=require('./routes/productRoutes')
const orderRoutes=require('./routes/orderRoutes')


app.use('/', userRoutes)
app.use('/', merchantRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)




app.get('/',(req, res)=>
{
    res.send('Hey')
})

app.listen(PORT, ()=>
{
    console.log("Daintree server up and running")
})