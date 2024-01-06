import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
    time:String,
    startTime:String,
    endTime:String
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
