const express = require('express');
const router = express.Router();
const pool = require('../db/db');

router.get('/getTodos', (req, res) => {
    pool.query(`SELECT * FROM Todos`, (err, rows) => {
        if(err) console.log(err);
        res.send(rows)
    })
});
router.post('/postTodos', (req, res) => {
  const newData = req.body;
  if (newData) {
      const values = [[ newData.id, newData.title, newData.completed, newData.dateStart, newData.dateEnd, newData.about]];
      console.log(values)
      const sql = 'INSERT INTO todos ( id, title, completed, dateStart, dateEnd, about) VALUES ?';

      pool.query(sql, [values], (err, result) => {
          if (err) {
              console.log(err);
              res.status(500).json({ message: 'Failed to insert data' });
          } else {
              res.status(200).json({ message: 'Data inserted successfully' });
          }
      });
  } else {
      res.status(400).json({ message: 'Invalid data provided' });
  }
});

router.post('/deleteTodos', (req, res) => {
    const id = req.body.id;
    if (id) {
        const sql = `DELETE FROM Todos WHERE Todos.id = ${id}`;
        pool.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Failed to insert data' });
            } else {
                res.status(200).json({ message: 'Data inserted successfully' });
            }
        });
    } else {
        res.status(400).json({ message: 'Invalid data provided' });
    }
  });

  router.post('/changeTodoAbout', (req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    console.log(text, id)
    if (id && text) {
        const sql = `UPDATE Todos SET about='aboba' WHERE id = 0`;
        pool.query(sql, (err, result) => {
            res.status(200).json({ message: 'Data updated successfully' });
            if (err) throw err
        });
    } else {
        //res.status(400).json({ message: 'Invalid data provided' });
    }
});


  
  
module.exports = router;