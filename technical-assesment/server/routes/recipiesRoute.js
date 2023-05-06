const express = require("express");

const router = express.Router();


router.get("/",);
router.get("/api/menuItems",getAll);
router.post("/api/menuItems",getAll);
router.put("/api/recepies/:id",getAll);
router.delete("/api/recepies/:id",getAll);


module.exports = router;


