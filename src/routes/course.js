const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.post('/course/store', courseController.store);
router.get('/course/create', courseController.create);
router.get('/course/:slug', courseController.show);
router.get('/course/:id/edit', courseController.edit);
router.put('/course/:id', courseController.update);
router.get('/', courseController.index);

module.exports = router;
