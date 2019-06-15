import { Schema, model } from "mongoose";
import { isEmail, isEmpty } from "validator";

const User = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: v => isEmail(v),
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  }
});

export default model("User", User);
