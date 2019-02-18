module.exports = (app) => {
    app.get('/', (req, res) => {
        app.application.controllers.home.index(app, req, res)
    })
}