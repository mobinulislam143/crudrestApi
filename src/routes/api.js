const express =require('express');
const ProductsController=require("../controllers/ProductsController")
const jwtController = require('../controllers/jwtcontroller')
const tokenIssueController = require('../controllers/tokenIssueController')
const tokenVerifymiddleware = require('../middleware/tokenverifymiddleware')
const router =express.Router();

//  jwt encode decode........
router.get('/createToken', jwtController.createToken)
router.get('/decodeToken', jwtController.DecodeToken)

router.get('/tokenissue', tokenIssueController.TokenIssue)

// apply JWT Auth
router.post("/CreateProduct",ProductsController.CreateProduct);
router.get("/ReadProduct",tokenVerifymiddleware,ProductsController.ReadProduct);
router.post("/insertProduct",ProductsController.insertProduct);
router.get("/ReadProductByID/:id",ProductsController.ReadProductByID);
router.delete("/UpdateProduct/:id",ProductsController.UpdateProduct);
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);



module.exports=router;