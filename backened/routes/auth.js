const express = require("express");
const Employee = require("../Models/employee");
const router = express.Router();
const {hashSync} = require("bcrypt")
const { matchPasswordandGenerateToken } = require("../Services/Authenthication");

router.post("/signup", async(req, res)=>{
    const {fullname, emailId, mobileNumber, address, role} = req.body;
    const password = hashSync(req.body.password, 10);

    try {
        await Employee.create({
            fullname,
            emailId,
            mobileNumber,
            address,
            role,
            password,
        })
        
        return res.status(200).json({
            status: "success",
            username: fullname,
        })
        
    } catch (error) {
        return res.status(400).json({status: "Failed to create the user"});
    }
})

router.post("/signin", async(req, res)=>{
    const {emailId, password} = req.body;

    try {
        const token = await matchPasswordandGenerateToken({emailId, password});
        
        return res.status(200).cookie("cookie", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        }).json({status: "Success"})
        
    } catch (error) {
        return res.status(400).json({status: "Failed to signin the user"})
    }

})

module.exports = router;