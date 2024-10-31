import mongoose from "mongoose";
const Schema = mongoose.Schema;

const publicationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    name_clean: {
      type: String,
      trim: true,
      lowercase: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      default: "",
    },

    issn: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return !v || /^\d{4}-\d{4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid ISSN!`,
      },
    },

    issns: {
      type: [String],
      default: [],
      validate: {
        //@ts-expect-error the array don't have a type
        validator: function (array) {
          //@ts-expect-error the array don't have a type
          return array.every((issn) => /^\d{4}-\d{4}$/.test(issn));
        },
        message: "One or more ISSNs are invalid",
      },
    },

    languages: {
      type: [String],
      required: true,
      default: [],
    },

    subjects: {
      type: [String],
      default: [],
    },

    genres: {
      type: [String],
      default: [],
    },

    genres_main: {
      type: [String],
      default: [],
    },

    catalog: {
      type: [Schema.Types.Mixed],
      default: [],
    },

    parts: {
      type: [Schema.Types.Mixed],
      default: [],
    },

    kirjaverkko_id: {
      type: Number,
      required: true,
      unique: true,
    },

    kirjaverkko_upperseries_id: {
      type: Number,
      default: null,
    },

    upperseries_id: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: "Publication",
    },

    original: {
      type: String,
      default: "",
    },

    url: {
      type: String,
      default: "",
    },

    views: {
      type: Number,
      default: 0,
      min: 0,
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

    deleted: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
    collection: "publications",
  }
);

// Indexes
publicationSchema.index({ kirjaverkko_id: 1 }, { unique: true });
publicationSchema.index({ slug: 1 }, { unique: true });
publicationSchema.index({ name_clean: 1 });
publicationSchema.index({ subjects: 1 });
publicationSchema.index({ genres: 1 });
publicationSchema.index({ languages: 1 });
publicationSchema.index({ issn: 1 });
publicationSchema.index({ deleted: 1 });

// Pre-save middleware
publicationSchema.pre("save", function (next) {
  if (this.name) {
    // Generate name_clean if not provided
    if (!this.name_clean) {
      this.name_clean = this.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .trim();
    }
    // Generate slug if not provided
    if (!this.slug) {
      this.slug = this.name_clean.replace(/\s+/g, "-");
    }
  }
  next();
});

// Virtual for full URL
publicationSchema.virtual("fullUrl").get(function () {
  return `/publications/${this.slug}`;
});

// Instance Methods
publicationSchema.methods.incrementViews = function () {
  this.views += 1;
  return this.save();
};

publicationSchema.methods.softDelete = function () {
  this.deleted = new Date();
  return this.save();
};

// Static Methods
publicationSchema.statics.findByKirjaverkkoId = function (id) {
  return this.findOne({ kirjaverkko_id: id, deleted: null });
};

publicationSchema.statics.findBySlug = function (slug) {
  return this.findOne({ slug: slug.toLowerCase(), deleted: null });
};

publicationSchema.statics.findActive = function () {
  return this.find({ deleted: null });
};

// Query Helper
//@ts-expect-error the array don't have a type
publicationSchema.query.notDeleted = function () {
  //@ts-expect-error the array don't have a type
  return this.where({ deleted: null });
};

// Create and export the model
const Publication = mongoose.model("Publication", publicationSchema);
module.exports = Publication;
