import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    myytyPvm: [Date],
    hakusanat: [String],
    tila: Boolean,
    nimi: String,
    tekija: String,
    paatuoteryhma: {
      type: String,
      ref: "ProductCategory",
    },
    myyntipaikka: String,
    tuotekoodi: String,
    kustantaja: String,
    isbn: String,
    y_id: Number,
    ynimi: String,
    ytila: Number,
    pvm: Date,
    hylly: String,
    sidonta: String,
    kunto: String,
    painovuosi: String,
    painos: String,
    muuta: String,
    hinta: Number,
    valuuttakoodi: String,
    maara: Number,
    kieli: String,
    sivum: String,
    kuvatieto: String,
    antikvaari_id: Number,
    tuoteryhma: {
      type: Number,
      ref: "ProductCategory",
    },
    op: String,
    catalog_suggestions: [Schema.Types.ObjectId],
    hintaHaku: Number,
    varasto: Schema.Types.ObjectId,
    kuvat: [
      {
        _id: Schema.Types.ObjectId,
        pos: Number,
        process_id: Schema.Types.ObjectId,
        file_domain: String,
        file_path: String,
        file_sm: String,
        file_md: String,
        file_lg: String,
        filename: String,
        filename_edit: String,
        filename_original: String,
        created: Date,
        edited: Date,
        resized: Date,
        deleted: Date,
      },
    ],
    old_data: [
      {
        kuvat: Array,
        lisaKuvat: Array,
        date: Date,
        asetukset: Schema.Types.Mixed,
        piilotettu: String,
        kategoria: Schema.Types.Mixed,
        tuoteryhmat: Schema.Types.Mixed,
        kustantajaHaku: String,
        nimiHaku: String,
        tekijaHaku: String,
        category: Schema.Types.Mixed,
        ver: String,
        tarkistettu: String,
      },
    ],
    asetukset: {
      tiedot_teokselta: Boolean,
    },
    category: {
      type: Number,
      ref: "MainCategory",
    },
    kategoria: {
      type: Number,
      ref: "MainCategory",
    },
    kustantajaHaku: String,
    nimiHaku: String,
    nimikeLisatiedot: String,
    piilotettu: Boolean,
    tarkistettu: Schema.Types.Mixed,
    tekijaHaku: String,
    tuoteryhmat: [
      {
        type: Number,
        ref: "ProductCategory",
      },
    ],
    ver: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes
bookSchema.index({ nimi: "text", tekija: "text", kustantaja: "text" });
bookSchema.index({ tuoteryhma: 1 });
bookSchema.index({ hinta: 1 });
bookSchema.index({ pvm: -1 });

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;
