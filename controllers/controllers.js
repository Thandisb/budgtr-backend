const express = require("express")
const router = express.Router();
const {v4 : uuidv4} = require("uuid")

let budgetModel = require("../models/models");


router.get("/", (req, res)=>{
    res.json(budgetModel)
})
router.use("/transaction/:id", (req, res)=>{
    const { id } = req.params

    const foundId = budgetModel.find((item)=>item.id === id)

    if(!foundId){
        res.redirect("/*")
    }else{
        res.json(foundId)
    }
    
})
router.post("/create-transaction",(req, res)=>{
    const newBudget = req.body;
    if(!newBudget){
        res
        .status(404)
        .json({status: false, message: "you can not create an empty transaction"})
    }else{
        budgetModel.push(newBudget)
        res.json(budgetModel)
    }
})
router.delete("/delete-item-by-id/:id",(req, res)=>{
     const {id} = req.params
     const choosenIndex = budgetModel.findIndex((item)=> item.id === id)

     if(choosenIndex === -1){
         res.status(404).json({status: false, message:"sorry, invalid id"})
     } else{
       let foundId = budgetModel[choosenIndex]

       let newId =  budgetModel.filter((item)=> item.id !== id)

       budgetModel = newId

       res.json({
        status: true,
        message: "success",
        data: foundId,
      })

        
     }
})

router.put("/update-item-by-id/:id",(req, res)=>{
    const id = req.params.id
     const choosenIndex = budgetModel.findIndex((item)=>item.id === id)

     if(choosenIndex === -1){
         res.redirect("/");
     }else{
       let foundId = budgetModel[choosenIndex]

       let newObj = {
        ...foundId,
        ...req.body
       }

        budgetModel.splice(choosenIndex, 1, newObj);
        res.json({ message: "success", status: true, data: newObj })

     }
})


module.exports = router