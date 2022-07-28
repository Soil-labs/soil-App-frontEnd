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
const express = require("express");
const app = express()

const session = require('express-session')
const passport = require('passport')

app.use(session({
    secret: 'keyboard cat',
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 1 // 1 Day
    },
    saveUninitialized: false
  
})) 


export default function Home() {
  return (
    <>
    <p>gm</p>
      <Navbar />
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <Contacts />
      <CTA />
      <Footer />
    </>
  );
}
