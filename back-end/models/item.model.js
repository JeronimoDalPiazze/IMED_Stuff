const sql = require("./db.js");

// constructor
const Item = function(item) {
  this.nome = item.nome;
  this.bloco = item.bloco;
  this.sala = item.sala;
  this.descricao = item.descricao;
  this.item_status = item.item_status;
  this.quantidade = item.quantidade;
};

Item.create = function(newItem, result) {
  sql.query("INSERT INTO itens SET ?", newItem, function(err, res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Item.findByName = function(itemName, result) {
  sql.query(`SELECT * FROM itens WHERE nome = ${itemName}`, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found item: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found item name
    result({ kind: "not_found" }, null);
  });
};

Item.getAll = result => {
  sql.query("SELECT * FROM itens", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("itens: ", res);
    result(null, res);
  });
};

Item.updateById = function(id, item, result) {
  sql.query(
    "UPDATE item SET nome = ?, bloco = ?, sala = ?, descricao = ?, item_status = ?, quantidade = ? WHERE id = ?",
    [item.nome, item.bloco, item.sala, item.descricao, item.item_status, item.quantidade, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated item: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

Item.remove = function(id, result) {
  sql.query("DELETE FROM itens WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found item with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted item with id: ", id);
    result(null, res);
  });
};

module.exports = Item;