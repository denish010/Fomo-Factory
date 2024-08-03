import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../lib/mongodb";
import StockCrypto from "../../models/StockCrypto";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectMongo();

  const { symbol } = req.query;

  try {
    const data = await StockCrypto.find({ name: symbol })
      .sort({ timestamp: -1 })
      .limit(20);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

export default handler;
