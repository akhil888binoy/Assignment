import express from "express";
import { getFeedBooks, getUserBooks } from "../controllers/books.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedBooks);
router.get("/:userId/books", verifyToken, getUserBooks);

/* UPDATE */

export default router;
