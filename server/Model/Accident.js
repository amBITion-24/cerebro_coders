import mongoose, { Schema } from "mongoose";

const AccidentSchema = new Schema(
  {
    location: String,
    intenstiy: String,
    isAmbulanceReq: Boolean,
    img: String,
  },
  { timestamps: true }
);
const Accident = mongoose.model("accidents", AccidentSchema);
export default Accident;
