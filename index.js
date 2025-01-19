const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const users =[
    {id:1, name:'niahat', email:'nishat@gmail.com'},
    {id:1, name:'nahid', email:'nahid@gmail.com'},
    {id:1, name:'nafis', email:'nafis@gmail.com'}
]
app.get('/', (req, res) => {
    res.send('user management server is running')
})

app.get("/users", (req, res) => {
    res.send(users)
})


app.listen(port, ()=>{
    console.log(`survering is running port:${port}`)
})