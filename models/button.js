import mongoose, { Schema } from "mongoose";

const buttonSchema = new Schema(
  {
    title: String,
    description:String,
    desc:String
  },
  {
    timestamps: true,
  }
);

const Button = mongoose.models.Button || mongoose.model("Button", buttonSchema);

export default Button;
