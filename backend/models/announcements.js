import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Announcement = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  timestamp: {
    type: Date
  }
});

export default mongoose.model("Announcement", Announcement);
