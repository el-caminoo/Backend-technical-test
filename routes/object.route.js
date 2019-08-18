const express = require('express');
const router = express.Router();

const object_controller = require('../controller/object.controller');

router.post('/create', object_controller.create);
router.put('/:id/remove', object_controller.update);

module.exports = router;
