import express from "express"
import { getFeedPosts, getUserPost, likePost, addComment } from "../controllers/postController.js"
import { verifyToken } from "../middleware/verifyAuth.js"

const router = express.Router()

/* Read */
router.get("/", verifyToken, getFeedPosts)
router.get("/:userId/posts", verifyToken, getUserPost)

/* Update */
router.patch("/:id/like", verifyToken, likePost)
router.patch("/:id/comment", verifyToken, addComment)

export default router

