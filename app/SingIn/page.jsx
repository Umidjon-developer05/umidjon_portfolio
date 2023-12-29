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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;

    try {
     if (name === process.env.name && email === process.env.email) {
      await fetch("http://localhost:3000/api/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });
     }
    } catch (err) {
      setError("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          name="name" // Add name attribute for capturing input value
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          name="email" // Add name attribute for capturing input value
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Register</button>
        {error && <p>{error}</p>}
      </form>     
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Register;
