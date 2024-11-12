import React from "react";
import graphic2 from "../imgs/graphic 2.svg"
import discord from "../imgs/discord-icon.svg"
import twitter from "../imgs/x-icon.svg"
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

export default function ContactUs() {
    return (
        <div className="bg-space bg-scroll bg-no-repeat min-h-screen py-12">
            <div className="flex flex-row flex-wrap md:flex-nowrap px-5">
                <div className="bg-black/30">
                    <h1 className="text-[#F0F3F5] text-7xl font-semibold mb-7">Contact Us</h1>
                    <form action="POST" className="bg-gradient-to-r from-[#0d1b2a]/80 to-[#20c999]/80 rounded-lg border-4 border-[#f0f3f5] p-5 w-fit md:w-3/5 h-auto">
                        <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400  shadow-sm bg-[#0D1B2A] text-lg font-normal rounded-lg border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Name" />
                        <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-[#0D1B2A] text-lg font-normal rounded-lg border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Username" />
                        <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-[#0D1B2A] text-lg font-normal rounded-lg border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Email" />
                        <textarea rows={2} className="w-full text-[#F0F3F5] placeholder-gray-400 bg-[#0D1B2A] text-lg shadow-sm font-normal  rounded-lg border border-[#A0AAB2] focus:outline-none p-4 mb-5" placeholder="Message" />
                        <button className="h-8 w-full text-white text-base font-semibold rounded-full transition-all duration-700 bg-[#20C997]">Send</button>
                    </form>
                </div>
                <div className="bg-black/60">
                    <img src={graphic2} alt="graphic" className="w-80 h-80" />
                    <div className="bg-gradient-to-r from-[#0d1b2a]/80 to-[#20c999]/80 rounded-lg border-4 border-[#f0f3f5]">
                        <div id="contact" className="flex align-middle m-4">
                            <HiLocationMarker className="w-5 h-5 text-[#F0F3F5] mx-1" />
                            <p className="text-[#F0F3F5]">London, England</p>
                            <HiMail className="w-5 h-5 text-[#F0F3F5] mx-1" />
                            <p className="text-[#F0F3F5]">stake.city@gmail.com</p>
                            <HiPhone className="w-5 h-5 text-[#F0F3F5] mx-1" />
                            <p className="text-[#F0F3F5]">+123 456789999</p>
                        </div>
                        <div id="socials" className="flex justify-evenly m-2">
                            <a href="http://"><img src={discord} alt="" className="w-10 h-10" /></a>
                            <a href="http://"><img src={twitter} alt="" className="w-10 h-10" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
