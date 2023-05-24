//db処理を別のパケっケージとして書き出す。

const sqlite3 = require('sqlite3').verbose();

function createConnection() {
  return new sqlite3.Database(':memory:');
}
function createTable(db){
  db.run('CREATE TABLE users (id INT, name TEXT)',
    function(err) {
      if (err) {
        console.log('error');
        console.error(err.message);
      } else {
        console.log('success');
        console.log('Table created successfully');
      }
    }

  );
}

function insertData(db, data) {
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [data.id, data.name]);
}

function selectData(db) {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.error("error");
        console.error(err);
      } else {
        console.log('success');
        console.log(rows);
      }
    });

}

module.exports = {
  createConnection,
  createTable,
  insertData,
  selectData,
};

