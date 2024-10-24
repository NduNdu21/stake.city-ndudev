import React from "react";
//import bgImage from "../imgs/lines.svg";
import { useState } from "react";
import moon from "../imgs/moon.svg"
import rocket from "../imgs/rocket.svg"
import styles from "./Dashboard.module.css"
import logo from "../logo7.svg"
import graphic from "../imgs/report graphic.svg"


export default function Layout() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className="bg-wavy-pattern bg-cover bg-[#0D1B2A] bg-no-repeat min-h-screen py-12">
            {/* <h1 className="text-[#F0F3F5] text-4xl font-bold leading-10 absolute top-11 left-11">Found an issue?</h1> */}
            
            <div className="flex flex-row justify-stretch gap-10">
                <div>
                    {/* <img src={moon} alt="moon" className={`w-52 h-auto ${styles.float}`} />
                    <img src={rocket} alt="rocket" className={`w-52 h-auto ${styles.float}`} />
                    <img src={logo} alt="logo" className="w-52 h-auto" /> */}
                    <img src={graphic} alt="graphic" />
                </div>
                <form action="POST" className=" bg-[#0D1B2A]/85 p-5 w-64 rounded-2xl shadow-md shadow-[#A0AAB2]">
                    <h2 className="text-[#F0F3F5] text-3xl font-semibold mb-10">Report it here:</h2>
                    <input type="text" className="h-8 text-[#F0F3F5] placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Name" />
                    <input type="text" className="h-8 text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Username" />
                    <input type="text" className="h-8 text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Email" />
                    <div className="relative inline-block mb-7">
                        <button className="bg-[#20C997] text-[#F0F3F5] px-4 py-1">
                            {selectedFile ? selectedFile.name : "Choose File"}
                        </button>
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer h-full"
                            onChange={handleFileChange}
                        />
                    </div>
                    <textarea rows={2} className=" text-[#F0F3F5] placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal  rounded-full border border-[#A0AAB2] focus:outline-none p-4 mb-7" placeholder="Message" />
                    <button className="h-8 text-white text-base font-semibold rounded-full transition-all duration-700 bg-[#20C997]">Send</button>
                </form>
            </div>
        </div>
    )
}