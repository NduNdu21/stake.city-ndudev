import React from "react"; 
import graphic from "../imgs/graphic.png"
import discord from "../imgs/discord-icon.svg"
import twitter from "../imgs/x-icon.svg"
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";


export default function ContactUs() {
    return (
        <div className="bg-space-bg bg-cover bg-no-repeat min-h-screen py-12">

            <div className="flex flex-row justify-evenly px-10">
                <form action="POST" className=" bg-[#0D1B2A]/85 p-5 w-2/5 h-auto rounded-2xl shadow-md shadow-[#A0AAB2]">
                    <h2 className="text-[#F0F3F5] text-3xl font-semibold mb-7">Contact Us</h2>
                    <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Name" />
                    <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Username" />
                    <input type="text" className="h-8 w-full text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-5" placeholder="Email" />
                    <textarea rows={2} className="w-full text-[#F0F3F5] placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal  rounded-full border border-[#A0AAB2] focus:outline-none p-4 mb-5" placeholder="Message" />
                    <button className="h-8 w-full text-white text-base font-semibold rounded-full transition-all duration-700 bg-[#20C997]">Send</button>
                </form>
                <div>
                    <img src={graphic} alt="graphic" className="w-48 h-48" />
                    <div id="contact" className="flex m-5"> 
                        <HiLocationMarker className="w-5 h-5 text-[#F0F3F5] mx-1" />
                        <p className="text-[#F0F3F5]">London, England</p>
                        <HiMail className="w-5 h-5 text-[#F0F3F5] mx-1"/>
                        <p className="text-[#F0F3F5]">stake.city@gmail.com</p>
                        <HiPhone className="w-5 h-5 text-[#F0F3F5] mx-1"/>
                        <p className="text-[#F0F3F5]">+123 456789999</p>
                    </div>
                    <div id="socials" className="flex">
                        <a href="http://"><img src={discord} alt="" className="w-10 h-10"/></a>
                        <a href="http://"><img src={twitter} alt="" className="w-10 h-10"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
