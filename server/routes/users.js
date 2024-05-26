const express=require("express")
const {getUser,getUserFriends,addRemoveFriend} =require('../controllers/users.js')
const {verifyToken}=require("../middleware/auth.js")
const router=express.Router();
//READ

router.get("/:id",getUser)
router.get("/:id",getUserFriends)
//UPDATE
router.get("/:id",addRemoveFriend)
module.exports=router