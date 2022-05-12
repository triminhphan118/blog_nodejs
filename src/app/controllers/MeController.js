const Course = require('../models/Course');
const toObject = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    stored_courses(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('me/stored_courses', {
                    course: toObject.mutilpleMongooseObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trash_courses(req, res, next) {
        Course.findDeleted({})
            .then((course) => {
                res.render('me/trash_courses', {
                    course: toObject.mutilpleMongooseObject(course),
                });
            })
            .catch(next);
    }
}
const meController = new MeController();
module.exports = meController;
