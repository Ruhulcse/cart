const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProduct,
  getSingleProduct,
} = require("../Controllers/ProductController");

router.route("/").post(addProduct).get(getProduct);
router.route("/:id").get(getSingleProduct);

module.exports = router;