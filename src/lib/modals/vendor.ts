import mongoose from "mongoose";

const { Schema } = mongoose;

const PasswordResetSchema = new Schema({
  token: String,
  created: Date,
  changed: Date,
});

const ReviewOrdersSchema = new Schema({
  rating: Number,
  count: Number,
  updated: Date,
});

const PaymentMethodSchema = new Schema({
  method: String,
  details: String,
  paymentTerm: Number,
  paymentService: String,
  status: Boolean,
  autoConfirm: Boolean,
});

const DeliveryMethodSchema = new Schema({
  method: String,
  details: String,
  cost: String,
  freeDeliveryLimit: String,
  status: Boolean,
});

const MessageTemplateSchema = new Schema({
  id: String,
  name: String,
  message: String,
  added: Date,
  modified: Date,
  deleted: Date,
});

const VendorSchema = new Schema(
  {
    status: Number,
    companyName: String,
    address: String,
    postalCode: String,
    city: String,
    country: String,
    phone: String,
    fax: String,
    mobile: String,
    businessId: String,
    registrationNumber: String,
    established: String,
    owner: String,
    email: String,
    website: String,
    date: Date,
    industry: String,
    about: String,
    deliveryInfo: String,
    announcement: String,
    announcementDate: Date,
    isAntiquarian: Boolean,
    openingHours: String,
    antiquarianId: Number,
    isLocked: Boolean,
    paymentMethods: [PaymentMethodSchema],
    deliveryMethods: [DeliveryMethodSchema],
    messageTemplates: [MessageTemplateSchema],
    orderConfirmation: String,
    orderReceived: String,
    showAddress: Boolean,
    showPhone: Boolean,
    isAntiquarianDealer: Boolean,
    isApiUser: Boolean,
    payeeName: String,
    commission: Number,
    productStatus: Boolean,
    bicCode: String,
    passwordReset: PasswordResetSchema,
    reviewOrders: ReviewOrdersSchema,
    views: Number,
    paymentMethodsUpdated: Date,
    deliveryMethodsUpdated: Date,
    vismaPayRequested: Boolean,
    vismaPayId: String,
    termsUpdated: Date,
    messagesUpdated: Date,
    registeredName: String,
    billingEmail: String,
    billingChannel: String,
    operatorId: String,
    eInvoiceAddress: String,
    infoUpdated: Date,
    vismaPayDisabled: Boolean,
    fennoaId: String,
    newCommission: Number,
    notes: String,
    vismaPayActivated: Date,
    holidayPeriod: Date,
    holidayStatus: Boolean,
    holidayStatusUpdated: Date,
    holidayMessage: String,
    holidaySet: Date,
    seasonalOrderDate: Date,
  },
  {
    timestamps: true,
  }
);

VendorSchema.index({ antiquarianId: 1 }, { unique: true });
VendorSchema.index({ email: 1 }, { unique: true });
VendorSchema.index({ businessId: 1 }, { unique: true });

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", VendorSchema);

export default Vendor;
