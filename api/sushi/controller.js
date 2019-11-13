const sushiFactory = require('../../util/sushiFactory');

const controller = {};

controller.getSushiTypes = (req, res) => {
  sushiFactory.getTypes(res);
};

controller.create = (req, res) => {
  const { tipo } = req.body;
  sushiFactory.create(res, tipo);
};

controller.read = (req, res) => {
  sushiFactory.readAll(res);
};

controller.update = (req, res) => {
  const { id, nuevoTipo } = req.body;
  sushiFactory.update(res, id, nuevoTipo);
};

controller.delete = (req, res) => {
  const { id } = req.body;
  sushiFactory.delete(res, id);
};

module.exports = controller;
