const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/wholeseller",async(req,res)=>{
    const data=req.body;
})

app.get("/test",async(req,res)=>{
    data={name:"rakib",age:24}
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})