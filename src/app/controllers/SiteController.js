const Course = require('../models/Course');
const toObject = require('../../util/mongoose');

class NewsController {
    // [GET] /
    home(req, res, next) {
        Course.find({}, (err, courses) => {
            // if(!err) {
            //     res.json(courses);
            //     return;
            // }
            // res.status(400).json({error : 'Error!!!'});

            Course.find({})
                .then((courses) =>
                    res.render('home', {
                        courses: toObject.mutilpleMongooseObject(courses),
                    }),
                )
                .catch(next);
        });
        //res.render('home');
    }
    // [GET] /searchq
    search(req, res) {
        res.render('search');
    }
}
const newsController = new NewsController();
module.exports = newsController;
