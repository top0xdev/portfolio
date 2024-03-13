import React, { useState } from "react";
import github from "../assets/github.png";
import play from "../assets/play-button.png";
import { projects, filters } from "../data";
import Div from "./Div";

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag) => {
    setSelectedTag(tag);
    let filteredProjects = [];
  /*   if (tag === "all") {
      filteredProjects = projects;
    } else { */
      filteredProjects = projects.filter((p) => p.tags.includes(tag));
   /*  } */
    setProjectData(filteredProjects);
  };

  return (
    <div id="work" className="mt-10 relative">
      {/* SECTION HEADING START */}
      <Div className="mb-10">
        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
          Previous works
        </div>
      </Div>
      {/* SECTION HEADING END */}

      {/* FILTER TAGS START */}
      <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
        {filters.map((item, index) => (
          <div
            key={index}
            className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-[#EFB946] text-black" : ""
            }`}
            onClick={() => filterHandler(item.id)}
          >
            {item.name}
          </div>
        ))}
      </Div>
      {/* FILTER TAGS START */}

      {/* PROJECTS GRID START */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectData.map((item, index) => {
          return (
            <Div key={index} className="flex flex-col gap-4 cursor-pointer">
              <div className="bg-black rounded-[20px] aspect-video overflow-hidden z-0">
                <img
                  src={item.image}
                  className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                />
              </div>
              {/*    github icon */}
              <div className="absolute rounded-full bg-black flex justify-start m-3 opacity-100 ">
                <div className = "black-gradient w-10 h-10 rounded-full flex justify-center opacity-100  items-center cursor-pointer ">
                  <a
                    className = "object-contain flex item-center justify-center "
                    href      = {item.live_url}
                    target    = "-blank"
                  >
                    {" "}
                    <img
                      src       = {play}
                      alt       = "source code"
                      className = "w-1/2 h-1/2 object-contain "
                    />{" "}
                  </a>
                </div>
              </div>
           
              {/*  project name */}
              <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                {item.name}
              </div>
            </Div>
          );
        })}
      </div>
      {/* PROJECTS GRID START */}
    </div>
  );
};

export default Portfolio;
