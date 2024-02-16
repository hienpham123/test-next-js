'use client'
import React,{ useEffect, useRef, useState } from "react";
import Image from "next/image"
import image1 from '../../public/images/image1.png'
import image2 from '../../public/images/image2.png'
import image3 from '../../public/images/image3.png'

export function AboutUs() {
    const MAX_WIDTH = 612;
    const MAX_HEIGHT = 414;

    const RULE = MAX_HEIGHT / MAX_WIDTH * 100

    const [width, setWidth] = useState(MAX_WIDTH)
    const height = width / 100 * RULE || MAX_HEIGHT

    useEffect(() => {
        const container = document.getElementById('container');

        const updateWidth = () => {
            if (container) {
                const widthContainer = container.offsetWidth;
                console.log('Chiều ngang của div là: ', widthContainer);
                if(widthContainer > 960) {
                    setWidth(Math.round(widthContainer / 100 * 42.5));
                } else {
                    setWidth(Math.round(widthContainer - (widthContainer / 100 * 10)));
                }
            }
        };

        // Initial width update
        updateWidth();

        // Update width on window resize
        window.addEventListener('resize', updateWidth);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

      
    return (
        <section className="bg-[#F9F8FB]">
        <div id='container' className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto gap-5 md:gap-20 p-[5%]">
          <div className={`relative`} 
          style={{
            width,
            height
          }}>
            <div className="absolute w-[70.5%] h-[71.7%] rounded-xl md:rounded-3xl border-[2px] border-solid border-[#D0D0D0] top-10 left-10 md:top-20 md:left-24" />
            <Image 
              src={image1}
              alt="image1"
              className="absolute object-cover w-[22.9%] h-[33.8%] rounded-xl md:rounded-[32px] top-4 left-6 lg:top-8 lg:left-12"
            ></Image>
            <Image
              src={image2}
              alt="image2"
              className="absolute object-cover w-[31.5%] h-[46.6%] rounded-xl md:rounded-[32px] bottom-0 left-0"
            ></Image>
            <Image
              src={image3}
              alt="image3"
              className="absolute object-cover w-[61.9%] h-[72.4%] rounded-xl md:rounded-[32px] top-0 right-0"
            ></Image>
            <span className="absolute bottom-2 left-[38%] px-2 py-2 lg:py-3 lg:px-8 bg-[#0072EC] rounded lg:rounded-[12px] text-xs lg:text-xl text-[#fff] font-bold">
              October 19, 2022
            </span>
          </div>
  
          <div>
            <h1 className="text-3xl font-bold text-[#00172F] mt-7">BMBCORP</h1>
            <div className="text-lg mt-4 text-[#00172F]">
              <p>
                <span className="font-bold">
                  Established on October 19, 2022,
                </span>{' '}
                is a versatile service company operating in various fields,
                including Information Technology, Media and Entertainment,
                Education, and more. It brings together outstanding members,
                graduates from top-tier institutions such as the University of
                Engineering and Technology, National Economics University, Academy
                of Journalism and Communication, Foreign Trade University,
                Diplomatic Academy, and Film and Stage Academy. These members
                possess sharp minds, creativity, and a professional work ethic.
              </p>
            </div>
          </div>
        </div>
      </section> 
    )
}