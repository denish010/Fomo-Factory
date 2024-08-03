import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import Coins from "@/models/Coins";

export async function GET() {
  await connectMongo();

  try {
    const data = await Coins.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
