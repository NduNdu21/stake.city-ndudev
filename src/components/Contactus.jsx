import React from "react"; 
import moonPic from "../imgs/moon.svg"
import rocketPic from "../imgs/rocket.svg"
import graphic from "../imgs/graphic.png"


export default function ContactUs() {
    return (
        <div className="bg-wavy-pattern bg-cover bg-[#0D1B2A] bg-no-repeat min-h-screen py-12">

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
                    <img src={graphic} alt="graphic" />
                </div>
            </div>
        </div>
    )
}
