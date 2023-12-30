"use client";
import TopicsList from "../components/TopicsList";
import { useSession } from "next-auth/react";
export default  YourPage = async ( ) => {
    const session  = useSession();
  
    return <TopicsList  isAdmin={session} />;
  }