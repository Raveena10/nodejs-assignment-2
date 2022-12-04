const mongoose = require("mongoose");

let mySchema = mongoose.Schema;

//define teacher schema
let teacherSchema = new mySchema({
    name: { type: String, required: [true, "Name is required.."] },
    gender: { type: String },
    email: { type: String },
    mobile: { type: String, max: 10 },
});

const tableName = "teacher";

let teacherData = mongoose.model(tableName, teacherSchema);

module.exports = teacherData;
