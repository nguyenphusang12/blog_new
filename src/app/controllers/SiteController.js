class SiteController {
    index(req, res) {
        res.render('home');
    }
    sang(req, res) {
        res.render('sang');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
