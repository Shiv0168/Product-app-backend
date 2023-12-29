import { Product } from "../Model/product.model.js";

const addProduct = async (req, res) => {
  try {
    const newProduct = await new Product(req.body).save();
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

const editProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const editedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(201).json(editedProduct);
    } else {
      res
        .status(404)
        .json({ message: `No product found with id : ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const product = await Product.deleteOne({ _id: req.params.id });
      res.status(200).json(product);
    } else {
      res
        .status(404)
        .json({ message: `No product found with id : ${req.params.id}` });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  addProduct,
  getAllProduct,
  getProductById,
  editProductById,
  deleteProductById,
};
