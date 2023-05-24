function handleRequest(req, res) {

  const database = require('./database');
  const db = database.createConnection();
  database.createTable(db);
  //$B%F!<%V%k@8@.BT$A$r$7$J$$$H%@%a!#(Bpromise$B$G$4$K$g$k!#(B
  database.insertData(db, { id: 1, name: 'John' });
  database.selectData(db);
  db.close();

  const data = {
    message: 'Hello, World!'
  };

  res.status(200).json(data);
}
module.exports = handleRequest;
