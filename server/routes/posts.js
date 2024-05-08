const express=require("express")
const {getFeedPosts,getUserPosts,likePost}=require('../controllers/posts.js')
const { verifyToken } = require("../middleware/auth");

const router=express.Router();

/*READ*/
router.get("/",verifyToken,getFeedPosts)
router.get("/:userId/posts",verifyToken,getUserPosts)

/*UPDATE*/
router.patch("/:id/like",verifyToken,likePost)
/*The PATCH method is useful when you need to make small, incremental updates to a resource without affecting other parts of the resource.*/
module.exports=router