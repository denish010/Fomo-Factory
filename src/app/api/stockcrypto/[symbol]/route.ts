import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../../lib/mongodb";
import StockCrypto from "../../../../models/StockCrypto";

export async function GET(
  req: NextRequest,
  { params }: { params: { symbol: string } }
) {
  await connectMongo();

  try {
    const data = await StockCrypto.find({ code: params.symbol })
      .sort({ timestamp: -1 })
      .limit(20);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
