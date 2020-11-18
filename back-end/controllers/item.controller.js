const Item = require("../models/item.model.js");

// Create and Save a new Iten
exports.create = function(req, res) {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Item
    const Item = new Item({
        nome: req.body.nome,
        bloco: req.body.bloco,
        item: req.body.item,
        sala: req.body.sala,
        descricao: req.body.descricao,
        item_status: req.body.item_status,
        quantidade: req.body.quantidade
    });

    // Save Customer in the database
    Customer.create(customer, function(err, data) {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Iten."
      });
      else res.send(data);
  });
};

// Retrieve all Itens from the database.
exports.findAll = function(req, res) {
  Item.getAll( function(err, data) {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Iten with a itenId
exports.findOne = function(req, res) {
  Item.findByName(req.params.itemName, function(err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with Name ${req.params.itemName}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Item with name " + req.params.itemName
        });
      }
    } else res.send(data);
  });
};

// Update a Iten identified by the itenName and sala e bloco in the request
exports.update = function(req, res) {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Item.updateById(
    req.params.itemId,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Item with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Item with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a iten with the specified itenId in the request
exports.delete = function(req, res) {
  Item.remove(req.params.itemId, function(err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.itemId
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};
