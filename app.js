// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');
const path= require('path');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
app.use(express.static('client/build'));

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
mongoose.set('strictQuery', false);

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


app.use("/api",router)

// Mongo DB Database Connection
let URI="mongodb+srv://mobinulislam:8NWFTTL3vZqC2W0L@cluster0.mskd8ua.mongodb.net/";

mongoose.connect(URI, {
    useNewUrlParser: true,
        useUnifiedTopology: true,

})
.then(()=> {
    app.listen(5050, () => {
        console.log(`Mongoose is connected`)
        console.log(`Server is Running`)
      })
}).catch(e => {
    console.log(e)
})

















