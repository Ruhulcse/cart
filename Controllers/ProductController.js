const asyncHandler = require("express-async-handler");
const Data = require("../Models/Products");


const addProduct = asyncHandler(async (req, res) => {
  const productData = new Data({
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    const createdData = await productData.save();
    res.status(201);
    res.json(createdData);
  } catch (error) {
    res.json({ message: error });
  }
});

const getProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Data.find({});
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Data.findById(req.params.id);
    if (product == null) {
      res.status(404);
      res.send("product not found");
    } else {
      res.json(car);
    }
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = {
  addProduct,
  getProduct,
  getSingleProduct
};