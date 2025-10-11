import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Feature from '../Feature';
import LanguageSection from '../languageSection';
import Footer from '../Footer';

function Home() {
    const navigation=useNavigate();
    function handleCode(){
        navigation("/code")
    }
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <LanguageSection/>
    <Footer/>
    </>
  )
}

export default Home