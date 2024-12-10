const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController"); 

router.post("/", classController.createClass); 
router.put("/:id", classController.updateClass);   
router.get("/:id", classController.getClassById);  
router.delete("/:id", classController.deleteClass); 

module.exports = router; 