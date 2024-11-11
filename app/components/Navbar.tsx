"use client"
import Image from "next/image";
import rivers_logo from "../../public/assets/images/raamp_rivers logo.jpeg";
import raamp_logo from '../../public/assets/images/Raamp_logo.jpeg';
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
function Navbar() {
    const pathName = usePathname();
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false);
    const handleScroll = ()=>{
        if(window.scrollY > 0){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return ( 
        <>
            <nav className={`wrapper-cont flex items-center justify-between duration-200 ease-in-out ${scroll ? "sticky top-2 left-0 z-50 rounded-full bg-white shadow-xl" : "relative z-50"}`}>
                {/* logo */}
                <div className="flex items-center gap-1 md:gap-3">
                    <Image
                    src={rivers_logo}
                    alt="rivers state logo"
                    width={60}
                    height={60}
                    className="hidden md:block"
                    />
                    <Image
                    src={rivers_logo}
                    alt="rivers state logo"
                    width={40}
                    height={40}
                    className="md:hidden block"
                    />
                    <Image
                    src={raamp_logo}
                    alt="raamp logo"
                    width={60}
                    height={60}
                    className="hidden md:block"
                    />
                    <Image
                    src={raamp_logo}
                    alt="raamp logo"
                    width={40}
                    height={40}
                    className="md:hidden block"
                    />
                    <p className="flex flex-col items-start md:items-center font-bold">
                        <span className="uppercase text-xs md:text-lg tracking-widest text-primary">Rivers State</span>
                        <span className="italic text-xs md:scale-100 text-primary">Project Implementation Unit</span>
                    </p>
                </div>

                {/* desktop Nav */}
                <ul className="items-center gap-4 text-sm font-semibold hidden lg:flex">
                    <li className="relative group">
                        <Link href={'/'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/' ? "text-primary" : "text-black"}`}>Home</Link>
                    </li>
                    <li className="relative group">
                        <Link href={'/About'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/About' ? "text-primary" : "text-black"}`}>About Us <FaAngleDown className="group-hover:translate-y-[1px]"/></Link>
                        <ul className="bg-white absolute left-0 whitespace-nowrap border-t-primary border-b-2 border-x-2 p-2 border-t-2 flex-col items-center gap-2 hidden group-hover:flex opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#about-raamp">About RAAMP</a></li>
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#mission&obj">Mission & Objectives</a></li>
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#raampobj">RAAMP Objectives</a></li>
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#spiuteam">SPIU Team</a></li>
                            <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#consultant">Consultant/Technical Staff</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link href={'/Projects'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/Projects' ? "text-primary" : "text-black"}`}>Project</Link>
                    </li>
                    <li className="relative group">
                        <Link href={'/Media'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/Media' ? "text-primary" : "text-black"}`}>Media Gallery <FaAngleDown className="group-hover:translate-y-[1px]"/></Link>
                        <ul className="bg-white absolute left-0 whitespace-nowrap border-t-primary border-b-2 border-x-2 p-2 border-t-2 hidden group-hover:flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 duration-500 ease-in-out w-full">
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#photo-gall">Photo Gallery</a></li>
                            <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#video-gall">Video Gallery</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link href={'/News'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/News' ? "text-primary" : "text-black"}`}>News & Events <FaAngleDown className="group-hover:translate-y-[1px]"/></Link>
                        <ul className="bg-white absolute left-0 whitespace-nowrap border-t-primary border-b-2 border-x-2 p-2 border-t-2 hidden group-hover:flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 duration-500 ease-in-out w-full">
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#news">News</a></li>
                            <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#events">Events</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link href={'/Contact'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/Contact' ? "text-primary" : "text-black"}`}>Contact Us <FaAngleDown className="group-hover:translate-y-[1px]"/></Link>
                        <ul className="bg-white absolute left-0 whitespace-nowrap border-t-primary border-b-2 border-x-2 p-2 border-t-2 hidden group-hover:flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 duration-500 ease-in-out w-fit">
                            <li className="py-2 border-b border-gray-300 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#contact-form">Contact Form</a></li>
                            <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#map-pos">Map Position</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <Link href={'/Map'} className={`flex items-center gap-1 hover:text-primary duration-150 ease-in-out ${pathName === '/Map' ? "text-primary" : "text-black"}`}>Map Location</Link>
                    </li>
                </ul>

                {/* mobile nav */}
                <div className="lg:hidden">
                    <div className="text-2xl text-primary hover:scale-105 duration-150 ease-in-out" onClick={()=>{
                        setOpenNav(prevState=> !prevState)
                    }}>
                    {!openNav ? <RiMenu2Line /> : <IoMdClose />}
                    </div>
                    <ul className={`${openNav ? "z-50 min-h-fit h-full" : "hidden z-0 max-h-0 h-full"} duration-150 ease-in-out flex flex-col items-start absolute top-[90%] left-[10%] right-[10%] gap-4 p-2 text-sm font-semibold bg-white border-t-primary border-t-4 rounded-lg shadow-sm`}>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <Link href={'/'} className={`hover:text-primary duration-150 ease-in-out ${pathName === '/' ? "text-primary" : "text-black"}`}>Home</Link>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <div className="flex items-center justify-between w-full group-hover:text-primary duration-150 ease-in-out">
                                <Link href={'/About'} className={`group-hover:text-primary duration-150 ease-in-out  ${pathName === '/About' ? "text-primary" : "text-black"}`}>About Us</Link>
                                <FaAngleDown />
                            </div>
                            <ul className="whitespace-nowrap p-2 opacity-0 hidden group-hover:opacity-100 group-hover:flex flex-col gap-2 items-center duration-500 ease-in-out">
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#about-raamp">About RAAMP</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#mission&obj">Mission & Objectives</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#raampobj">RAAMP Objectives</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#spiuteam">SPIU Team</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#consultant">Consultant/Technical Staff</a></li>
                            </ul>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <Link href={'/Projects'} className={`hover:text-primary duration-150 ease-in-out ${pathName === '/Projects' ? "text-primary" : "text-black"}`}>Project</Link>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <div className="flex items-center justify-between w-full group-hover:text-primary duration-150 ease-in-out">
                            <Link href={'/Media'} className={`group-hover:text-primary duration-150 ease-in-out  ${pathName === '/Media' ? "text-primary" : "text-black"}`}>Media Gallery</Link>
                            <FaAngleDown />
                            </div>
                            <ul className="w-full whitespace-nowrap p-2 opacity-0 hidden group-hover:opacity-100 group-hover:flex flex-col gap-2 items-center duration-500 ease-in-out">
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#photo-gall">Photo Gallery</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#video-gall">Video Gallery</a></li>
                            </ul>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <div className="flex items-center justify-between w-full group-hover:text-primary duration-150 ease-in-out">
                                <Link href={'/News'} className={`group-hover:text-primary duration-150 ease-in-out ${pathName === '/News' ? "text-primary" : "text-black"}`}>News & Events </Link>
                                <FaAngleDown />
                            </div>
                            <ul className="w-full whitespace-nowrap p-2 opacity-0 hidden group-hover:opacity-100 group-hover:flex flex-col gap-2 items-center duration-500 ease-in-out">
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#news">News</a></li>
                                <li className="py-2 w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#events">Events</a></li>
                            </ul>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <div className="flex items-center justify-between w-full group-hover:text-primary duration-150 ease-in-out">
                                <Link href={'/Contact'} className={`group-hover:text-primary duration-150 ease-in-out ${pathName === '/Contact' ? "text-primary" : "text-black"}`}>Contact Us</Link>
                                <FaAngleDown />
                            </div>
                            <ul className="w-full whitespace-nowrap p-2 opacity-0 hidden group-hover:opacity-100 group-hover:flex flex-col gap-2 items-center duration-500 ease-in-out">
                                <li className="py-2  w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#contact-form">Contact Form</a></li>
                                <li className="py-2  w-full hover:text-primary hover:scale-[1.025] duration-200 ease-linear"><a href="#map-pos">Map Position</a></li>
                            </ul>
                        </li>
                        <li className="relative group w-full border-b-2 border-gray-200 border-opacity-50 py-2">
                            <Link href={'/Map'} className={`hover:text-primary duration-150 ease-in-out ${pathName === '/Map' ? "text-primary" : "text-black"}`}>Map Location</Link>
                        </li>
                    </ul>
                </div>
            </nav>    
        </>
    );
}

export default Navbar;