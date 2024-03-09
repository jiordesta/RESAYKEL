import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";
import { BadRequestError } from "../utils/custom_errors.js";
import { uploadImage } from "../utils/file_handler.js";
import { count } from "../utils/CreateCounter.js";

export const create_product = async (req, res) => {
  const { name, desc, price, category } = req.body;
  const url = await uploadImage(req, `resaykel/products/${name}`);
  const { _id } = req.user;
  if (!url)
    throw new BadRequestError("There was an error in uploading the image");
  const product = await Product.create({
    name,
    desc,
    price,
    image: url,
    seller: _id,
    category,
  });
  if (!product) throw new BadRequestError("Error in creating product");
  await count("product");
  res.status(StatusCodes.OK).json("");
};

export const fetch_products = async (req, res) => {
  const { offset, limit } = req.params;
  const products = await Product.find({}); //improve later
  if (!products) throw new BadRequestError("Error in loading the data");
  res.status(StatusCodes.OK).json({ products });
};
