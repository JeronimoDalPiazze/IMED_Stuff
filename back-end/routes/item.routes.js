module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    // Create a new Item
    app.post("/Item", item.create);
  
    // Retrieve all item
    app.get("/Item", item.findAll);
  
    // Retrieve a single iten with itenId
    app.get("/Item/:itemId", item.findOne);
  
    // Update a iten with itenId
    app.put("/Item/:itemId", item.update);
  
    // Delete a iten with itenId
    app.delete("/Item/:itemId", item.delete);
  
  };