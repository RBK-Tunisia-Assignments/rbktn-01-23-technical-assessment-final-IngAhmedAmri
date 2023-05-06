const express = require("express");
const app = express();
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
  getAll.query (sql,(err,result)=>{
    if(err) res.status(500).send(err);
    res.send(result);
  })
})

/*
getAll.(req,res) =>{
  conn.getAll((res,result)=>{
    if(err) res.status(500).send(err);
    res.send(result);
  })
}
*/

app.post('/api/menuItems',(req, res)=>{
  const sql=`INSERT INTO recepie ?`
  console.log(req.body)
  const OneRecepie=req.body
  getAll.query(sql,ELEMENT,(err,result)=>{
    if(err) res.status(500).send(err);
    res.status(201).send(result);
  })
})


app.delete('/api/recepies/:id', (req, res) => {
    const id = req.params.recepie_Id;
    const sql = `DELETE FROM recepie WHERE recepie_id="id"`;
    getAll.query(sql, (err, result) => {
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



