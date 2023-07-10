const express = require("express");
const morgan = require("morgan");
const cors = require("cors")


const budgetController = require("./controllers/controllers")


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.use("/transactions", budgetController)

app.get("/",(req,res)=>{
    res.send("budgeting project")
})
app.use("*", (req, res)=>{
    
    res.status(404).send("sorry, no page found")
})

module.exports = app;