const UserController=require('../controllers/user')
const express= require('express');
const router=express.Router();

router.get('/getuser', UserController.getuser)
router.post('/usercheck',UserController.usercheck)

module.exports=router;
