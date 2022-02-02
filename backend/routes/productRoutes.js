import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

//slim downed the routes for sure
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
