const express = require('express');
const controller = require('./controller');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth.getToken, auth.verify, auth.isAdmin, controller.get);
router.post('/', auth.getToken, auth.verify, auth.isAdmin, controller.crear);

module.exports = router;
