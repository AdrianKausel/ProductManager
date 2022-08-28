const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/product/", ProductController.findAllProducts);
    app.put("/api/product/update/:id", ProductController.updateExistingProduct);
    app.get("/api/product/:id", ProductController.findOneSingleProduct);
    app.post("/api/product/", ProductController.createNewProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteAnExistingProduct);
};