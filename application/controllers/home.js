module.exports.index = (app, req, res) => {
  let connection = app.config.dbConnection();
  let newsModel = new app.application.models.NewsDAO(connection);

  newsModel.getNews((error, result) => {
      console.log(error)
      res.render('home/index', {news : result})
  })
}