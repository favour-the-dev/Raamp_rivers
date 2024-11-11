'use client'
import Image from "next/image";
import banner from '../../../../public/assets/images/banner.jpg';
import { FaCheck } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
function AboutUs(){
    const [distance, setDistance] = useState<number>(0);
    const [lgaCount, setLgaCount] = useState<number>(0);
    const [bridgesCount, setBridgesCount] = useState<number>(0);
    const intervalRef = useRef<null | any>(null);
    // const lgaIntervalRef = useRef<null | any>(null);
    // const bridgeIntervalRef = useRef<null | any>(null);
    let count = 0;
    let countLga = 0;
    let countBridge = 0;
    function handleDistanceCounter(){
        intervalRef.current = setInterval(()=>{
            count = count + 87; 
            setDistance(count)
            if(count === 522){
                clearInterval(intervalRef.current)
            }
        }, 1)
    }
    function handlelgaCounter(){
        intervalRef.current = setInterval(()=>{
            countLga = countLga + 1; 
            setLgaCount(countLga)
            if(countLga === 30){
                clearInterval(intervalRef.current)
            }
        }, 1)
    }
    function handleBridgeCounter(){
        intervalRef.current = setInterval(()=>{
            countBridge = countBridge + 1; 
            setBridgesCount(countBridge)
            if(countBridge === 26){
                clearInterval(intervalRef.current)
            }
        }, 1)
    }
    useEffect(()=>{
        handleDistanceCounter();
        setTimeout(()=>{
            handlelgaCounter();
        }, 1000)
        setTimeout(()=>{
            handleBridgeCounter();
        }, 1500)
    }, [])
    return (
        <>
            <section className="py-4 bg-[#f5f5f5]">
                <div className="wrapper-cont flex flex-col md:flex-row gap-6 px-6 md:px-0">
                    <div className="md:w-[80%] flex flex-col gap-6">
                        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-6">
                            <h2 className="before:bg-gray-400 before:w-12 before:h-12 before:rounded-full before:absolute before:left-[-10px] before:top-[-10px] before:opacity-40 relative text-primary text-xl font-semibold">About Us</h2>
                            <h3 className="text-2xl md:text-4xl text-[#333333] font-bold">Rivers State Project Implementation Unit</h3>
                            <p className="text-gray-500">Rural Access and Agricultural Marketing Project is a third-generation rural access project. It aims to strengthen the institutional and financing base for sustainable management of state and rural network. Adequate precautions will be taken to mitigate the planning and implementation risks of all activities.</p>
                            <p className="text-gray-500">The RAAMP project is an initiative of FGN aimed to improve rural access and agricultural marketing in participating states while strengthening the financing and institutional base for effective development, maintenance, and management of the rural road network. the project is consistent with Nigeria’s Vision 2020 priorities.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6 ">
                            <div className="flex items-center gap-2">
                                <div className="text-md bg-green-700 text-white w-fit p-1 rounded-full">
                                    <FaCheck />
                                </div>
                                <p className="italic text-sm text-gray-700 font-light">Improvement of Rural Access and Trading Infrastructure.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-md bg-green-700 text-white w-fit p-1 rounded-full">
                                    <FaCheck />
                                </div>
                                <p className="italic text-sm text-gray-700 font-light">Sector Reform, Asset Management and Agro‐ logistics Performance Enhancement.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-md bg-green-700 text-white w-fit p-1 rounded-full">
                                    <FaCheck />
                                </div>
                                <p className="italic text-sm text-gray-700 font-light">Institutional Development, Project Management and Risk Mitigation.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-md bg-green-700 text-white w-fit p-1 rounded-full">
                                    <FaCheck />
                                </div>
                                <p className="italic text-sm text-gray-700 font-light">To be the Gold Standard in the delivery of Public Sector Projects.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
                            <div className="flex flex-col gap-2 border-l-4 border-primary px-4">
                                <span className="text-primary font-bold text-5xl">{distance} KM</span>
                                <span className="text-lg text-[#333333] font-semibold">Completed Across Rivers</span>
                            </div>
                            <div className="flex flex-col gap-2 border-l-4 border-primary px-4">
                                <span className="text-primary font-bold text-5xl">{lgaCount}</span>
                                <span className="text-lg text-[#333333] font-semibold">LGA's Covered</span>
                            </div>
                            <div className="flex flex-col gap-2 border-l-4 border-primary px-4">
                                <span className="text-primary font-bold text-5xl">{bridgesCount}+</span>
                                <span className="text-lg text-[#333333] font-semibold">Bridges Completed</span>
                            </div>
                        </div>
                    </div>
                    <div className="group hidden md:block w-fit mx-auto h-fit relative hover:before:w-[200px] before:w-[100px] before:h-[220px] hover:before:h-[300px] md:before:h-[340px] md:hover:before:h-[450px] before:bg-primary before:absolute before:left-[-19px] before:bottom-[-19px] before:z-0 after:w-[100px] hover:after:w-[200px] after:h-[220px] hover:after:h-[300px] md:after:h-[340px] hover:md:after:h-[450px] after:bg-[#006837] after:absolute after:right-[-19px] after:top-[-19px] after:z-0 after:duration-150 after:ease-in-out before:duration-150 before:ease-in-out cursor-pointer">
                        <Image
                        src={banner}
                        alt={'banner'}
                        width={370}
                        height={700}
                        className="relative z-[5]"
                        />
                    </div>
                    <div className="group md:hidden w-fit mx-auto h-fit relative hover:before:w-[200px] before:w-[100px] before:h-[220px] hover:before:h-[300px] md:before:h-[340px] md:hover:before:h-[450px] before:bg-primary before:absolute before:left-[-19px] before:bottom-[-19px] before:z-0 after:w-[100px] hover:after:w-[200px] after:h-[220px] hover:after:h-[300px] md:after:h-[340px] hover:md:after:h-[450px] after:bg-[#006837] after:absolute after:right-[-19px] after:top-[-19px] after:z-0 after:duration-150 after:ease-in-out before:duration-150 before:ease-in-out cursor-pointer">
                        <Image
                        src={banner}
                        alt={'banner'}
                        width={300}
                        height={470}
                        className="relative z-[5]"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;