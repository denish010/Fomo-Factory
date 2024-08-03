import { NextResponse } from "next/server";
import axios from "axios";
import connectMongo from "../../../lib/mongodb";
import StockCrypto from "../../../models/StockCrypto";
import { COIN_CODES } from "@/app/config";
import { headers } from "next/headers";
import { NextApiRequest } from "next";
import Coins from "@/models/Coins";

const API_URL = "https://api.livecoinwatch.com/coins/map";

export async function GET(req: Request) {
  await connectMongo();
  const { searchParams } = new URL(req.url);
  const meta = searchParams.get("meta") === "true";


  try {
    const response = await axios.post(
      API_URL,
      {
        codes: COIN_CODES,
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 0,
        meta: true,
      },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": "8385af0d-7939-4b3c-821c-1ab7e20642ab",
        },
      }
    );
    const data: Array<Record<string, any>> = response.data;
    const availableCoins = await Coins.find({ code: { $in: COIN_CODES } });
    if (availableCoins.length === 0) {
      await Coins.insertMany(data);
    } else {
      const updateCoins = availableCoins.map((coin) => {
        const update = data.filter((e) => e.code === coin.code)[0];
        return Coins.updateOne({ code: coin.code }, update);
      });

      await Promise.all(updateCoins);
    }

    await StockCrypto.insertMany(data);

    return NextResponse.json({ message: "Data polled successfully", data });
  } catch (error) {
    
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
