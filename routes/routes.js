import express from "express";
import { loginUser, registerUser } from "../controller/registerController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
// router.get("/get-all-user", allUserList);
// router.put("/update-user", updateUser);
// router.delete("/delete-user", deletUser);


export default router