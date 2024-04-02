import { createUser, getAllUsers } from "../repositories/user.repository.js";
import { userSchema } from "../validations/user.validation.js";
import bcrypt from "bcrypt"

export const create = async (req, res) => {
    try {
        await userSchema.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 8);
        req.body.password = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getAll = async (req, res) =>{
    try {
        console.log("chegou no controller")
        const users = await getAllUsers();
        console.log(users)
        res.send(users)
    } catch (error) {
        console.log(error)
    }
}