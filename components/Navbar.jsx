"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const session = useSession();
  const [email,setEmail]= useState('')
  useEffect(() => {
    if (session?.data?.user?.email) {
      setEmail(session.data.user.email);
    }
  }, [session]);
  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
      <Link className="text-white font-bold" href={"/"}>
        Ish Uz
      </Link>
      {
         email === process.env.NEXT_PUBLIC_EMAIL ?
         <Link className="bg-white p-2" href={`${email === process.env.NEXT_PUBLIC_EMAIL?'/addTopic':'/'}`}>
            Add Topic
          </Link>
            : <div></div>
      }
      { session.data?.user?.email ?
        <div ><img src={session.data?.user.image}  style={{backgroundColor:"red",width:"50px",height:"50px",borderRadius:"50%"}}/></div>
        :<Link className="bg-white p-2" href={"/SingIn"}>
        Sing In 
      </Link>
      }
    </nav>
    </div>
  );
}
