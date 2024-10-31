import mongoose from "mongoose";

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    name_clean: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    type: {
      type: [String],
      required: true,
      enum: ["subject", "genre"],
      validate: {
        //@ts-expect-error the array don't have a type
        validator: function (array) {
          return array && array.length > 0;
        },
        message: "At least one type must be specified",
      },
    },

    original_names: {
      type: [String],
      required: true,
      validate: {
        //@ts-expect-error the array don't have a type
        validator: function (array) {
          return array && array.length > 0;
        },
        message: "At least one original name must be specified",
      },
    },

    created: {
      type: Date,
      required: true,
      default: Date.now,
    },

    updated: {
      type: Date,
      required: true,
      default: Date.now,
    },

    views: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    catalog_count: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
    collection: "subjects",
  }
);

// Indexes
subjectSchema.index({ name_clean: 1 });
subjectSchema.index({ slug: 1 }, { unique: true });
subjectSchema.index({ type: 1 });

// Pre-save middleware to ensure name_clean and slug are properly set
subjectSchema.pre("save", function (next) {
  if (this.name) {
    this.name_clean = this.name.toLowerCase().trim();
    this.slug = this.name_clean;
  }
  next();
});

// Virtual for getting the URL
subjectSchema.virtual("url").get(function () {
  return `/subjects/${this.slug}`;
});

// Instance method to increment views
subjectSchema.methods.incrementViews = function () {
  this.views += 1;
  return this.save();
};

// Static method to find by slug
subjectSchema.statics.findBySlug = function (slug) {
  return this.findOne({ slug: slug.toLowerCase() });
};

// Create and export the model
const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
