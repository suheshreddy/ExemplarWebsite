import React from "react";
import { Link } from "react-router-dom";

import ab03 from '../assets/images/about/ab03.jpg';
import ab02 from '../assets/images/about/ab02.jpg';
import ab01 from '../assets/images/about/ab01.jpg';

import CountUp from 'react-countup';

import {FaRegEnvelope} from '../assets/icons/icons'

export default function WhoWeAre(){
    return(
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={ab03} className="shadow rounded-md" alt="" />
                                <img src={ab02} className="shadow rounded-md" alt="" />
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={ab01} className="shadow rounded-md" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 md:col-span-6">
                    <div className="lg:ms-5">
                        <div className="flex mb-4">
                            <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold" start={1} end={5}></CountUp>+</span>
                            <span className="self-end font-medium ms-2">Years <br /> Of Combined Experience</span>
                        </div>

                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                        <p className="text-slate-400 max-w-xl">We help create a virtual extension of our clients’ enterprise with an operational framework which is simple, flexible and resilient. TekDallas enables its clients to extend current capabilities and build value-added services by providing global access to resources and diverse skill sets, including best practices in multiple processes and technology domains. Our services are designed to aid businesses improve their operational efficiencies, performance and reduce costs.</p>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}