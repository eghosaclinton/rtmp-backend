import express from "express"
import router from "./routes/index"

const app = express()

const PORT = 3001

app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})