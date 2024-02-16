'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Thay đổi đường dẫn đến component hình ảnh của bạn

const SlideShow = ({ images }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    const getDisplayedImages = () => {
        const displayedImages = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % images.length;
            displayedImages.push(images[index]);
        }
        return displayedImages;
    };

    return (
        <div className="flex overflow-hidden gap-10">
            {getDisplayedImages().map((image: any, index: number) => (

                <Image
                    width={index === 1 ? 100 : 50}
                    height={index === 1 ? 300 : 100}
                    src={image}
                    alt=''
                    className="transition-transform transform flex-shrink-0 slide-enter slide-exit"
                />

            ))}
        </div>
    );
};

export default SlideShow;
