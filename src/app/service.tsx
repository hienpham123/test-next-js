"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { Icons, Images } from 'src/assets/icons'
import { motion, useAnimation } from "framer-motion";
import { Each } from "./Each";

const navs = [
  {
    title: "Graphic DESIGN",
    // icon: Icons.graPhic,
    children: [
      {
        title: "Design brand publications",
      },
      {
        title: "Logo design",
      },
      {
        title: "Design business cards",
      },
      {
        title: "Design envelopes",
      },
      {
        title: "Design poster/standee/backdrop",
      },
      {
        title: "Design catalogs/brochures",
      },
    ],
  },
  {
    title: "multimedia",
    // icon: Icons.multimedia,
    children: [
      {
        title: "Corporate filming",
      },
      {
        title: "Producing viral videos",
      },
      {
        title: "Take product photos",
      },
      {
        title: "Take photos/Edit videos of events",
      },
    ],
  },
  {
    title: "content production",
    // icon: Icons.contentProduction,
    children: [
      {
        title: "Write website content",
      },
      {
        title: "Admin",
      },
      {
        title: "Fanpage",
      },
      {
        title: "Administration",
      },
      {
        title: "Write PR articles Script writing service",
      },
    ],
  },
  {
    title: "organize events",
    // icon: Icons.organize,
    children: [
      {
        title: "Organize seminars/openings",
      },
      {
        title:
          "Organize year-end/team building birthday parties for businesses",
      },
      {
        title:
          "Organize a celebration of the establishment's anniversary for the organization",
      },
    ],
  },
  {
    title: "Public Relations",
    // icon: Icons.publicRelations,
    children: [
      {
        title: "Reporting news in the press",
      },
      {
        title: "Reporting news in magazines",
      },
      {
        title: "Reporting news on television",
      },
    ],
  },
];

export default function Service() {
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState<any>(Array(navs.length).fill(true));
  const [currentIndexNav, setCurrentIndexNav] = useState<number>(0);

  const handleClickNav = (index: number) => {
    console.log("index", index);

    // Set currentNavIndex immediately to the provided index
    setCurrentIndexNav(index);
    setIsOpen((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // You can keep the useEffect if you need to perform actions based on state changes
  useEffect(() => {
    if (!isOpen[currentIndexNav]) {
      controls.start({ height: 0, opacity: 0 });
    } else {
      controls.start({ height: "auto", opacity: 1 });
    }
  }, [isOpen, currentIndexNav]);

  return (
    <section className="bg-[#F9F8FB] pb-24">
      <div className="max-w-[1440px] mx-auto p-[5%]">
        {/* section1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* <div className="text-[#00172F] flex flex-col justify-center">
            <h1 className="text-3xl font-bold">
              Mastery in Motion: Unleashing Success Through Our Marketing
              Wizardry
            </h1>
            <p className="text-base mt-5 max-w-[560px]">
              {` BMBCORP provides communication services diverse, fully meeting
              your needs businesses in today's market. We are committed to
              bringing prizes. The most creative and effective solution, from
              production Export content, images/videos, map designs painting,
              event organization, public relations them, and press coverage`}
            </p>
          </div> */}
          {/* <Image src={Images.bannerService} alt={''} /> */}
        </div>

        {/* section2 */}
        <div className="grid grid-cols-3 gap-10 h-[2000xp] overflow-visible">
          {/* nav */}
          <div className="flex flex-col gap-10 max-w-[350px] sticky top-0">
            <Each of={navs} render={
              ({ title, children }: any, index: number) => (
                <div key={index}>
                  <div
                    // onClick={() => handleClickNav(index)}
                    className="flex flex-row items-center gap-3 cursor-pointer">
                    {/* <Image src={icon} alt="" /> */}
                    <h1
                      onClick={() => handleClickNav(index)}
                      className="text-xl text-[#00172F] uppercase font-bold flex-1">
                      {title}
                    </h1>
                    <div
                      onClick={() => handleClickNav(index)}
                      className={`cursor-pointer transform transition-transform duration-300 ${!isOpen[index]
                        ? "rotate-180"
                        : ""
                        }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 14L12 9L7 14"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {isOpen[index] &&
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={controls}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2 mt-2"
                    >
                      <Each
                        of={children}
                        render={({ title }: any, subIndex: number) => (
                          <motion.li
                            key={subIndex}
                            className="text-base text-black font-medium cursor-pointer"
                          >
                            <motion.p className="max-w-[260px]">{title}</motion.p>
                          </motion.li>
                        )}
                      />
                    </motion.ul>
                  }
                </div>
              )
            } />
          </div>
          {/* content */}
          <div className="col-span-2"></div>
        </div>
      </div>
    </section>
  );
}
