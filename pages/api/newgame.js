const mysql = require('mysql')

export default function handdler(req, res) {

	const { method, body } = req // ...zip

	if(method=== 'POST' && body) {

		addgame(body.uniqueId,body.user_id);
		res.json({message: 'data is updated'})

	}

} 

function addgame(uniqueId,user_id) {
	console.log(uniqueId)
	const db = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: process.env.PASSWORD, // .env.local
	  database: 'yomahoot',
	});
  
	db.connect((err) => {
	  if (err) {
		console.error('Error connecting to the database:', err);
		return;
	  }
  
	  const sql = 'INSERT INTO `games` (`uniqueId`,`created_by`) VALUES (?,?)';
	  const values = [uniqueId,user_id];
  
	  db.query(sql, values, (err, results) => {
		if (err) {
		  console.error('Error inserting message into the database:', err);
		} else {
		  console.log('Data inserted successfully');
		}
  
		db.end();
	  });
	});
  }