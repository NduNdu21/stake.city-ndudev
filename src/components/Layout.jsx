import React from "react";
//import bgImage from "../imgs/lines.svg";
import { useState } from "react";
import moon from "../imgs/moon.svg"
import rocket from "../imgs/rocket.svg"
import styles from "./Dashboard.module.css"


export default function Layout() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <section className="bg-wavy-pattern bg-cover bg-[#0D1B2A] bg-no-repeat min-h-screen py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                {/* <img src={bgImage} alt="" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#0D1B2A] object-cover shadow-lg shadow-black"/> */}
                                <img src={moon} alt="moon" className={`absolute left-8 sm:left-16 md:left-32 bottom-2 sm:bottom-5 w-28 sm:w-48 md:w-64 h-auto ${styles.float}`}/>
                                <img src={rocket} alt="rocket" className={`absolute right-2 sm:right-4 md:right-26 top-2 sm:top-5 w-28 sm:w-48 md:w-64 h-auto ${styles.float}`}/>

                                <h1 className="text-[#F0F3F5] text-4xl font-bold leading-10 absolute top-11 left-11 opacity-0">Report</h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    {/* Section for logos and contact details if needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="POST" className="relative bg-[#0D1B2A]/85 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl shadow-md shadow-[#A0AAB2]">
                        <h2 className="text-[#F0F3F5] text-3xl font-semibold leading-10 mb-10">Found an issue?</h2>
                        <input type="text" className="w-full h-8 sm:h-10 text-[#F0F3F5] placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Name"/>
                        <input type="text" className="w-full h-8 sm:h-10 text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Username"/>
                        <input type="text" className="w-full h-8 sm:h-10 text-[#F0F3F5] placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-[#A0AAB2] focus:outline-none pl-4 mb-7" placeholder="Email"/>
                        <div className="relative inline-block mb-7">
                            <button className="bg-[#20C997] text-[#F0F3F5] px-4 py-1">
                                {selectedFile ? selectedFile.name : "Choose File"}
                            </button>
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                onChange={handleFileChange}
                            />
                        </div>
                        <textarea rows={2} className="w-full text-[#F0F3F5] placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-[#A0AAB2] focus:outline-none p-4 mb-7" placeholder="Message"/>
                        <button className="w-full h-8 sm:h-10 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 bg-[#20C997]">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}