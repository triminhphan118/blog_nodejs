class NewsController {
    // [GET] /
    home(req, res) {
        res.render('home');
    }
    // [GET] /searchq
    search(req, res) {
        res.render('search');
    }
}
const newsController = new NewsController();
export default newsController;
