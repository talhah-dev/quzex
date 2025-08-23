"use client"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { PiBuildings } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const Footer = () => {
    const [email, setEmail] = useState<string>("");

    const emailSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="md:mt-20 mt-10">
                <div className="bg-zinc-100">
                    <div className=" p-5 max-w-7xl w-full mx-auto">
                        <footer className=" flex border-y justify-between lg:flex-row flex-col flex-wrap gap-14  py-10 border-[#ffffff18]">
                            <div className="">
                                <Link href={"/"} >
                                    <Image src={"/quzex.png"} width={200} height={200} className="w-auto mx-auto h-10 md:mx-0 brightness-0" alt="Logo" />
                                </Link>

                                <div className="flex text-zinc-600 items-center gap-6 md:mt-20 mt-8 justify-center md:justify-start">
                                    <Link href={"http://wa.me/+923152666263"} target="_blank">
                                        <FaWhatsapp size={26} className="hover:text-zinc-800 transition-all duration-500" />
                                    </Link>
                                    <Link href={"https://www.linkedin.com/"} target="_blank">
                                        <FaLinkedinIn size={24} className="hover:text-zinc-800 transition-all duration-500" />
                                    </Link>
                                    <Link href={"https://www.instagram.com/"} target="_blank">
                                        <FaInstagram size={24} className="hover:text-zinc-800 transition-all duration-500" />
                                    </Link>
                                    <Link href={"https://www.facebook.com/"} target="_blank">
                                        <FaFacebookF size={23} className="hover:text-zinc-800 transition-all duration-500" />
                                    </Link>
                                </div>
                                <div className="flex ">
                                    <Link href={"/login"} className="hover:gap-5 transition-all duration-500 px-6 py-2 rounded-full border border-zinc-600 flex items-center gap-3 mt-4 text-zinc-800">
                                        Sign In <BsArrowDown className="-rotate-90" />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex md:gap-20 flex-wrap md:flex-row flex-col gap-8">
                                <div className="xl:pr-20">
                                    <h4 className="text-xl font-medium text-zinc-800">Quick Links</h4>
                                    <ul className="mt-3.5 text-zinc-600 space-y-4">
                                        <li><Link href={"/"} className="hover:underline">Home</Link></li>
                                        <li><Link href={"/about"} className="hover:underline">About Us</Link></li>
                                        <li><Link href={"/services"} className="hover:underline">Services</Link></li>
                                        <li><Link href={"/project"} className="hover:underline">Projects</Link></li>
                                        <li><Link href={"/contact"} className="hover:underline">Contact Us</Link></li>
                                        <li><Link href={"/blog"} className="hover:underline">Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h4 className="text-xl font-medium text-zinc-800">Get In Touch</h4>
                                    <ul className="mt-3.5 text-zinc-600 space-y-3">
                                        <li className=" flex items-center gap-2"><PiBuildings size={18} />Pakistan, Karachi</li>
                                        <li><Link href={"mailto:ezbrandbuilders@gmail.com"} className="hover:underline flex items-center gap-2"><IoMailOutline size={18} />quzex@gmail.com</Link></li>
                                        <li><Link href={"tel:+923201091220"} className="hover:underline flex items-center gap-1.5"><MdOutlinePermPhoneMsg size={18} />+92 3152666263</Link></li>
                                    </ul>
                                </div>
                                <form onSubmit={emailSubmitHandler}>
                                    <h4 className="text-xl font-medium text-zinc-800 ">Subscribe us latest updates</h4>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder="abc@gmail.com"
                                        type="email"
                                        className="px-3 py-2 outline-0 text-zinc-800  rounded-lg border border-zinc-600 mt-3.5 w-full"
                                    />
                                    <div className="flex items-end justify-end mt-2">
                                        <button className="bg-zinc-200 cursor-pointer px-4 py-1 rounded-full ">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </footer>
                    </div>

                    <div className="flex items-center text-zinc-600 max-w-7xl w-full lg:flex-row flex-col-reverse mx-auto px-5 gap-5 pb-5 justify-between">
                        <p className="text-center">
                            Copyright © 2025 <Link href={"/"} className="text-zinc-800 hover:underline transition-all duration-500">QUZEX</Link>. All rights reserved.
                        </p>
                        <div className="flex items-center ">
                            <Link href={"/"} className="hover:text-zinc-800 transition-all duration-500 border-r border-[#ffffff21] pr-4">Privacy Policy</Link>
                            <Link href={"/"} className="hover:text-zinc-800 transition-all duration-500 pl-4">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
