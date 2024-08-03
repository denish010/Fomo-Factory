export const CRYPTOCURRENCIES = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTCBUSD",
    iconCode: 1,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://blockchair.com/bitcoin",
  },
  {
    id: "ETH",
    name: "Etherium",
    symbol: "ETHBUSD",
    iconCode: 1027,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://etherscan.io",
  },
  {
    id: "BNB",
    name: "BNB",
    symbol: "BNBBUSD",
    iconCode: 1839,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://bscscan.com",
  },
  {
    id: "DOGE",
    name: "Dogecoin",
    symbol: "DOGEBUSD",
    iconCode: 74,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://blockchair.com/dogecoin",
  },
  {
    id: "SHIB",
    name: "Shiba Inu",
    symbol: "SHIBBUSD",
    iconCode: 5994,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer:
      "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
  },
];

export type Crypto = {
  id: string;
  name: string;
  symbol: string;
  iconCode: number;
  price: number;
  prevPrice: number;
  highPrice: number;
  lowPrice: number;
  explorer: string;
};

export const COIN_CODES = CRYPTOCURRENCIES.map((crypto) => crypto.id);

export const COIN_OPTIONS = CRYPTOCURRENCIES.map((crypto) => {
  return { label: crypto.name, value: crypto.id, iconCode: crypto.iconCode };
});

type Delta = {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
};

type Links = {
  website: string | null;
  whitepaper: string | null;
  twitter: string | null;
  reddit: string | null;
  telegram: string | null;
  discord: string | null;
  medium: string | null;
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
  linkedin: string | null;
  twitch: string | null;
  spotify: string | null;
  naver: string | null;
  wechat: string | null;
  soundcloud: string | null;
};

export type StockCrypto = {
  id: string;
  iconCode: number;
  explorer: string;
  name: string;
  symbol: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  categories: string[];
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  links: Links;
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: Delta;
  timestamp?: Date;
};

