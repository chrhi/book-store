import mongoose, { Schema, Document } from "mongoose";

export interface IVendor extends Document {
  name: string;
  email: string;
  shopName: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

const vendorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a vendor name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    shopName: {
      type: String,
      required: [true, "Please provide a shop name"],
      unique: true,
      trim: true,
    },
    color: {
      type: String,
      default: "#000000",
      validate: {
        validator: function (v: string) {
          return /^#([0-9A-F]{3}){1,2}$/i.test(v);
        },
        message: "Please provide a valid hex color code",
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

vendorSchema.index({ email: 1 }, { unique: true });
vendorSchema.index({ shopName: 1 }, { unique: true });

const Vendor =
  mongoose.models.Vendor || mongoose.model<IVendor>("Vendor", vendorSchema);

export default Vendor;
