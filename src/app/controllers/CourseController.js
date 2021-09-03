const Course = require('../models/Course.js');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    index(req, res, next) {
        Course.find({})
            .then((Courses) => {
                res.render('course/home', {
                    Courses: multipleMongooseToObject(Courses),
                });
            })
            .catch(next);
    }
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('course/create');
    }
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {});
    }

    //[Get]  /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('course/edit', { course: mongooseToObject(course) }),
            )
            .catch(next);
    }

    //[Put]  /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
