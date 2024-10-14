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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}