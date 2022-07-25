const mongoose =require("mongoose");

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }   
    try {
        mongoose.connect(process.env.DB_NIV,connectionParams);
        console.log("connected to mongo");   
    } catch (error) {
        console.log(error);
        console.log("could not connect to mongo");
    }
}