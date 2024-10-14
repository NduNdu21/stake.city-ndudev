import React from "react";
import bgImage from "../imgs/lines.svg";

export default function Layout() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mb-0 mb-10">
                        <div className="group w-full h-full">
                            <div className="relative h-full">
                                <img src={bgImage} alt="" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#0D1B2A] object-cover"/>
                                <h1 className="text-[#F0F3F5] text-4xl font-bold leading-10 absolute top-11 left-11">Report Bugs</h1>
                                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                    {/* Section for logos and contact details if needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0D1B2A] p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                        <h2 className="text-4xl font-semibold leading-10 mb-11">Send us a message</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}