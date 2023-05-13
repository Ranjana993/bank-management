import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv"
import dbConnection from "./config/dbConnection.js";


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
dotenv.config()
app.use(express.json());
app.use(express.urlencoded());

app.use("/" , router)

dbConnection()


app.get("/", (req, res) => {
    res.send("<h1> Welcome to home and testing route </h1>")
})



app.listen(PORT, () => console.log(`app is running on http://localhost:${PORT}/`))