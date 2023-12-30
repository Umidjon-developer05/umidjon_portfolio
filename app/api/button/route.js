import connectMongoDB from "@/libs/mongodb";
import Button from "@/models/button";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title ,desc,description} = await request.json();
  await connectMongoDB();
  await Button.create({ title ,desc,description});
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}


export async function GET() {
  await connectMongoDB();
  const button = await Button.find();
  return NextResponse.json({ button });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Button.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
