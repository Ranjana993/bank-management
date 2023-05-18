import userModel from "../Model.js/userModel.js";


export const addNewUser = async (req, res) => {
    try {
        const { name, fatherName, uidNumer, cifNumber, email, imgUrl, address, mobileNumber, accountNumber, state } = req.body;

        if (!(name && fatherName && uidNumer && cifNumber && email && address && mobileNumber && accountNumber && state)) {
            res.status(400).send({ success: false, message: "Plz fill all data " });
        }
        const existingUser = await userModel.findOne({ uidNumer });
        if (existingUser) {
            res.status(400).send({ success: false, message: "User already exist with this uid number " })
        }
        const newUser = new userModel({ name, fatherName, uidNumer, cifNumber, email, imgUrl, address, mobileNumber, accountNumber, state })
        await newUser.save();
        res.status(200).send({ success: true, message: " Successfully added newUser...", newUser })

    }
    catch (error) {
        res.status(500).send({ success: false, message: " error while adding newUser...", error })
    }
}

