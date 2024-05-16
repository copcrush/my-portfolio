/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Navaphan Singkaew",
                1000,
                "Full-Stack Developer",
                1000,
                "Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              className="sm:py-10"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 pr-10 lg:text-xl">
            Looking for a skilled Front End or Full Stack Developer? You're in
            the right place! I'm passionate about crafting engaging web
            experiences. Dive into my projects and see how I seamlessly blend
            creativity with code to build intuitive and responsive websites.
            Let's connect and create something extraordinary together!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-[320px] h-[320px] relative">
            <Image
              src="/images/profilepic.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
