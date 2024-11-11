import { GiRailRoad } from "react-icons/gi";
import { FaTractor } from "react-icons/fa6";
import { MdAgriculture } from "react-icons/md";
function WhatWeDo() {
    return ( 
        <>
            <section className="py-6 bg-[#f5f5f5]">
                <div className="wrapper-cont flex flex-col gap-12 py-6 my-6">
                    <div className="flex flex-col items-center text-center gap-3 justify-center md:max-w-[50%] w-full mx-auto">
                        <h2 className="font-bold text-4xl text-[#333333] relative before:bg-primary before:w-12 before:h-12 before:rounded-full before:absolute before:left-[-15px] before:top-[-15px] before:opacity-40">What We Do</h2>
                        <p className="text-[#333333] font-light">We enhance transportation conditions and provide sustainable access to rural populations by rehabilitating and maintaining key rural transport infrastructure in selected Nigerian states.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group bg-white max-w-[300px] w-full mx-auto cursor-pointer hover:translate-y-[-8px] duration-200 ease-in-out shadow-md border border-opacity-50 flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl">
                            <GiRailRoad className="text-6xl text-primary group-hover:[transform:rotateY(360deg)] duration-300 ease-in-out"/>
                            <h2 className="text-[#333333] text-2xl font-bold">Improve Rural Road Networks</h2>
                            <p className="text-[#333333] text-sm">Provision of rural access and transportation system that will facilitate the delivery of agricultural inputs and products.</p>
                        </div>
                        <div className="group bg-white max-w-[300px] w-full mx-auto cursor-pointer hover:translate-y-[-8px] duration-200 ease-in-out shadow-md border border-opacity-50 flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl">
                            <FaTractor className="text-6xl text-primary group-hover:[transform:rotateY(360deg)] duration-300 ease-in-out"/>
                            <h2 className="text-[#333333] text-2xl font-bold">Support agricultural marketing & logistics interventions</h2>
                            <p className="text-[#333333] text-sm">Strengthen the financing and institutional base for rural and state road networks, and support agro-logistics interventions to reduce post-harvest losses.</p>
                        </div>
                        <div className="group bg-white max-w-[300px] w-full mx-auto cursor-pointer hover:translate-y-[-8px] duration-200 ease-in-out shadow-md border border-opacity-50 flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl">
                            <MdAgriculture className="text-6xl text-primary group-hover:[transform:rotateY(360deg)] duration-300 ease-in-out"/>
                            <h2 className="text-[#333333] text-2xl font-bold">Strengthening Financial Base</h2>
                            <p className="text-[#333333] text-sm">Adopt better technology to scale up rural agricultural production, add value to increase prices of produce, generate youth employment, and reduce poverty and joblessness by enhancing productivity and production.</p>
                        </div>
                    </div>
                </div>    
            </section>    
        </>
    );
}

export default WhatWeDo;