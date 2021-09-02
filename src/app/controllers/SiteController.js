const Course = require('../models/Course.js')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    index(req, res, next) {

        Course.find({})
            .then(Courses => {
                res.render('home', {
                    Courses: multipleMongooseToObject(Courses)
                });
            })
            .catch(next);

        // res.render('home');
    }
    sang(req, res) {
        res.render('sang');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();