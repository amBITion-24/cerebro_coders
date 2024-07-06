import mongoose, { Schema } from "mongoose";

const policeStation = new Schema({
  policelocation: String,
  policename: String,
  policephone: String,
});
const policeStationModel = mongoose.model("policeStation", policeStation);
export default policeStationModel;
