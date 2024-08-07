const MenuRouter=require("express").Router();
const Menumodels=require("../Models/Menumodels");

MenuRouter.post("/Create",(req,res,next)=>{
 const Menu=req.body
    const newMenu=Menumodels(Menu);
    newMenu
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
        message:"server error",
        error:error.message
 });
})
 });
MenuRouter.get("/",(req,res,next)=>{
    try{
        res.status(200).json({
            message:"data fetched successfully",
            data
        })
    }catch(error){
        res.status(500).send({
            message:"server error",
            error:error.message
        })
    }
})

module.exports=MenuRouter;
    

