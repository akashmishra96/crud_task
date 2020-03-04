const mongoose=require('mongoose');


const conn = mongoose.connect ("mongodb://127.0.0.1:27017/db",{ useNewUrlParser:true },(err)=>{
if(!err) {console.log("Mongodb Connection Succeded")}
else{ console.log("Error in Connection:",err)}

});
