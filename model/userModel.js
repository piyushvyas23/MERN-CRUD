import mongosse from "mongoose";

const userSchema =new mongosse.Schema({

    fname:{
        type:String,
        required:true

    },
    lname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
     password:{
        type:String,
        required:true

    }
})

export default mongosse.model("User",userSchema);