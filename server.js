import express from 'express'
import PageNotFound from './middleware/PageNotFound.js'

const app=express()

app.get('/',(req,res) => {
  res.send('Welcome from Server Side')
})

app.use(PageNotFound)

const PORT=process.env.PORT||5000


app.listen(PORT,()=>{
  console.log(`Server start on port ${PORT} `)
})