import registerModel from "../Model.js/registerModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const registerUser = async (req, res) => {
    try {
        const { name, email, memberID, password } = req.body;
        if (!(email && name && memberID && password)) {
            res.status(400).send({ success: false, message: "Plz enter all field..." });
        }
        const existingUser = await registerModel.findOne({ email })
        if (existingUser) {
            res.status(200).send({ success: false, message: "user already found with this email id plz login " })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new registerModel({ name, email, memberID, password: hashedPassword });
        await newUser.save();
        res.status(200).send({ success: true, message: "user login successfully ", newUser })
    }
    catch (error) {
        res.status(400).send({ success: false, message: "error while regisgtering user", error })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { memberID, password } = req.body;
        const user = await registerModel.findOne({ memberID });
        if (!user) {
            res.status(401).send({ success: false, message: "user Not found with this ID " });
        }
        const matchedPassword = await bcrypt.compare(password, user.password)
        if (!matchedPassword) {
            res.status(401).send({ success: false, message: "invalid memeberID or password" })
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN, { expiresIn: '2d' })
        // console.log(token);
        return res.status(200).send({ success: true, message: "login successfull"  , token})
    }
    catch (error) {
        res.status(500).send({ success: false, message: " error in login controller ", error })
    }
}






