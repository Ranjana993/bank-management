import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    uidNumer: { type: String, required: true, unique: true },
    cifNumber: { type: String, required: true },
    email: { type: String, required: true },
    imgUrl: { type: String },
    address: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    accountNumber: { type: String, required: true },
    state: { type: String },

}, { timestamps: true });


const userModel = mongoose.model("new-users", userSchema);
export default userModel