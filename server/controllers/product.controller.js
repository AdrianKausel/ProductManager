const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ product: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne(req.params.id )
            .then(resp => {
                res.json({ 
                    product: resp,
                })
            }).catch(err => {
                res.json({ 
                    message: "Something went wrong", 
                    error: err 
                })
            });
};

module.exports.createNewProduct= (req, res) => {
    Product.create(req.body)
        .then(resp => {
            res.json({ 
                product: resp })})
        .catch(err => {
            res.json({ 
                message: "Something went wrong", error: err })});
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(req.params.id , req.body)
        .then(resp=> {
            res.json({ 
                product: req.product,
                error: false
            })
        }).catch(err => {
            res.json({ 
                message: "Something went wrong", 
                error: true
            })
            });
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
