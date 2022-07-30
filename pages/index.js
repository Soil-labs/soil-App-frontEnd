import Contacts from "../components/Contacts";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import apiClient from "./api/axios";
//Redux
import {signIn, signOut, useSession} from 'next-auth/react'




export default function Home() {

  const {data: session} = useSession()

  console.log("session = " , session)

  
  //TODO: navbar
  if (session) {
    const {user} = session

    console.log("user = " , user)

    return (
      <>
         {/* {user?.image && (
          <Image
            src={user.image}
            alt=""
            width={38}
            height={38}
            style={{borderRadius: '50%'}}
          />
        )} */}
        Hello, {user?.name}!<br /> 
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
    }

    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn('discord')}>Sign in</button>
      </>
    )


  // return (
  //   <>
    
  //     <Navbar />
  //     <HeroSection />
  //     <Features />
  //     <Stats />
  //     <Testimonials />
  //     <Contacts />
  //     <CTA />
  //     <Footer />
  //   </>
  // );
}
