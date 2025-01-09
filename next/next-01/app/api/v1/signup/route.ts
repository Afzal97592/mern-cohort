import prisma from "../../../../app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password, username } = await req.json();
  await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  return NextResponse.json({
    message: "You have been signed up",
  });
}
