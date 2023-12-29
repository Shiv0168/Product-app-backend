import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "product name required !!!"],
      unique: [true, "product name should be unique !!!"],
    },
    price: {
      type: Number,
      required: [true, "product price required !!!"],
    },
    description: {
      type: String,
      required: [true, "product description required !!!"],
    },
    image: {
      type: String,
      required: [true, "product image required !!!"],
      unique: [true, "product image should be unique !!!"],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
