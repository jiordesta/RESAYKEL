import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  image: { type: String },
  price: { type: Number, default: 0 },
  seller: { type: mongoose.Types.ObjectId },
  category: { type: String, default: "any" },
});
export default mongoose.model("Product", ProductSchema);
