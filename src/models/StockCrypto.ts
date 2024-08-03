import mongoose from "mongoose";

const deltaSchema = new mongoose.Schema(
  {
    hour: { type: Number, required: true },
    day: { type: Number, required: true },
    week: { type: Number, required: true },
    month: { type: Number, required: true },
    quarter: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  { _id: false }
);

const stockCryptoSchema = new mongoose.Schema({
  code: { type: String, required: true },
  rate: { type: Number, required: true },
  volume: { type: Number, required: true },
  cap: { type: Number, required: true },
  delta: { type: deltaSchema, required: true },
  timestamp: { type: Date, default: Date.now },
});

const StockCrypto =
  mongoose.models.StockCrypto ||
  mongoose.model("StockCrypto", stockCryptoSchema);

export default StockCrypto;
