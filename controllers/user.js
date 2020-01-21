const User=require('../models/user')
const UserController={};


UserController.getuser=async (req,res,next)=>{
var users = await User.find({})
if (users) {
  res.status(200).json({"data":users})
}
}

UserController.usercheck= async (req,res,next)=>{
  console.log(req.body)
  const newuser=new User(
    { name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      password:req.body.password,
      status:'Inactive'
    });

  const saveUser=await newuser.save()
  if(saveUser){
  res.send({status:true,data:saveUser})
}
}
module.exports=UserController;
