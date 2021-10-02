const express = require("express");
const expenseRouter = require("./routes/expenseRoute");

const app = express();

app.use("/api/v1/expenses", expenseRouter)

const PORT = 3000
app.listen(PORT, () => console.log("Expensio server started..."))