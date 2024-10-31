import { Schema, model } from 'mongoose';

const storeSchema = new Schema({
  tila: Number,
  ynimi: String,
  osoite: String,
  pno: String,
  ptp: String,
  maa: String,
  puh: String,
  faksi: String,
  matkapuh: String,
  lytunnus: String,
  regtunnus: String,
  perustettu: Date,
  omistaja: String,
  email: String,
  www_osoite: String,
  pvm: Date,
  toimiala: String,
  tietoa: String,
  toimitustieto: String,
  tiedote: String,
  tiedote_pvm: Date,
  antikvaariKauppias: Boolean,
  aukiolo: String,
  antikvaari_id: Number,
  lukittu: Boolean,
  maksutavat: [{
    maksutapa: String,
    tiedot: String,
    maksuehto: Number,
    maksupalvelu: String,
    tila: Boolean,
    autoVahvistus: Boolean
  }],
  tilausvahvistus: String,
  toimitustavat: [{
    toimitustapa: String,
    toimitustiedot: String,
    toimituskulut: String,
    ilmainenToimitus: String,
    tila: Boolean
  }],
  naytaOsoite: Boolean,
  naytaPuh: Boolean,
  tilausvastaanotettu: String,
  antikkaKauppias: Boolean,
  apiKayttaja: Boolean,
  maksunsaaja: String,
  provisio: Number,
  tuoteTila: Boolean,
  bic: String,
  salasanan_pal: {
    token: String,
    luotu: Date,
    vaihdettu: Date
  },
  views: Number,
  maksutavat_pvm: Date,
  toimitustavat_pvm: Date,
  visma_pay_requested: Boolean,
  visma_pay_id: String,
  ehdot_pvm: Date,
  viestit_pvm: Date,
  rekNimi: String,
  laskutusEmail: String,
  laskutusKanava: String,
  operaattoritunnus: String,
  verkkolaskuosoite: String,
  tiedot_pvm: Date,
  visma_pay_disabled: Boolean,
  fennoa_id: String,
  provisioUudet: Number,
  muistio: String,
  visma_pay_activated: Date,
  viestimallit: [{
    id: Schema.Types.ObjectId,
    nimi: String,
    viesti: String,
    lisatty: Date,
    muokattu: Date,
    poistettu: Date
  }],
  reviewOrders: {
    rating: Number,
    count: Number,
    updated: Date
  },
  lomaAika: Date,
  lomaTila: Boolean,
  lomaTila_pvm: Date,
  lomaViesti: String,
  lomaAsetettu: Date,
  sesonkiTilausPvm: Date
}, {
  timestamps: true,
  collection: 'stores'
});

const Store = model('Store', storeSchema);

export default Store;