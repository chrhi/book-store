import mongoose, { Schema } from "mongoose";

const productCategorySchema = new Schema(
  {
    _id: Number,
    paatuoteryhma: String,
    nimi: String,
    kuvaus: Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

// Index for faster lookups
productCategorySchema.index({ paatuoteryhma: 1 });

const ProductCategory =
  mongoose.models.ProductCategory ||
  mongoose.model("ProductCategory", productCategorySchema);
export default ProductCategory;
