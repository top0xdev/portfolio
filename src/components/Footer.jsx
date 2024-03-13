import React from "react";

import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Wrapper from "./Wrapper";
import { scrollTo } from "../helper";

const Footer = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5  relative text-[#111111] py-10">
                    <div className="flex items-center gap-[12px]">

                    </div>
                    <div className="flex items-center gap-[6px]">
                    </div>
                    <div className="flex items-center gap-[6px]">
                    </div>
                    <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        {/* <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li> */}
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
