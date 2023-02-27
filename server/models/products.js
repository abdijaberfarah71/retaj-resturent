const mongoose = require("mongoose");

const { Schema } = mongoose;


const productSchema = new Schema({
    name: {
        type : String ,
        required : true,
        min: 5,
        max:50,

    },
    price : {
        type : Number ,
        required : true 
    },
    slug : {
        type : String ,
        required : true,
        min :5,
        max : 50,

    },
    image : {
        type : String ,
        required :true 
    },
    brand: {
        type : String ,
        required : true,
        min : 3,
        max : 50
    },
    numberReview: {
        type:Number,
        required : true,

    },
    numberInStock: {
        type: Number,
        required : true,
        min: 0,
    },
    rating : {
        type : Number,
        
    },
    dateCreated : {
        type: Date ,
        default : Date.noww
    }
    
      



});


const Products = mongoose.model("Products", productSchema);


module.exports = Products ;