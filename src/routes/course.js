const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/course/create', courseController.create);
router.get('/course/:slug', courseController.show);
router.get('/course/:id/edit', courseController.edit);
router.get('/', courseController.index);
router.post('/course/store', courseController.store);
router.put('/course/:id', courseController.update);
router.patch('/course/:id/restore', courseController.restore);
router.delete('/course/:id/force', courseController.deleteForce);
router.delete('/course/:id', courseController.delete);

module.exports = router;
