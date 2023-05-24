async function handleRequest(req, res) {

  const database = require('./database');
  const db = database.createConnection();
  await database.createTable(db);
  await database.insertData(db, { id: 1, name: 'John1' });
  await database.insertData(db, { id: 2, name: 'John2' });
  await database.insertData(db, { id: 3, name: 'John3' });
  database.selectData(db);
  db.close();

  const data = {
    message: 'Hello, World!'
  };

  res.status(200).json(data);
}
module.exports = handleRequest;
