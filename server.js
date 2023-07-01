const http = require("http");
const express = require('express');
const app = express();
const server = http.createServer(app);
const cors = require("cors");

app.use(cors());
app.use(cors(
  {
    origin:"http://localhost:3000"
  }
));



//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@expressapi.xdbept9.mongodb.net/',
 {
   useNewUrlParser:true, useUnifiedTopology:true
 }).then(()=>{
    console.log('Conexion succes !')
 }).catch((error)=>{
  console.log('error');
 });

 

//Import routes
const UserRouter = require("./api/User");
const productRoutes = require("./routes/product");
const driverRoutes = require("./routes/drivers");
const vehiculeRoutes = require("./routes/vehicule");
const pinRoutes = require("./routes/pins");
const rideinactifRoutes = require("./routes/rideinactifs");
const clientRoutes = require("./routes/clients");
const rideRoutes = require("./routes/rides");
const promoRoutes = require("./routes/promos");

//Middlewares
app.use(express.json());
app.use(cors());
// route middlewares
app.use("/api/products", productRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/vehicules", vehiculeRoutes);
app.use("/api/pins", pinRoutes);
app.use("/api/rideinactifs", rideinactifRoutes);
app.use("/api/rides", rideRoutes);
app.use("/api/promos", promoRoutes);
//
app.use('/user',UserRouter)

//Add file

app.post("/api/drivers/upload",(req,res)=>{
  setTimeout(()=>{
    console.log('file upload')
    return res.status(200).json({result:true,msg:'file upload'});
  },3000);
});
app.delete("/api/drivers/upload/",(res,req)=>{
   console.log('File deleted')
   return res.status(404).json({result:true,msg:'file deleted'});
});




server.listen(3010 , () =>{
console.log("Server is runing at localhost :3010 ");
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2l3YXIiLCJhZ2UiOjIzLCJpYXQiOjE2ODM4MDc5MDIsImV4cCI6MTY4MzgxMTUwMn0.mMozgEBbBVPqRBgInd1mxSvlGxJGXr8grYi-I-bh5jw
