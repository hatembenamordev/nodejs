const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
    
    connection.query('SELECT * FROM users', (err, rows) => {
      if (err) throw err;
      console.log('Data received from MySQL:\n');
      console.log(rows);
      connection.end();
    });
  });