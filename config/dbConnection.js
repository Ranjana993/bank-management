import mongoose from "mongoose";


const url= `mongodb://localhost:27017/bank-managemanet`
const dbConnection = () => {
    try {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } )
        console.log("sucessfully connected ");
    } catch (error) {
        console.log("error while connecting db ...." ,error );
    }
}


export default dbConnection;