export const sampleData = [
  {
    _id: "669491487287dc8ecefe120a",
    code: "ETH",
    rate: 3334.972679773713,
    volume: 10679065508,
    cap: 393632568216,
    delta: {
      hour: 1.0174,
      day: 1.0505,
      week: 1.1526,
      month: 0.9563,
      quarter: 1.0752,
      year: 1.7266,
    },
    timestamp: "2024-07-15T03:02:32.981Z",
    __v: 0,
  },
  {
    _id: "669491397287dc8ecefe11ec",
    code: "ETH",
    rate: 3335.5013387403246,
    volume: 10678661545,
    cap: 393694966744,
    delta: {
      hour: 1.0176,
      day: 1.0507,
      week: 1.1528,
      month: 0.9565,
      quarter: 1.0753,
      year: 1.7269,
    },
    timestamp: "2024-07-15T03:02:17.906Z",
    __v: 0,
  },
  {
    _id: "6694912c7287dc8ecefe11d0",
    code: "ETH",
    rate: 3335.5069731809813,
    volume: 10680404723,
    cap: 393695631787,
    delta: {
      hour: 1.0176,
      day: 1.0507,
      week: 1.1528,
      month: 0.9565,
      quarter: 1.0753,
      year: 1.7269,
    },
    timestamp: "2024-07-15T03:02:04.445Z",
    __v: 0,
  },
  {
    _id: "6694911c7287dc8ecefe11b4",
    code: "ETH",
    rate: 3335.550383741776,
    volume: 10680423982,
    cap: 393700755610,
    delta: {
      hour: 1.0176,
      day: 1.0507,
      week: 1.1528,
      month: 0.9565,
      quarter: 1.0754,
      year: 1.7269,
    },
    timestamp: "2024-07-15T03:01:48.080Z",
    __v: 0,
  },
  {
    _id: "6694910d7287dc8ecefe1196",
    code: "ETH",
    rate: 3336.128619975576,
    volume: 10677132041,
    cap: 393769005829,
    delta: {
      hour: 1.0178,
      day: 1.0509,
      week: 1.153,
      month: 0.9566,
      quarter: 1.0755,
      year: 1.7272,
    },
    timestamp: "2024-07-15T03:01:33.683Z",
    __v: 0,
  },
  {
    _id: "669490fe7287dc8ecefe117a",
    code: "ETH",
    rate: 3336.17950597474,
    volume: 10677501230,
    cap: 393775011991,
    delta: {
      hour: 1.0178,
      day: 1.0509,
      week: 1.153,
      month: 0.9567,
      quarter: 1.0756,
      year: 1.7272,
    },
    timestamp: "2024-07-15T03:01:18.435Z",
    __v: 0,
  },
  {
    _id: "669490f27287dc8ecefe115c",
    code: "ETH",
    rate: 3336.1781911111802,
    volume: 10678194716,
    cap: 393774856795,
    delta: {
      hour: 1.0178,
      day: 1.0509,
      week: 1.153,
      month: 0.9567,
      quarter: 1.0756,
      year: 1.7272,
    },
    timestamp: "2024-07-15T03:01:06.198Z",
    __v: 0,
  },
  {
    _id: "669490e07287dc8ecefe1140",
    code: "ETH",
    rate: 3336.446553466268,
    volume: 10680088910,
    cap: 393806532066,
    delta: {
      hour: 1.0179,
      day: 1.051,
      week: 1.1531,
      month: 0.9567,
      quarter: 1.0756,
      year: 1.7274,
    },
    timestamp: "2024-07-15T03:00:48.764Z",
    __v: 0,
  },
  {
    _id: "669490d07287dc8ecefe1123",
    code: "ETH",
    rate: 3337.925427307667,
    volume: 10684182678,
    cap: 393981086092,
    delta: {
      hour: 1.0175,
      day: 1.0528,
      week: 1.1534,
      month: 0.9564,
      quarter: 1.0754,
      year: 1.7275,
    },
    timestamp: "2024-07-15T03:00:32.623Z",
    __v: 0,
  },
  {
    _id: "669490c27287dc8ecefe1107",
    code: "ETH",
    rate: 3337.9736902102304,
    volume: 10686638896,
    cap: 393986782646,
    delta: {
      hour: 1.0176,
      day: 1.0528,
      week: 1.1534,
      month: 0.9565,
      quarter: 1.0754,
      year: 1.7275,
    },
    timestamp: "2024-07-15T03:00:18.476Z",
    __v: 0,
  },
  {
    _id: "669490b27287dc8ecefe10eb",
    code: "ETH",
    rate: 3338.0509969913837,
    volume: 10686718994,
    cap: 393995907298,
    delta: {
      hour: 1.0176,
      day: 1.0528,
      week: 1.1534,
      month: 0.9565,
      quarter: 1.0754,
      year: 1.7275,
    },
    timestamp: "2024-07-15T03:00:02.997Z",
    __v: 0,
  },
  {
    _id: "669490a57287dc8ecefe10cf",
    code: "ETH",
    rate: 3338.0509969913837,
    volume: 10686718994,
    cap: 393995907298,
    delta: {
      hour: 1.0176,
      day: 1.0528,
      week: 1.1534,
      month: 0.9565,
      quarter: 1.0754,
      year: 1.7275,
    },
    timestamp: "2024-07-15T02:59:49.932Z",
    __v: 0,
  },
  {
    _id: "669490957287dc8ecefe10b2",
    code: "ETH",
    rate: 3337.271602785721,
    volume: 10678235015,
    cap: 393903914058,
    delta: {
      hour: 1.0173,
      day: 1.0526,
      week: 1.1532,
      month: 0.9563,
      quarter: 1.0751,
      year: 1.7271,
    },
    timestamp: "2024-07-15T02:59:33.993Z",
    __v: 0,
  },
  {
    _id: "669490877287dc8ecefe1096",
    code: "ETH",
    rate: 3334.8572892558495,
    volume: 10651037864,
    cap: 393618948475,
    delta: {
      hour: 1.0166,
      day: 1.0518,
      week: 1.1523,
      month: 0.9556,
      quarter: 1.0744,
      year: 1.7259,
    },
    timestamp: "2024-07-15T02:59:19.040Z",
    __v: 0,
  },
  {
    _id: "669490797287dc8ecefe107a",
    code: "ETH",
    rate: 3334.857276551481,
    volume: 10652332933,
    cap: 393618946975,
    delta: {
      hour: 1.0166,
      day: 1.0518,
      week: 1.1523,
      month: 0.9556,
      quarter: 1.0744,
      year: 1.7259,
    },
    timestamp: "2024-07-15T02:59:05.269Z",
    __v: 0,
  },
  {
    _id: "669490687287dc8ecefe105a",
    code: "ETH",
    rate: 3334.6224455953998,
    volume: 10651977877,
    cap: 393591229473,
    delta: {
      hour: 1.0165,
      day: 1.0517,
      week: 1.1523,
      month: 0.9555,
      quarter: 1.0743,
      year: 1.7258,
    },
    timestamp: "2024-07-15T02:58:48.901Z",
    __v: 0,
  },
  {
    _id: "669490597287dc8ecefe103e",
    code: "ETH",
    rate: 3334.9747436326156,
    volume: 10648083840,
    cap: 393632811817,
    delta: {
      hour: 1.0166,
      day: 1.0518,
      week: 1.1524,
      month: 0.9556,
      quarter: 1.0744,
      year: 1.7259,
    },
    timestamp: "2024-07-15T02:58:33.732Z",
    __v: 0,
  },
  {
    _id: "669490497287dc8ecefe1022",
    code: "ETH",
    rate: 3336.0513050252284,
    volume: 10649209476,
    cap: 393759880212,
    delta: {
      hour: 1.017,
      day: 1.0522,
      week: 1.1527,
      month: 0.9559,
      quarter: 1.0747,
      year: 1.7265,
    },
    timestamp: "2024-07-15T02:58:17.954Z",
    __v: 0,
  },
  {
    _id: "6694903c7287dc8ecefe1006",
    code: "ETH",
    rate: 3336.066052389512,
    volume: 10650466930,
    cap: 393761620869,
    delta: {
      hour: 1.017,
      day: 1.0522,
      week: 1.1528,
      month: 0.9559,
      quarter: 1.0748,
      year: 1.7265,
    },
    timestamp: "2024-07-15T02:58:04.566Z",
    __v: 0,
  },
  {
    _id: "6694902c7287dc8ecefe0fea",
    code: "ETH",
    rate: 3336.116144462882,
    volume: 10639844407,
    cap: 393767533322,
    delta: {
      hour: 1.017,
      day: 1.0522,
      week: 1.1528,
      month: 0.9559,
      quarter: 1.0748,
      year: 1.7265,
    },
    timestamp: "2024-07-15T02:57:48.308Z",
    __v: 0,
  },
];
