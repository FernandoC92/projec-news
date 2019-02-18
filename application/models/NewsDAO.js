class NewsDAO {
    constructor(connection) {
        this._connection = connection;
    }

    getNews(callback) {
        this._connection.query('select * from news order by date_post desc', callback)
    }

    getNew(id_new, callback) {
        this._connection.query(`select * from news where id_news = ${id_new.id_new}`, callback)
    }

    saveNews(news, id_new, callback) {
        if (id_new) {
            this._connection.query(`UPDATE news SET title = '${news.title}', summary = '${news.summary}', content = '${news.content}', author = '${news.author}' WHERE id_news = ${id_new.id_new}`, callback)
        } else {
            this._connection.query('INSERT INTO news SET ?', news, callback)
        }
    }


    deleteNew(id_new, callback) {
        this._connection.query(`DELETE FROM news WHERE id_news = ${id_new.id_new}`, callback)
    }
}

module.exports = ()=>{
    return NewsDAO
}