import jwt from "jsonwebtoken";


export const authMiddlerware = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        jwt.verify(token, process.env.JWT_TOKEN, (err, decode) => {
            if (err) {
                return res.status(200).send({ success: false, message: "authorization failed " });
            } else {
                res.body.userID = decode.indexOf;
                next();
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}