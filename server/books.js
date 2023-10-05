import express from "express";
import { getFeedBooks, getUserBooks, likeBooks } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedBooks);
router.get("/:userId/books", verifyToken, getUserBooks);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeBooks);

export default router;
