const express = require("express");
const app = express();
const connection = require('./database-mysql/index')
const PORT = 4000;
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get('/', (req, res) => {
  res.send('complete step two');
});


// TODO - add additional route handlers as necessary

app.get('/api/menuItems',(req,res)=>{
  const sql=`SELECT * FROM recepie`
  connection.query (sql,(err,result)=>{
    if(err) res.status(500).send(err);
    res.send(result);
  })
})


app.post('/api/menuItems',(req, res)=>{
  const sql=`INSERT INTO recepie ?`
  console.log(req.body)
  const OneRecepie=req.body
  connection.query(sql,ELEMENT,(err,result)=>{
    if(err) res.status(500).send(err);
    res.status(201).send(result);
  })
})

app.put('/api/recepies/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE recipies SET user_Id=user_Id, username=name,email=email, password=password,recepie_Id=recepie_Id, Cook_Time=Cook_Time, Prep_Time=Prep_Time, recepie_Name=recepie_Name, Serves=Serves, categorie=categorie, recepie_Image=recepie_Image, recepie_Description=recepie_Description,recepie_Ingredients=recepie_Ingredients,users_user_Id , WHERE recipie_id='id'`;
  connection.query(sql, (err, result) => {
  if(err) res.status(500).send(err);
  res.status(200).send(result);
  })
  })

app.delete('/api/recepies/:id', (req, res) => {
    const id = req.params.recepie_Id;
    const sql = `DELETE FROM recepie WHERE recepie_id="id"`;
    connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



