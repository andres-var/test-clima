const { Router }      = require("express");
const { getClimates } = require("../controllers/climate");


const router = Router();

router.get( '/',  getClimates );

module.exports = router;