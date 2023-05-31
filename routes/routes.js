import express from "express";
import { loginUser, registerUser } from "../controller/registerController.js";
import { addNewUser, findSingleUserById, getAllUserList, updateUser } from "../controller/userController.js";
// import { authMiddlerware } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/add-new-user", addNewUser);
router.get("/get-all-user", getAllUserList);
router.get("/get-single-user/:id" , findSingleUserById)
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);


export default router