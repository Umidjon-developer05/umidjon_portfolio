"use client"
import { useSession } from 'next-auth/react';
import Main from './Main/page';
import TopicsList from '@/components/TopicsList';


export default function Home() {
   const { data: session, status } = useSession();
  
   if (session?.user?.email === process.env.NEXT_PUBLIC_EMAIL) {
      return(
        <TopicsList/>
      )
    }
  else{
    return (
      <div >
         <Main/>
      </div>
    );
  }
}
