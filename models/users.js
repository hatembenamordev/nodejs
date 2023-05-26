const mysql = require('mysql2/promise');

class User {
  constructor() {
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejs',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async getAll() {
    const [rows] = await this.pool.execute('SELECT * FROM users');
    return rows;
  }

  async getById(id) {
    const [rows] = await this.pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async create(user) {
    const { name, email, password } = user;
    const [result] = await this.pool.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return result.insertId;
  }

  async update(id, user) {
    const { name, email, password } = user;

  }}