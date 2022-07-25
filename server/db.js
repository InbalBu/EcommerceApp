const mongoose =require("mongoose");

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }   
    try {
        mongoose.connect("mongodb+srv://inbalniv22:123456789in@cluster0.ztjb8.mongodb.net/?retryWrites=true&w=majority",connectionParams);
        console.log("connected to mongo");   
    } catch (error) {
        console.log(error);
        console.log("could not connect to mongo");
    }
}