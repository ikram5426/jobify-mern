import express from 'express'
import dotenv from 'dotenv'
import PageNotFound from './middleware/pageNotFound.js'
import errorHandler from './middleware/errorHandler.js'
import connectDb from './db/connect.js'

dotenv.config()
const app=express()
app.get('/',(req,res) => {
  res.send('Welcome from Server Side')
})

connectDb()

app.use(PageNotFound)
app.use(errorHandler)

const PORT=process.env.PORT||5001

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT} `);
});


