module.exports.getNew = (app, req, res) => {
    let connection = app.config.dbConnection()
    let newsModel = new app.application.models.NewsDAO(connection)

    let id_new = req.query;

    newsModel.getNew(id_new, (error, result) => {
        res.render('news/new_content', {news : result})
    })

}