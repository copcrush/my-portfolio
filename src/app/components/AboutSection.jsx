/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>React.js</li>
        <li>Vue.js</li>
        <li>Next.js</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>PostgresSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Engineering - Civil Engineering - Kasetsart University
          August 2018 - April 2022
        </li>
        <li>
          Science-Mathematics Program - Triamudomsuksanomklao School May 2015 -
          March 2018
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Full-Stack Development Bootcamp - WeStride Institute of Technology
          <br />
          Successfully Completed on 04 April 2024
        </li>
        <li>
          Get started creating and displaying website content with HTML - FutureSkill
          <br />
          Successfully Completed on 05 May 2024
        </li>
        <li>
          Customize and style your website with CSS - FutureSkill
          <br />
          Successfully Completed on 06 May 2024
        </li>
        <li>
          Add features to your website with JavaScript - FutureSkill
          <br />
          Successfully Completed on 06 May 2024
        </li>
        <li>
          UpSkill Python Programming - FutureSkill
          <br />
          Successfully Completed on 13 May 2024
        </li>
        <li>
          Get Started with Programming - FutureSkill
          <br />
          Successfully Completed on 15 May 2024
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          width={500}
          height={500}
          className="rounded-xl"
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm looking for opportunities as a Front End Developer or Full Stack
            Developer. Dedicated to crafting captivating digital experiences
            through code, I am an expert in HTML, CSS, and JavaScript,
            transforming designs into seamless user interfaces. I specialize in
            creating responsive and interactive websites that provide an
            exceptional user experience. Additionally, I have experience in
            backend development and database management, ensuring robust and
            efficient web applications. Let's collaborate to elevate your web
            presence.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
