//const { application } = require('express');
/*const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//route middleware
app.use('/api/user', authRoute);
app.listen(3000,() => console.log('Server Up and running'));*/
const express = require("express");
const app = express();
//const cors = require("cors");



app.use(express.json());
//app.use(cors());
//app.use(express.static(__dirname+"/fotoz"));
//require("./database/database");
const customerRouter = require("./routes/auth");
app.use(customerRouter);
// const productRouter = require("./router/productR");
// app.use(productRouter);

app.listen(90)
