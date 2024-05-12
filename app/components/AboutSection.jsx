"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>MongoDB </li>
        <li>TailwindCSS</li>
        <li>Bootstrap</li>
        <li>React Redux</li>
        <li>HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Dhanuaish High School - S.S.C</li>
        <li>Cumilla polytechnic Institute</li>
      </ul>
    ),
  },

  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Secondary School Certificate</li>
        <li>MERN Stack Development </li>
        <li>Diploma in Computer Science and Technology</li>
      </ul>
    ),
  },
];

const AboutSections = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition("skills");

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/computer setup.jpg"
          height={1000}
          width={1000}
          alt="Computer Setup"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white font-bold text-4xl mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm MD: Ariful Islam Ashik, a passionate MERN stack developer who
            recently completed my diploma in computer science in 2023. I'm
            committed to lifelong learning and growth. I'm a MERN stack
            developer, I'm proficient in working with HTML, CSS, Bootsrap, API,
            REDUX, TailwindCSS , Git and github ,MongoDB, Express.js, React.js,
            and Node.js. I'm a quick learner, adaptable to new technologies, and
            dedicated to staying up-to-date with the latest industry trends and
            best practices.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
