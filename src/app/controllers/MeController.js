const Course = require('../models/Course.js');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class MeController {
    //[Get]  /me/stored/courses
    meCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([course, count]) => {
                res.render('me/me-courses', {
                    course: multipleMongooseToObject(course),
                    count,
                });
            })
            .catch(next);
    }

    //[Get]  /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((course) =>
                res.render('me/trash-courses', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
