import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

UserSchema.methods.encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

UserSchema.methods.matchPassword = async function (password) {
  const res = await bcrypt.compare(password, this.password);
  return res;
};

export const User = model("User", UserSchema);
