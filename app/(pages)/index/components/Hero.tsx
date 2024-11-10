"use client"
import Image from "next/image";
import {useState, useEffect, useRef} from 'react';
import gsap from "gsap";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const slides = [
    {
        imageUrl: '/assets/images/bridge.jpg',
        h1: 'Bridging Gaps, Building Futures',
        p: 'Strengthening Infrastructure to Support Agro-logistics and Economic Growth.'
    },
    {
        imageUrl: '/assets/images/Cocoa-Farming.jpg',
        h1: 'Empowering Farmers, Enhancing Lives',
        p: 'Transforming Rural Agriculture through improved Access and Innovative Solutions.'
    },
    {
        imageUrl: '/assets/images/roads.jpg',
        h1: 'Connecting Communities',
        p: 'Improving Rural Road Networks to Facilitate Better Transportation and Economic Development.'
    },
]

function Hero() {
    const [currentSlde, setCurrentSlide] = useState<number>(0)
    const slideRef = useRef(null);
    const slideContRef = useRef(null);
    const textRef = useRef(null);
    const intervalRef = useRef<null | any>(null);

    // Animation for entry and exit
    const animateSlide = (direction: string) => {
    const timeline = gsap.timeline();
    timeline.call(() => {
        setCurrentSlide((prevSlide) => {
            if (direction === 'next') {
                return (prevSlide + 1) % slides.length;
            } else {
                return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
            }
        });
    });

    // background Animation
    timeline.fromTo(
        slideRef.current,
        { opacity: 0},
        { opacity: 1, duration: 0.8, ease: "power2.in" }
    );

    // slide animation
    timeline.fromTo(
        slideRef.current,
        { scale: 2.0 },
        { scale: 1.0, opacity:0.65, duration: 1.0 }
    );
    timeline.fromTo(
        textRef.current,
        { opacity: 0, y: direction === 'next' ? 150 : -150 },
        { opacity: 1, y: 0, duration: 0.5 },
    );
    };

    const handleNextSlide = () => {
    resetAutoPlay(); 
    animateSlide('next');
    };

    const handlePreviousSlide = () => {
    animateSlide('prev');
    resetAutoPlay(); 
    };
    const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
        handleNextSlide();
    }, 6000);
    };

        // Function to clear and restart the interval
    const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    startAutoPlay();
    };

    useEffect(() => {
    startAutoPlay(); // Start auto-play on component mount

    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
    }, []);
    return ( 
        <>
            <section ref={slideContRef} className="hero-bg flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full h-full bg-black absolute bottom-0 left-0 z-10">
                    <img
                    ref={slideRef}
                    src={slides[currentSlde].imageUrl}
                    alt="hero_bg"
                    className="w-full h-full opacity-65"
                    />
                </div>
                <div className="wrapper-cont relative z-20 text-white flex gap-4 items-center justify-between" ref={textRef}>
                    <IoIosArrowUp className="md:hidden cursor-pointer hover:scale-110 duration-150 ease-in-out text-7xl font-bold" onClick={()=>{
                        handleNextSlide()
                    }}/>
                    <div className="flex flex-col gap-4 md:gap-2 font-bold">
                        <h2 className="capitalize after:w-[35%] md:after:w-[60px] after:h-[3px] after:bg-white after:text-white after:absolute after:bottom-[-10px] after:right-0 md:after:top-[60%] md:after:right-[-15%] relative w-fit text-xl md:text-3xl">Rivers State Project Implementation unit</h2>
                        <h1 className="text-2xl md:text-7xl md:w-[90%]">{slides[currentSlde].h1}</h1>
                        <p className="text-lg md:text-2xl">{slides[currentSlde].p}</p>
                    </div>
                    <IoIosArrowDown className="md:hidden cursor-pointer hover:scale-110 duration-150 ease-in-out text-7xl font-bold" onClick={()=>{
                        handlePreviousSlide()
                    }}/>

                    {/* deaktop slide pagination */}
                    <div className="md:flex flex-col text-6xl font-bold gap-12 items-center hidden">
                    <IoIosArrowUp className=" cursor-pointer hover:scale-110 duration-150 ease-in-out" onClick={()=>{
                        handleNextSlide()
                    }}/>
                    <IoIosArrowDown className=" cursor-pointer hover:scale-110 duration-150 ease-in-out" onClick={()=>{
                        handlePreviousSlide()
                    }}/>
                    </div>
                </div>  
            </section>    
        </>
    );
}

export default Hero;