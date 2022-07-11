const Course = require('../models/Course');
const { itemToObject } = require('../../utils/mongoose');

class CoursesController {
    // [GET] courses/:slug
    details(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/details', { course: itemToObject(course) }))
            .catch(next);
    }

    // [GET] courses/create
    create(req, res) {
        res.render('courses/create');
    }

    // [POST] courses/store
    store(req, res, next) {
        const formData = {
            ...req.body,
            image: `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`,
            slug: req.body.name.replace(' ', '-')
        };
        const course = new Course(formData);
        course
            .save()
            .then(result => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CoursesController();
