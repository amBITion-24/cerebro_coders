import mongoose, { Schema } from "mongoose";

const Driver = new Schema({
  location: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  phone: String,
});
const AmbulanceDriver = mongoose.model("drivers", Driver);
export default AmbulanceDriver;
