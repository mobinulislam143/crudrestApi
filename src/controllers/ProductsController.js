const ProductsModel=require('../models/ProductsModel');

// C=Create
exports.CreateProduct=async (req, res) => {


    /* let reqBody= req.body;
      ProductsModel.create(reqBody,(err,data)=>{
          if(err){
              res.status(400).json({status:"fail",data:err})
          }
          else{
              res.status(200).json({status:"success",data:data})
          }
      })
     */

    try {
        let reqBody = req.body;
        let result=await ProductsModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }

}

exports.insertProduct = (req, res) => {
    let reqBody = req.body
    ProductsModel.insertMany(reqBody, (err, data)=> {
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


// R=Read
exports.ReadProduct=async (req,res)=>{

    /*
    ProductsModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
     */


    try {
        let result=await ProductsModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }


}


// R=Read By ID
exports.ReadProductByID=async (req,res)=>{
    /*
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.find(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
    */

    try {
        let id= req.params.id;
        let result=await ProductsModel.find({_id:id});
        res.status(200).json({status:"success",data:result})

    }catch (err) {
        res.status(200).json({status:"fail",data:err.toString()})
    }

}


// D=Delete
exports.DeleteProduct=async (req,res)=>{
   /* let id= req.params.id;
    let Query={_id:id};
    ProductsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
    */
    try {
        let id= req.params.id;
        let result=await ProductsModel.remove({_id:id})
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}






// U=Update

exports.UpdateProduct=async (req,res)=>{

    /*let id= req.params.id;
   let Query={_id:id};
   let reqBody=req.body;
   ProductsModel.updateOne(Query,reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else{
           res.status(200).json({status:"success",data:data})
       }
   })

     */


    try {
        let id= req.params.id;
        let reqBody=req.body;
        let result=await ProductsModel.updateOne({_id:id},reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }




}




