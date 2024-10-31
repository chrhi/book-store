import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  catalog_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Catalog",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  feelings: [
    {
      id: Number,
      group: String,
      name: String,
      value: String,
      disabled: Boolean,
      emoji: String,
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  reactions: [
    {
      date: Date,
      reaction_id: Number,
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  review: String,
  suggestion: Boolean,
  subjects: [String],
  accepted: Date,
  created: {
    type: Date,
    required: true,
  },
  deleted: Date,
  published: Date,
  temp: mongoose.Schema.Types.Mixed,
  updated: [
    {
      date: Date,
      session_id: String,
      session_ip: String,
      _id: mongoose.Schema.Types.ObjectId,
    },
  ],
  user_nickname: String,
  target_groups: [
    {
      id: Number,
      group: String,
      name: String,
      value: String,
    },
  ],
  __v: Number,
});

export default mongoose.model("Review", reviewSchema);
