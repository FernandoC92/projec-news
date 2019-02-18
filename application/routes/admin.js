module.exports = (app) => {
    app.get('/form_add_news', (req, res) => {
        app.application.controllers.admin.form_add_news(app, req, res)
    })

    app.post('/add_news', (req, res) => {
        app.application.controllers.admin.save_news(app, req, res)
    })

    app.get('/form_edit_news', (req, res) => {
        app.application.controllers.admin.edit_news(app, req, res)
    })
    
    app.post('/save_alter', (req, res) => {
        app.application.controllers.admin.save_edit_news(app, req, res)
    })

    app.get('/delete_new', (req, res) => {
        app.application.controllers.admin.deleteNew(app, req, res)
    })
}