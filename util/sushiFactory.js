const pool = require('./pool');

const sushiTypes = [{
  id: 0,
  nombre: 'California',
  salmon: 'ninguno',
  pepino: true,
  aguacate: true,
  queso: false,
}, {
  id: 1,
  nombre: 'Philadelphia',
  salmon: 'ahumado',
  pepino: true,
  aguacate: false,
  queso: true,
}, {
  id: 2,
  nombre: 'Alaska',
  salmon: 'crudo',
  pepino: true,
  aguacate: false,
  queso: true,
}];

const sushiFactory = {
  getTypes: (res) => {
    res.send(sushiTypes);
  },

  create: (res, tipo) => {
    const sushi = sushiTypes[tipo];
    pool.query(
      `insert into sushi (nombre, salmon, pepino, aguacate, queso) values
      (?, ?, ?, ?, ?)`,
      [sushi.nombre, sushi.salmon, sushi.pepino, sushi.aguacate, sushi.queso],
      (error, result) => {
        if (error) {
          console.error(error);
          res.send({ error: true });
        } else {
          res.send(result);
        }
      },
    );
  },

  readAll: (res) => {
    pool.query(
      'select id, nombre, salmon, pepino, aguacate, queso from sushi',
      (error, result) => {
        if (error) {
          console.error(error);
          res.send([]);
        } else {
          res.send(result);
        }
      },
    );
  },

  update: (res, id, nuevoTipo) => {
    const sushiNuevo = sushiTypes[nuevoTipo];

    pool.query(
      'update sushi set nombre = ?, salmon = ?, pepino = ?, aguacate = ?, queso = ? where id = ?',
      [sushiNuevo.nombre, sushiNuevo.salmon, sushiNuevo.pepino, sushiNuevo.aguacate, sushiNuevo.queso, id],
      (error, result) => {
        if (error) {
          console.error(error);
          res.send({ error: true });
        } else {
          res.send(result);
        }
      }
    );
  },

  delete: (res, id) => {
    pool.query(
      'delete from sushi where id = ?',
      [id],
      (error, result) => {
        if (error) {
          console.error(error);
          res.send([]);
        } else {
          res.send(result);
        }
      }
    );
  },
};

module.exports = sushiFactory;
