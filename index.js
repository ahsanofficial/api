const express = require("express")
const cors = require("cors")
const { userRouter } = require("./routes/user.routes")
const { notesRouter } = require("./routes/notes.routes")
const { connection } = require("./config/db")
const { authentication } = require("./middlewares/authentication")

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Home page")
})
app.use("/user", userRouter)
app.use("/notes", authentication, notesRouter)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to db")
    }
    catch (err) {
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})