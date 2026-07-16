// loads config from config/app.env
const path=require('path');
module.exports=()=>require('dotenv').config({path:path.join(__dirname,'app.env')});