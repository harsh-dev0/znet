"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Typer from "./typer";
import { useState, useEffect } from "react";

const Start = () => {

  const phrases = [
    'Harsh',
    'Web Developer',
    'MERN Enthusiast',
    'Open to Exciting Projects and Work Opportunities',
  ];
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 780);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg1.avif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <section className="lg:py-16 min-h-screen bg-cover bg-center bg-no-repeat " >
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center  text-center sm:text-left justify-self-start"
          style={{ height: isLargeScreen ? "400px" : "auto" }}
        >
          <h1 className="text-white mb-4 text-3xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold" >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm
            </span>
            <br />
            <Typer/>
            {/*<TypeAnimation
              sequence={[
                "Harsh",
                1000,
                "Web Developer",
                1000,
                "MERN Enthusiast",
                1000,
                "Open to Exciting Projects and Work Opportunities",
                1000,
              ]}
              
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />*/}

          </h1>
          <p className='text-[#8c9397] text-base sm:text-lg mb-6 lg:text-xl'>
            I am a MERN stack developer. I am willing to learn thrive and exceed any expectations. Currently learning advanced technologies of web development.
          </p>
          <div className=" lg:mb-36">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex items-center justify-center place-self-center mt-4 lg:mt-0"
          style={{ position: 'relative', textAlign: 'center' }}
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.png"
              alt="profile image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Start;