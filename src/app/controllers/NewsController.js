class NewsController {
    //[Get] /News
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewsController();
