const expenseJSON = require("../data/expense.json")

exports.getExpense = (req, res, next) => {
  const expense = expenseJSON

  // BSON
  res.status(200).json({
    status: "success",
    data: {
      expense
    }
  })
}