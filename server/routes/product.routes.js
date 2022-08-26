const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/product/", ProductController.findAllProducts);
    app.get("/api/product/:id", ProductController.findOneSingleProduct);
    app.put("/api/product/update/:id", ProductController.updateExistingProduct);
    app.post("/api/product/new", ProductController.createNewProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteAnExistingProduct);
};