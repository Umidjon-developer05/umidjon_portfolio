"use client"
import { useSession } from 'next-auth/react';
import Main from './Main/page';
import About from './About/page';
import Portfolio from './Portfolio/page';
import TopicsList from '@/components/TopicsList';
import Resume from './Resume/page';
import Skills from './Skills/page';
import Contact from './Contact/page';


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
         <About/>
         <Resume/>
         <Skills/>
         <Portfolio/>
         <Contact/>
      </div>
    );
  }
}
