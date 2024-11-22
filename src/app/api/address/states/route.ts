import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";


export async function GET() {
   
   const states = await prisma.state.findMany();

   return NextResponse.json({ states, status: 200 });
}