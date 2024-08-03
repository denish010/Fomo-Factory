// components/TopDrawer.js
import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AppDispatch, RootState } from "@/store";
import { toggleModel, updateSelectedCoin } from "@/store/stockCryptoSlice";
import { enableScroll } from "@/utils/comon";
import { useDispatch, useSelector } from "react-redux";
import { COIN_OPTIONS } from "../config";
import Image from "next/image";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    height: "auto",
    width: "100%",
    top: 0,
    borderRadius: "0 0 8px 8px",
    boxShadow: theme.shadows[5],
  },
}));

const TopDrawer = () => {
  const { loading, changeCoinModel } = useSelector(
    (state: RootState) => state.stockCrypto
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleModelClose = (value: string) => {
    dispatch(updateSelectedCoin(value));
    dispatch(toggleModel());
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <StyledDrawer anchor="top" open={changeCoinModel}>
        <Box role="presentation" sx={{ padding: 2 }}>
            
          <div className="text-[#222222] capitalize font-bold mb-4">
            select crypto
          </div>


          <div className="grid grid-cols-3 gap-4">
            {COIN_OPTIONS.map(({ label, value, iconCode }, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-white border border-transparent hover:border-[#222222] transition-all duration-300 rounded-md text-[#222222] p-4 h-24 justify-center flex items-center shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_2px_6px_2px] flex-col"
                onClick={() => {
                  handleModelClose(value);
                }}
              >
                <Image
                  className="w-10 h-10 mb-2 rounded-full"
                  src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${iconCode}.png`}
                  alt={`${iconCode}`}
                  height={60}
                  width={60}
                />
                {label}
              </button>
            ))}
            <div></div>
          </div>
        </Box>
      </StyledDrawer>
    </div>
  );
};

export default TopDrawer;
