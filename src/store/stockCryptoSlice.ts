// store/stockCryptoSlice.ts
import { CRYPTOCURRENCIES, StockCrypto } from "@/app/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type StockCryptoState = {
  data: StockCrypto[];
  loading: boolean;
  coins: Record<string, StockCrypto>;
  selectedCoin: string;
  changeCoinModel: boolean;
};

const initialState: StockCryptoState = {
  data: [],
  loading: false,
  coins: CRYPTOCURRENCIES.reduce((acc, curr) => {
    acc = { ...acc, [curr.id]: curr };
    return acc;
  }, {}),
  changeCoinModel: false,
  selectedCoin: "BTC",
};

export const fetchStockCrypto = createAsyncThunk(
  "stockCrypto/fetchStockCrypto",
  async (symbol: string) => {
    const response = await axios.get(`/api/stockcrypto/${symbol}`);
    return response.data;
  }
);

const stockCryptoSlice = createSlice({
  name: "stockCrypto",
  initialState,
  reducers: {
    toggleModel: (state) => {
      state.changeCoinModel = !state.changeCoinModel;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    updateCoins: (state, action) => {
      state.coins = action.payload.reduce((acc: any, curr: any) => {
        acc = { ...acc, [curr.code]: { ...state.coins[curr.code], ...curr } };
        return acc;
      }, state.coins);
    },
    updateSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStockCrypto.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStockCrypto.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchStockCrypto.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { toggleModel, updateData, updateCoins, updateSelectedCoin } =
  stockCryptoSlice.actions;

export default stockCryptoSlice.reducer;
