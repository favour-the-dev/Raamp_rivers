import Image from "next/image";
import rivers_logo from "../../public/assets/images/raamp_rivers logo.jpeg";
import raamp_logo from '../../public/assets/images/Raamp_logo.jpeg';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
function Footer() {
    const year = new Date().getFullYear()
    return ( 
        <>
            <footer className="bg-[#1E201E] text-white">
                <div className="p-4 wrapper-cont grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 content-start place-items-start md:place-items-center">
                    <div className="flex flex-col gap-3 w-fit">
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
                            className="md:hidden"
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
                            className="md:hidden"
                            />
                            <p className="flex flex-col items-start md:items-center font-bold whitespace-nowrap">
                                <span className="uppercase text-xs md:text-lg tracking-widest text-primary">Rivers State</span>
                                <span className="italic text-xs md:scale-100 text-primary">Project Implementation Unit</span>
                            </p>
                        </div>
                        <p className="text-sm md:text-base">
                        The principal goal of RAAMP is to improve the livelihood of small holding farmers and micro agro-processors through the provision of rural access and transportation system.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h3 className="font-semibold text-xl">About RAAMP</h3>
                        <ul className="list-disc">
                            <li><Link href={'/About'}>About Us</Link></li>
                            <li><Link href={'#raampobj'}>RAAMP Objectives</Link></li>
                            <li><Link href={'#mission&obj'}>Mission & Vision</Link></li>
                            <li><Link href={'#raampobj'}>The Goal of RAAMP</Link></li>
                            <li><Link href={'#spiuteam'}>Management Team</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h3 className="font-semibold text-xl">Quick Links</h3>
                        <ul className="list-disc">
                            <li><Link href={'/Projects'}>Projects</Link></li>
                            <li><Link href={'/Contact'}>Contact US</Link></li>
                            <li><Link href={'/Media'}>Media Gallery</Link></li>
                            <li><Link href={'/News'}>News & Events</Link></li>
                            <li><Link href={'#straPart'}>Strategic Partners</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h3 className="font-semibold text-xl">Contact Info</h3>
                        <p className="flex items-center gap-1"><CiLocationOn className="text-5xl"/> 1st FLoor, Point Block, Secreteriat Complex, Port-Harcourt, Rivers State.</p>
                        <p className="flex items-center gap-1"><CiPhone className="text-2xl"/> +234 803 670 2642</p>
                        <p className="flex items-center gap-1"><CiMail className="text-2xl"/> RiversState@raamp.gov.ng</p>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="wrapper-cont flex flex-col gap-2 md:flex-row items-center justify-center md:justify-between">
                        <div className="">CopyRight &copy; {year} Rivers State RAAMP PIU. All Right Reserved.</div>
                        <div className="flex items-center gap-2 text-xl">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaXTwitter /></a>
                            <a href=""><FaLinkedinIn /></a>
                            <a href=""><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;