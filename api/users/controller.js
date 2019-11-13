const pool = require('../../util/pool');
const mqttClient = require('../../util/mqtt');

const controller = {};

controller.get = (req, res) => {
  pool.query(
    'select id_auth, display_name, user from security_auth where id_auth != 1',
    (error, result) => {
      if (error) {
        res.json({ error: true });
      } else {
        res.send(result);
      }
    },
  );
};

controller.crear = (req, res) => {
  const {
    username,
    ID,
    password,
    monto,
  } = req.body;

  const nombre = req.body.nombre.substr(0, 8);
  const apellido = req.body.apellido.substr(0, 8);

  pool.query(
    `insert into security_auth
    (display_name, user, unique_id, pass, balance)
    values
    (?, sha2(?, 256), ?, sha2(?, 256), ?)`,
    [`${nombre} ${apellido}`, username, ID, password, monto],
    (error, result) => {
      if (error) {
        res.json({ error: true });
      } else {
        res.send(result);
        mqttClient.emit('connect', () => {
          mqttClient.subscribe('outTopic');
          mqttClient.publish('inTopic', {
            nombre,
            apellido,
            id: ID,
            accion: 0,
          });
        });
      }
    },
  );
};

module.exports = controller;
