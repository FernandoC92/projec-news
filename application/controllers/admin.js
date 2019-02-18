module.exports.form_add_news = (app, req, res) => {
    res.render('admin/form-add-news', {validation : null, news : {}})
}


module.exports.save_news = (app, req, res) => {
    let news = req.body;
    req.assert('title', 'Titulo é obrigatorio!').notEmpty();
    req.assert('summary', 'Resumo é obrigatorio!').notEmpty();
    req.assert('summary', 'Resumo deve conter de 10 a 180 caracteres!').len(10, 180);
    req.assert('content', 'Conteudo é obrigatorio!').notEmpty();
    req.assert('author', 'Autor é obrigatorio!').notEmpty();
    req.assert('date_post', 'Data é obrigatorio').notEmpty()
    req.assert('date_post', 'Insira um formato de data valido!').isISO8601({format: 'YYYY-MM-D'})

   let errors = req.validationErrors();
   
   if (errors) {
        res.render('admin/form-add-news', {validation : errors, news})
        return
   }

    let connection = app.config.dbConnection();
    let newsModel = new app.application.models.NewsDAO(connection);
    newsModel.saveNews(news, null, (error, result) => {
        res.render('admin/save-sucessful')
    })
}

module.exports.save_edit_news = (app, req, res) => {
    let news = req.body;
    req.assert('title', 'Titulo é obrigatorio!').notEmpty();
    req.assert('summary', 'Resumo é obrigatorio!').notEmpty();
    req.assert('summary', 'Resumo deve conter de 10 a 180 caracteres!').len(10, 180);
    req.assert('content', 'Conteudo é obrigatorio!').notEmpty();
    req.assert('author', 'Autor é obrigatorio!').notEmpty();

   let errors = req.validationErrors();
  
   let id_new = req.query;

   if (errors) {
        res.render('admin/form-edit-errors', {validation : errors, news, id_new : id_new})
        console.log(id_new)
        return
   }

    let connection = app.config.dbConnection();
    let newsModel = new app.application.models.NewsDAO(connection);
    newsModel.saveNews(news, id_new, (error, result) => {
        console.log(error)
        res.render('admin/save-sucessful')
    })
}




module.exports.edit_news = (app, req, res) => {
    let connection = app.config.dbConnection();
    let newsModel = new app.application.models.NewsDAO(connection);
    let id_new = req.query;


    newsModel.getNew(id_new, (error, result) => {
        console.log(error)
        res.render('admin/form-edit-news', {news : result})
    })
}

module.exports.deleteNew = (app, req, res) => {
    let connection = app.config.dbConnection();
    let newsModel = new app.application.models.NewsDAO(connection);
    let id_new = req.query;

    newsModel.deleteNew(id_new, (error, result) => {
        console.log(error)
        res.render('admin/delete')
    })
}