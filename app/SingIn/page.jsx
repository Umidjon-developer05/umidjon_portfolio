"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";


const Register = () => {
  const [error, setError] = useState(null);
  const route = useRouter()
  const session = useSession()
  console.log(session);
  if (session.status === "loading") {
    return (
     <div>Loading...</div>
    );
  }

  if (session.status === "authenticated") {
    route?.push("/");
  }

 

  return (
    <div >
      
    </div>
  );
};

export default Register;
