import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  alternative_titles: [String],
  antikvaari_group: Number,
  antikvaari_groups: [Number],
  antikvaari_products: [mongoose.Schema.Types.Mixed],
  author_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
  authors: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      kirjaverkko_id: Number,
      name: String,
      name_clean: String,
    },
  ],
  awards: [String],
  catalog_temp: Boolean,
  classifications: [
    {
      ykl: [String],
    },
  ],
  description: String,
  descriptions: [String],
  finna_ids: [String],
  format: String,
  general_notes: [String],
  genres: [String],
  images: [
    {
      host: String,
      path: String,
      url: String,
      c: String,
    },
  ],
  isbn_10: String,
  isbn_13: String,
  isbn_valid: Boolean,
  issn: String,
  kirjaverkko_class: String,
  kirjaverkko_id: Number,
  languages: [String],
  original_languages: [String],
  original_title: String,
  pages: String,
  playing_times: [String],
  presenters: [String],
  publisher: String,
  publisher_kirjaverkko_id: Number,
  series_id: mongoose.Schema.Types.ObjectId,
  series_kirjaverkko_id: Number,
  series_name: String,
  series_part: String,
  short_title: String,
  slug: String,
  subjects: [String],
  subtitle: String,
  title: String,
  titleStatement: String,
  udk: [String],
  year: String,
  ykl: [String],
  views: {
    type: Number,
    default: 0,
  },
  created: Date,
  deleted: Date,
  updated: Date,
  __v: Number,
  kirjaverkko_author_ids: [Number],
  z: Boolean,
  authors_original: [String],
  title_clean: String,
  binding: String,
  category: Number,
  groupsChecked: mongoose.Schema.Types.Mixed,
  oldData: [
    {
      category: String,
      antikvaari_groups: [Number],
      date: Date,
      updated: Date,
      updatedBy: String,
      ver: String,
    },
  ],
  publisher_clean: String,
  updatedBy: String,
  ver: String,
});

export default mongoose.model("Catalog", catalogSchema);