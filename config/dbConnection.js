var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sql1724!',
        database: 'blog_news'
    });
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;
}
