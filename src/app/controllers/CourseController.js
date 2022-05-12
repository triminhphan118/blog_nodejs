const Course = require('../models/Course');
const toObject = require('../../util/mongoose');
const { redirect } = require('express/lib/response');

class CourseController {
    // [GET] /course:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/detail', {
                    course: toObject.mongooseObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('course/create');
    }

    // [POST] /course/store
    store(req, res, next) {
        let formData = req.body;
        let random = Math.floor(Math.random() * 10);
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${random}.png`;
        const newCourse = new Course(formData);
        newCourse
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }
    // [GET] /course/edit/:id
    edit(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then((course) =>
                res.render('course/edit', {
                    course: toObject.mongooseObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /course/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /course/:id/restore
    patch(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
const courseController = new CourseController();
module.exports = courseController;
