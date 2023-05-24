function handleRequest(req, res) {

  const database = require('./database');
  const db = database.createConnection();
  database.createTable(db);
  //テーブル生成待ちをしないとダメ。promiseでごにょる。
  database.insertData(db, { id: 1, name: 'John' });
  database.selectData(db);
  db.close();

  const data = {
    message: 'Hello, World!'
  };

  res.status(200).json(data);
}
module.exports = handleRequest;
