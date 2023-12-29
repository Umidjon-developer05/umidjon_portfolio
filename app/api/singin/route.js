import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  
  // Check if the user with the given email already exists
  const existingUser = await Users.findOne({ email });
  
  if (existingUser) {
    return NextResponse.json({ message: "User with this email already exists" }, { status: 400 });
  } else {
    await Users.create({ name, email });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  }
}


export async function GET() {
  await connectMongoDB();
  
  // Ensure the Users model is accessed after connecting to the database
  const usersData = await Users.find();
  return NextResponse.json({ Users: usersData });
}
