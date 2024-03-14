import { Router } from "express";
import {
  create_product,
  fetch_products,
} from "../controllers/product_controller.js";
import { upload } from "../middlewares/multer.js";
import { authenticate } from "../middlewares/authenticate.js";
import { validate_create_product } from "../middlewares/input_validator.js";

const router = Router();

router
  .route("/create_product")
  .post(
    upload.single("image"),
    validate_create_product,
    authenticate,
    create_product
  );

router
  .route("/fetch_products/:category/:name")
  .get(upload.single(""), authenticate, fetch_products);

export default router;
