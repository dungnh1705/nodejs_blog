const Course = require('../models/Course');
const { listToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', { courses: listToObject(courses) }))
            .catch(next);
    }
}

module.exports = new MeController();
