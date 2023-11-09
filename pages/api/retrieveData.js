// Backend
import { uniqueId } from '../../pages/bringgame';


const mysql = require('mysql');

export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    retrieveData(res);
  }
}

function retrieveData(res) {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'yomahoot',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }

    const sql = 'SELECT * FROM `div-game` WHERE `uniqueId` = ?';
    const values = [uniqueId]; // Replace uniqueId with the actual value you want to query.

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error retrieving data from the database:', err);
      } else {
        console.log('Data retrieved successfully');
        res.json(results); // Send the retrieved data as a JSON response.
      }

      db.end();
    });
  });
}
