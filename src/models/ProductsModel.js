const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    ProductName: { type: String, required: true },
    ProductCode: { type: Number, required: true, unique: true },
    Img: { type: String },
    UnitPrice: { type: Number, default: 100 },
    Qty: { 
        type: Number, 
        validate: {
            validator: function(value){
                if(value.toString()===4){
                    return true
                }else{
                    return false
                }
            },
            message: "4 digit number is required"
        }
    },
    TotalPrice: { type: Number, required: true },
  },
  { versionKey: false, timeStamp: true }
);

const ProductsModel = mongoose.model("goods", DataSchema);
module.exports = ProductsModel;
