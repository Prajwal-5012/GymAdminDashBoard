const mongoose = require("mongoose");

const customerSchem = new mongoose.Schema(
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
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("customer", customerSchem);

module.exports = Customer;
