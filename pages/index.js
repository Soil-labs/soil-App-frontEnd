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
import Image from 'next/image'
import Axios from "axios";




export default function Home() {

  const {data: session} = useSession()

  console.log("session = " , session)

  
    // let rsno 

    // const token = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..EYMS_ikzv3IcbMV8.s2IVfobudbTfY5eucH-xCSyHH7LR8tk0SkANiYD-Qa7Ro3cOF39Gg_HRQ_kgy6ta_5oI7FUJQDYEb-2eydxrTQPXLfj1rVwq72W5vecCRgA4fnL4Soak6yMiquRQQAyYYI8ZrfKkr2IHP3PyU1EC3DoOZDnkYOoeUJMAeVRCITR82g-IBP-c1R4WGq_JqCMSKCgi3dBSgq119XA3ca8AhaWJWLH4FTRTqgvdyqabgn94RdfltVFXeQiuVE_G2bUK_hhmcOzXshpaU80nUPjUyN4rtHCyNR6GKbVYzjSnn7cqRwuVBFeXMrNIA2IKR7iaKdTNK8v16TPs6l8YAEV93n4x9FKAUrQ.uy2e1pqpoT1Cfa5cVV6Rzw'
    // const token2 = 'e58d32aa9320fe0f53f026154d1af6e27335f3a5de0424d2097ba196590a02bb%7Ca540eb8e6f0cb4f486781e70ad0d4ec1124540e3044ef392d8dbe1ee00579343'
    
    // Axios.get(`https://discordapp.com/api/users/@me`,{headers: {Authorization: `Bearer ${token2}`}}) .then(res => {
    //   console.log("res = " , res)
    // })


    // rsno = Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    //   console.log("res = ", res)
    //   // return res.data
    // })

    // console.log("rsno = " , rsno)

  // getStaticProps()

  // console.log("change = " , change)

  if (session) {
    const {user} = session

    // console.log("session = " , session)
    console.log("user = " , user)
    // console.log("user.image = " , user.image)

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
