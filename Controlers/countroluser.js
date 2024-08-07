const UserRouter=require("express").Router();
const bcrypt=require("bcrypt");
const saltRounds=10;
const Usermodels=require("../Models/Usermodels");

UserRouter.post("/Create",(req,res,next)=>{
    const user={
        ...req.body,
    };
    if(user.Password=bcrypt.hashSync(user.Password,saltRounds));
    
  const newUser=Usermodels(user);
  newUser
  .save()
  .then((response)=>{
    if(response._id){
        res.status(200).json({
            success:true,
            message:"account create successfully"
                });
    }
  })
  .catch((error)=>{
    res.status(500).json({
        success:false,
        message:"something went wrong",
        error:error,
    });
  });
  

});
UserRouter.post("/login",(req,res,next)=>{
    const{Email,Password}=req.body;
    Usermodels.findOne({Email:Email})
    .then((response)=>{
        if(response&&response._id){
            if(response.Password===Password){
                return res.status(200).json({
                    success:true,
                    message:"login successfull",
                });
            }else{
                return res.status(401).json({
                    success:true,
                    message:"email or password wrong",
                });
                }
                }else{
                    return res.status(200).json({
                        success:true,
                        message:"account does not exist kindly create your account",
                    });
                    }    
                });
            });
   module.exports=UserRouter;