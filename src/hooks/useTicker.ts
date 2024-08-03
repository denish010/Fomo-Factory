import { RootState } from "@/store";
import { updateCoins, updateData } from "@/store/stockCryptoSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io();

const useTicker = () => {
  const { data, coins, selectedCoin } = useSelector(
    (state: RootState) => state.stockCrypto
  );
  const dispatch = useDispatch();

  const fetchCoinData = async (coin: string) => {
    const data = await axios.get(`/api/stockcrypto/${coin}`);
    dispatch(updateData(data.data));
  };

  useEffect(() => {
    // dispatch(updateCoins(data));
    fetchCoinData(selectedCoin);
    socket.on("message", (data) => {
      dispatch(updateCoins(data));
      fetchCoinData(selectedCoin);
    });

    return () => {
      socket.off("message");
    };
  }, [selectedCoin]);

  return { data, coins, selectedCoin };
};

export default useTicker;
