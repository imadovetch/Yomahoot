// Backend //

import { Connecttomongodb} from ""

export default function handdler(req, res) {
  const { method, body } = req; // ...zip

  if (method === "POST" && body) {
    console.log(
      body.Question2,
      body.answer2,
      body.answer1,
      body.rightanswer_2,
      body.uniqueId
    );
    insertData_2(
      body.Question2,
      body.answer2,
      body.answer1,
      body.rightanswer_2,
      body.uniqueId
    );
    res.json({ message: "data is updated" });
  }
} //2147483647

function insertData_2(Question, answer2, answer1, rightanswer, uniqueId) {
  console.log(Question, answer2, answer1, rightanswer, uniqueId);

  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD, // .env.local
    database: "yomahoot",
  });

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    const sql =
      "INSERT INTO `div-game` (`uniqueId`, `question`, `answer1`, `answer2`, `rightanswer`, `format`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [uniqueId, Question, answer1, answer2, rightanswer, "2"];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error inserting message into the database:", err);
      } else {
        console.log("Data inserted successfully");
      }

      db.end();
    });
  });
}

function inserttomogodb2(data) {



}
