import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  price: number;
  year: number;
  publisher: string;
  condition: string;
  binding: string;
  pages: number;
  isbn: string;
  category: string;
  edition: number;
  inStock: boolean;
  description?: string;
}

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Kirjan nimi vaaditaan"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Kirjailija vaaditaan"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Hinta vaaditaan"],
      min: 0,
    },
    year: {
      type: Number,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      enum: ["Uusi", "Käytetty", "Hyvä", "Tyydyttävä"],
      default: "Uusi",
    },
    binding: {
      type: String,
      enum: ["Sidottu", "Nidottu", "Pehmeäkantinen"],
      required: true,
    },
    pages: {
      type: Number,
      required: true,
      min: 1,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    edition: {
      type: Number,
      default: 1,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for common queries
bookSchema.index({ title: "text", author: "text" });
bookSchema.index({ isbn: 1 });
bookSchema.index({ category: 1 });

const Book = mongoose.models.Book || mongoose.model<IBook>("Book", bookSchema);

export default Book;
