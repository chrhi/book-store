import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  awards: [String],
  catalog: [mongoose.Schema.Types.ObjectId],
  details: {
    firstname: String,
    lastname: String,
    fullname: String,
    born: Date,
    died: Date,
    nationality: String,
    description: String,
    fictional: Boolean,
    nonreal: mongoose.Schema.Types.Mixed,
  },
  genres: [String],
  images: [mongoose.Schema.Types.Mixed],
  kirjaverkko_id: Number,
  name: {
    type: String,
    required: true,
  },
  namesake: [String],
  roles: [String],
  slug: String,
  subjects: [String],
  views: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    required: true,
  },
  deleted: Date,
  updated: Date,
  __v: Number,
  name_clean: String,
  name_sort: String,
});

export default mongoose.model("Author", authorSchema);
