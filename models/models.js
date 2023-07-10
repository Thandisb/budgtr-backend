const { v4: uuidv4 } = require("uuid");

const budgetModel = [
    {
        id: uuidv4(),
        itemName: "Credit Card no 1",
        amount: -100,
        date: "August 1st",
        paymentFor: "Visa",
        category: "Credit Card"    
    },
    {
        id: uuidv4(),
        itemName: "Sephora",
        amount: -50,
        date: "August 2nd",
        paymentFor: "Sephora",
        category: "Bills"    
    }, {
        id: uuidv4(),
        itemName: "Student Loans",
        amount: -250,
        date: "August 4th",
        paymentFor: "Navient",
        category: "Bills"    
    }, {
        id: uuidv4(),
        itemName: "Spotify",
        amount: -10,
        date: "August 5th",
        paymentFor: "Spotify",
        category: "Bills"    
    }, 
    {
        id: uuidv4(),
        itemName: "Rent",
        amount: -800,
        date: "August 10th",
        paymentFor: "Rent",
        category: "Housing"    
    },
    {
        id: uuidv4(),
        itemName: "Credit Card no2",
        amount: -100,
        date: "August 15th",
        paymentFor: "Mastercard",
        category: "Credit Card"    
    },   {
        id: uuidv4(),
        itemName: "Phone",
        amount: -150,
        date: "August 20th",
        paymentFor: "Verizon",
        category: "Phone"    
    },   {
        id: uuidv4(),
        itemName: "Monthly Income",
        amount: 2000,
        date: "August 31th",
        paymentFor: "Employer",
        category: "Income"    
    },   {
        id: uuidv4(),
        itemName: "Groceries",
        amount: -400,
        date: "August 31th",
        paymentFor: "Supermarket",
        category: "Food"    
    }, 
]


module.exports = budgetModel