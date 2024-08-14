const jwt = require("jsonwebtoken");
const Employee = require("../Models/employee")
const {compareSync } = require("bcrypt");

const secret = "a8X5p7W2zK3L1q9V";

const creatTokenForUsers = (user)=>{
    const payload = {
        _id: user._id,
        fullName: user.fullName,
    };
    if(user.email){
        payload["email"] = user.email;
    }

    const token = jwt.sign(payload, secret)

    return token;
}

const validateUser = (token)=>{
    const payload = jwt.verify(token, secret);

    return payload;
}

const matchPasswordandGenerateToken = async(user)=>{
    const {email, password} = user;

    const myUser = await Employee.findOne({email});

    if(!myUser) throw new Error("User not found");

    if(!compareSync(password, myUser.password)){
        throw new Error("Password not matched!");
    }

    const token = creatTokenForUsers(myUser);

    return token;
}

module.exports = {
    creatTokenForUsers,
    validateUser,
    matchPasswordandGenerateToken,
};