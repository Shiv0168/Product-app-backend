import { Router } from "express";
import {
  addProduct,
  deleteProductById,
  editProductById,
  getAllProduct,
  getProductById,
} from "../Controllers/product.controller.js";

const router = Router();

router.route("/").post(addProduct).get(getAllProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(editProductById)
  .delete(deleteProductById);
export default router;
