import { BASE_URL } from "@/lib/constants";
import { getFrameHtml, validateFrameMessage } from "frames.js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();

  console.log(body);
  const { isValid, message } = await validateFrameMessage(body);
  if (!isValid || !message) {
    return new Response("Invalid message", { status: 400 });
  }
  return new NextResponse(
    getFrameHtml({
      version: "vNext",
      image:
        "https://utfs.io/f/c5eedce5-3551-4843-a0d9-a91e6000f558-wxtt9c.png",
    })
  );
}
