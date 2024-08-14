const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    address:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        // enum: ["employee", "admin"],
        // default: "employee",
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
