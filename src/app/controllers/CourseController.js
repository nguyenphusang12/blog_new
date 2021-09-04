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

    // [POST]   /course/store
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/me/stored/courses');
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

    //[Delete]  /course/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[PATCH]  /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/course'))
            .catch(next);
    }

    //[Delete]  /course/:id/force
    deleteForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
