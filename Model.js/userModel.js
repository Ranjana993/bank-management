import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    uidNumer: { type: String, required: true },
    cifNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    accountNumber: { type: String, required: true },
    state: { type: String },

}, { timeseries: true });


const userModel = mongoose.model("bank-user-model", userSchema);
export default userModel