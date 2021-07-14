const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    price: {
        type: String,
    },
    description: {
      type: String,
    },
    category: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);
const Data = mongoose.model("Product", dataSchema);

module.exports = Data