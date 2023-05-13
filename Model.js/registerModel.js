import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    memberID: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true })


const registerModel = mongoose.model("user-register", userSchema);
export default registerModel;