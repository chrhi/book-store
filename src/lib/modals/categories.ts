import mongoose, { Schema } from "mongoose";

const mainCategorySchema = new Schema(
  {
    _id: Number,
    description: {
      fi: String,
    },
    description_short: {
      fi: String,
    },
    images: {
      embeded: String,
      hero_lg: String,
      hero_sm: String,
    },
    label: {
      fi: String,
    },
    pos: Number,
    properties: {
      ykl_additional_classes: [String],
      ykl: [String],
      udk: [String],
      legacy_groups: [String],
      other: [String],
      subjects: [String],
      subjects_clean: [String],
    },
    related_category: {
      type: Number,
      ref: "MainCategory",
      default: null,
    },
    slug_fi: String,
    tier: Number,
    title: {
      fi: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
mainCategorySchema.index({ slug_fi: 1 });
mainCategorySchema.index({ "title.fi": "text", "description.fi": "text" });

const MainCategory =
  mongoose.models.MainCategory ||
  mongoose.model("MainCategory", mainCategorySchema);
export default MainCategory;
