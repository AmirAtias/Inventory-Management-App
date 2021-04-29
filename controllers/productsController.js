const Product = require('../models/product');
const ProductHistory = require('../models/productHistory');
require('dotenv').config();

exports.createProduct = async function (req, res) {
  try {
    let product = new Product();
    const { body } = req;
    product.name = body.name;
    product.description = body.description;
    product.supplierName = body.supplierName;
    product.priceUsd = body.usd;
    product.priceIls = body.ils;
    product.url = body.url;
    product.picture = body.picture;
    product.quantity = body.quantity;
    await product.save();
    let productHistory = new ProductHistory();
    productHistory.type = 'Insert';
    productHistory.product = product._id;
    productHistory.creationDate = Date.now();
    await productHistory.save();
    await Product.findOneAndUpdate({_id:product._id},{$push : {
      productHistory : productHistory._id
    }});

    res.status(200).json({ validationSuccess: 'true', message: 'success' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ validationSuccess: 'false', message: error.message });
  }
};


exports.getAllProducts = async function (req, res) {
  try {
    let products = await Product.find();
    res.status(200).json({ allProducts: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async function (req, res) {
  let productId = req.body.id;
  let quantity = req.body.quantity;
  const filter = { _id: productId };
  const update = { quantity: quantity };
  try {
    let doc = await Product.findOneAndUpdate(filter, update);
    let producthistory = new ProductHistory();
    producthistory.product = doc;
    producthistory.creationDate = Date.now();
    if (doc.quantity > quantity) {
      producthistory.type = 'Withdrawal ';
    } else {
      producthistory.type = 'Add';
    }
    await producthistory.save();
    await Product.findOneAndUpdate(
      { _id: productId },
      {
        $push: {
          productHistory: producthistory._id,
        },
      }
    );
    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProductsWithHistory = async function (req, res) {
  try {
    let products = await Product.find().populate({
      path: 'productHistory',
    });
    res.status(200).json({ allProducts: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
