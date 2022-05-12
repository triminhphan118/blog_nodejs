class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('day la search slug');
    }
}
const newsController = new NewsController();
module.exports = newsController;
