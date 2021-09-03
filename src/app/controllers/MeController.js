const Course = require('../models/Course.js');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class MeController {
    //[Get]  /me/stored/courses
    meCourses(req, res, next) {
        Course.find({})
            .then((course) =>
                res.render('me/me-courses', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
