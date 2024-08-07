const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    Name:{
        type:String,
     
    },
    Email:{
        type:String,
        require:true,
    },
    Password:{
        type:String,
        require:true,
    },
    
});
module.exports=mongoose.model("Userdata",UserSchema);