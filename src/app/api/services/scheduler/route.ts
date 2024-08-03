import { NextResponse } from "next/server";

var cron = require("node-cron");

export async function POST() {
  try {
    cron.schedule("*/15 * * * * *", async () => {
      console.log("# Running scheduler every 20 minutes #");
    });

    return NextResponse.json({ data: "Success", status: 200 });
  } catch (error) {

    return NextResponse.json({ error: error }, { status: 500 });
  }
}
