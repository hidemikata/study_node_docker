//db処理を別のパケっケージとして書き出す。

const sqlite3 = require('sqlite3').verbose();

function createConnection() {
  return new sqlite3.Database(':memory:');
}
function createTable(db){
  return new Promise((resolve) =>{
    db.run('CREATE TABLE users (id INT, name TEXT)',
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
}

function insertData(db, data) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users (id, name) VALUES (?, ?)', [data.id, data.name],
        function(err) {
          if (err) reject(err);
          else resolve();
      });
  });
}

function selectData(db) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.error(err);
        reject(err)
      } else {
        console.log(rows);
        resolve();
      }
    });
  });
}

module.exports = {
  createConnection,
  createTable,
  insertData,
  selectData,
};

