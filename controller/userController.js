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


export const getAllUserList = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (!users) {
            res.status(400).send({ message: "something went wrong while(fetching users", success: false })
        }
        res.status(200).send({ success: true, message: "successfully getting user lsit ", users })
    } catch (error) {
        res.status(501).send({ success: false, message: "error  while getting all user list ", error })
    }
}

export const findSingleUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        if (!user) {
            res.status(401).send({ success: false, message: "User not found :( " });
        }
        res.status(200).send({ success: true, message: "successfully found user info ", user })
        console.log(user);

    } catch (error) {
        res.status(501).send({ success: false, message: "error  while getting single user list ", error })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({ success: true, message: "successfully updated", user })
    }
    catch (error) {
        return res.status(400).send({ message: "user not found ", success: false, error: error })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = await todoModal.findByIdAndDelete(req.params.id);
        if (data) {
            res.status(200).send({ message: "deleted", success: true })
        }
    } catch (error) {
        return res.status(400).send({ message: "not found", success: false, error: error })
    }
}