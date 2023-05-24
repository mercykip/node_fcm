const fs =require("fs/promises");
const express =require("express");
const cors =require("cors");
const _ =require("lodash");
const {v4: uuid} = require("uuid");

const app = express();

app.post("/notification",(req,res)=>{
    

});
app.listen(3000, () => console.log("API server is running"));