import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/canadian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Full Stack Developer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In Canada</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div
          className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;p&gt;
          </h2>
          My expertise in these technologies enables me to create dynamic and
          interactive websites that are optimized for both desktop and mobile
          devices. Whether it's a small personal website, large enterprise
          application, or custom small website games, Shopify stores, and
          landing pages, I approach every project with the same level of
          attention to detail and dedication to quality.{" "}
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
                  <br />
                  Developed the Hiring Meeting & Conference Website for graduates with zoom script, Token Swapping Sites, E-Learning Website for Children, Food Delivery and Ride Ordering Service Websites, Air-Conditioning Company Site, NFT marketplace Websites, NFT landing pages for minting and staking, DAO, Metaverse, Blockchain Gaming and so on.
Also developed the Defi Tokens, NFT tokens, Stake, Airdrop, breed and game contract with Solidity on Ethereum, Polygon, Avalanche, and BSC.{" "}
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "} <br />
          I am passionate about staying up-to-date with the latest web
          development trends and technologies, and I am always learning and
          experimenting with new tools and techniques. I am a quick learner and
          can adapt to new technologies and programming languages quickly. In my
          free time, I enjoy contributing to open-source projects, writing
          articles, and experimenting with new technologies.
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;br/&gt;
          </h2>{" "}
          <br />
          If you're looking for a dedicated and skilled web developer for your
          next project, look no further. I am always open to new opportunities
          and excited to collaborate with you to bring your vision to life.
          <h2 style={{ fontFamily: "'Cedarville Cursive',cursive" }}>
            &lt;/p&gt;
          </h2>{" "}
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
