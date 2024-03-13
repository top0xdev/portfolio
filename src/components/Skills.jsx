import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import { skills_list } from "../data";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
      {/* BACKGROUND ELEMENTS END */}
      <Wrapper>
        {/* SKILL ICONS START */}
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
          {
            skills_list.map((item, index) => (
              <SkillIcon key={index} path={item.path} />
            ))
          }
        </Div>
        {/* SKILL ICONS END */}

        {/* SERVICES SECTION START */}
        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
          {/* SERVICES START */}
          <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            <Service
              num="1"
              title="Frontend Development"
              desc="Building user-friendly and responsive websites using modern web development technologies such as HTML5, CSS3, and JavaScript \n
              Developing front-end web applications with popular frameworks such as React, Angular, Vue.js, and others.\n
              Integrating APIs and third-party services to enhance the functionality and user experience of the website/application\n
              Optimizing website speed and performance for better search engine rankings and user engagement"
              data={[
                "Tailwind CSS",
                "Material UI",
                "Styled Component",
                "React.js",
                "Vue.js",
                "Angular.js",
              ]}
            />
            <Service
              num="2"
              title="Backend Development"
              desc="Developing server side code for web applications using technologies such as Node.js, Ruby on Rails, Django, Flask, or Laravel.\nCreating APIs to allow communication between different software systems and services. This could involve integrating with third-party services or building custom APIs for your clients’ specific needs.\nDesigning and maintaining databases used by web applications and ensuring data integrity, security and performance.\nConfiguring servers, setting up continuous integration and deployment pipelines, managing application logs, monitoring system health and performance, and implementing horizontal and vertical scaling strategies.\nImplementing caching strategies to improve website speed, efficiency, and user experience.\nEnsuring the security of web applications by implementing best practices such as using HTTPS, user authentication, input validation, and protection against SQL injections, cross-site scripting (XSS), and other common attacks."
              data={[
                "Node",
                "Express",
                "Django",
                "Flask",
                "Laravel",
                "Ruby on Rails",
              ]}
            />
            <Service
              num="3"
              title="Blockchain Development"
              desc="Creating smart contracts using programming languages such as Solidity, Vyper, or Rust to automate transactions and enforce rules on blockchain networks.\nDeveloping front-end interfaces for DApps that interact with smart contracts using web3.js, ethers.js or other similar frameworkIntegrating DApps with different blockchain networks such as Ethereum, Binance Smart Chain, or Polkadot, using tools like MetaMask, WalletConnect, or Trust Wallet.s.\nDesigning the overall architecture of blockchain-based systems, including data storage, consensus mechanisms, and networking protocols.\nDeveloping centralized or decentralized cryptocurrency exchange platforms where users can buy, sell, or trade different cryptocurrencies."
              data={[
                "Solidity",
                "Rust",
                "Web3.js, Ethers.js",
                "DApps, Dex, Defi, DAO, NFTs",
              ]}
            />
          </div>
          {/* SERVICES END */}

          {/* SECTION HEADING START */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
            <span>Solving</span>
            <span>Problems</span>
            <span className="flex items-center gap-2">
              Through
              <img src={pattern} className="block md:hidden w-[80px] mt-1" />
            </span>
            <span className="flex items-center gap-4">
              Good{" "}
              <img
                src={pattern}
                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
              />
            </span>
            <span>Services</span>
          </div>
          {/* SECTION HEADING END */}
        </div>
        {/* SERVICES SECTION END */}

        <Portfolio />
        <Achievements />
      </Wrapper>
    </div>
  );
};

export default Skills;
