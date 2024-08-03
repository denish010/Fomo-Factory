import mongoose from "mongoose";

const deltaSchema = new mongoose.Schema(
  {
    hour: { type: Number },
    day: { type: Number },
    week: { type: Number },
    month: { type: Number },
    quarter: { type: Number },
    year: { type: Number },
  },
  { _id: false }
);

const linksSchema = new mongoose.Schema(
  {
    website: { type: String, required: false },
    whitepaper: { type: String, required: false },
    twitter: { type: String, required: false },
    reddit: { type: String, required: false },
    telegram: { type: String, required: false },
    discord: { type: String, required: false },
    medium: { type: String, required: false },
    instagram: { type: String, required: false },
    tiktok: { type: String, required: false },
    youtube: { type: String, required: false },
    linkedin: { type: String, required: false },
    twitch: { type: String, required: false },
    spotify: { type: String, required: false },
    naver: { type: String, required: false },
    wechat: { type: String, required: false },
    soundcloud: { type: String, required: false },
  },
  { _id: false }
);

const coinsSchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  rank: { type: Number },
  age: { type: Number },
  color: { type: String },
  png32: { type: String },
  png64: { type: String },
  webp32: { type: String },
  webp64: { type: String },
  exchanges: { type: Number },
  markets: { type: Number },
  pairs: { type: Number },
  categories: { type: [String] },
  allTimeHighUSD: { type: Number },
  circulatingSupply: { type: Number },
  totalSupply: { type: Number },
  maxSupply: { type: Number },
  links: { type: linksSchema },
  code: { type: String },
  rate: { type: Number },
  volume: { type: Number },
  cap: { type: Number },
  delta: { type: deltaSchema },
  timestamp: { type: Date, default: Date.now },
});

const Coins = mongoose.models.Coins || mongoose.model("Coins", coinsSchema);

export default Coins;
