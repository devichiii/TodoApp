import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

// Настройка CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Подключение к MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'todo_app'
});

// Проверка подключения
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Роуты API
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  db.query(
    'INSERT INTO todos (text, completed) VALUES (?, ?)',
    [text, 0],
    (err, result) => {
      if (err) {
        console.error('MySQL error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({
        id: result.insertId,
        text,
        completed: 0
      });
    }
  );
});

// ОБНОВЛЕННЫЙ РОУТ ДЛЯ PATCH
app.patch('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  const { text, completed } = req.body;
  const updates = [];
  const params = [];

  if (text !== undefined) {
    updates.push('text = ?');
    params.push(text);
  }
  if (completed !== undefined) {
    updates.push('completed = ?');
    params.push(completed ? 1 : 0);
  }

  if (updates.length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  params.push(id);
  const sql = `UPDATE todos SET ${updates.join(', ')} WHERE id = ?`;

  db.query(sql, params, (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({
      id,
      text: req.body.text || existingTask.text, // Сохраняем предыдущий текст если не передан
      completed: req.body.completed
});
  });
});

// НОВЫЙ РОУТ ДЛЯ DELETE
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).end();
  });
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});