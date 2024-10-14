import React from "react"; 
import moonPic from "../imgs/moon.svg"
import rocketPic from "../imgs/rocket.svg"


export default function Report() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-wavy-pattern bg-[#0D1B2A] bg-cover bg-center">
            
            <img src={moonPic} alt="" className="absolute left-32 bottom-7 w-96 h-96"/>
            <img src={rocketPic} alt="" className="absolute right-52 top-7 w-96 h-96"/>

            {/* Headings outside the card */}
            <div className="text-center mt-4 mb-8">
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">Report Issues</h1>
                <h4 className="text-base lg:text-2xl text-white">
                    Help us improve the app by reporting any bugs or issues you encounter
                </h4>
            </div>
            
            <div className="relative bg-[#0D1B2A] mb-8 p-6 sm:p-8 rounded-lg border border-solid border-[#A0AAB2]/50 shadow-lg w-full max-w-md">
                <form className="space-y-2">
                    <label htmlFor="name" className="text-[#F0F3F5]">Name:</label>
                    <input type="text" placeholder="Name" id="name"
                     className="w-full rounded-md p-2 bg-[#A0AAB2]"/>

                    <label htmlFor="username" className="text-[#F0F3F5]">Username:</label>
                    <input type="text" placeholder="Username" id="username"
                     className="w-full rounded-md p-2 bg-[#A0AAB2]"/>

                    <label htmlFor="email" className="text-[#F0F3F5]">Email:</label>
                    <input type="text" placeholder="Email" id="email"
                     className="w-full rounded-md p-2 bg-[#A0AAB2]"/>

                    <label htmlFor="upload" className="text-[#F0F3F5]">Upload photo:</label>
                    <input type="file" placeholder="Attach photo of issue" id="upload"
                     className={`w-full rounded-md p-2 bg-[#A0AAB2]`}/>

                    <label htmlFor="description" className="text-[#F0F3F5]">Description:</label>
                    <textarea placeholder="Describe the bug/issue" id="description" rows={4}
                     className={`w-full rounded-md p-2 bg-[#A0AAB2]`}></textarea>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-[#20C997] mx-auto items-center p-2 text-[#F0F3F5] text-bold">Submit Report</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
