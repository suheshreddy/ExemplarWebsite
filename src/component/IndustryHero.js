import React from "react";
import { Link } from "react-router-dom";

import ab03 from '../assets/images/about/ab03.jpg';
import ab02 from '../assets/images/about/ab02.jpg';
import ab01 from '../assets/images/about/ab01.jpg';

import CountUp from 'react-countup';

import {FaRegEnvelope} from '../assets/icons/icons'

export default function IndustryHero(){
    return(
        <div className="container relative py-10">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-3 md:col-span-4">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-12">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={ab03} className="shadow rounded-md" alt="" />
                                
                            </div>
                        </div>

              
                    </div>
                </div>

                <div className="lg:col-span-9 md:col-span-8">
                    <div className="lg:ms-5">
              

                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Banking Technology Improvements for the Upcoming Digital Age</h3>

                        <p className="text-slate-400 max-w-full">TekDallas is a technology partner for many midsize banks and financial services companies. At various stages of the project lifecycle, each of these businesses relies on our technical and domain expertise for their unique outsourcing requirements. Core banking, multi-channel banking, credit and finance, payments, cash/investment management, trade finance, tax, risk, and governance are some of the services we offer. We collaborate with world-class technology providers like Microsoft, Oracle, and Functions to provide comprehensive end-user solutions. In addition, we are able to offer our clients high-quality banking IT solutions thanks to our exclusive frameworks, tools, and platforms derived from our extensive project experience.</p>

          
                    </div>
                </div>
            </div>
        </div>
    )
}