module.exports = (app) => {
    app.get('/content_new', (req, res) => {
        app.application.controllers.news.getNew(app, req, res)
    })
}