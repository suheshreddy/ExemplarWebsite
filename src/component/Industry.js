import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar/navbar';
import * as Icon from 'react-feather';
import { useParams } from "react-router-dom";
import IndustryHero from "../component/IndustryHero";
import { startupServices } from '../data/dataTwo';
import Footer from '../component/Footer/footer';

import {MdKeyboardArrowRight} from "../assets/icons/icons"
export default function Industry() {

    const { id } = useParams();

    const industries = {
      "banking-and-financial-services": {
        name: "Banking & Financial Services",
        description: "Secure & Trusted financial services.",
      },
      insurance: {
        name: "Insurance",
        description: "Comprehensive Coverage tailored for insurance needs.",
      },
      "retail-and-consumer-goods": {
        name: "Retail & CPG",
        description: "Retail Innovation with cutting-edge solutions.",
      },
      manufacturing: {
        name: "Manufacturing",
        description: "Advanced solutions for modern manufacturing.",
      },
      "energy-utilities": {
        name: "Energy & Utilities",
        description: "Powerful Solutions for efficient energy management.",
      },
      "life-sciences-healthcare": {
        name: "Life Sciences & Healthcare",
        description: "Supporting healthcare excellence.",
      },
    };
    

      const industry = industries[id.toLowerCase()];

    return industry ? (
        <>
            <Navbar navClass="nav-light" />


            <section className="relative table w-full py-32 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Contact Us</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Contact Us</li>
                    </ul>
                </div>
            </section>

            <IndustryHero />

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {startupServices.map((item,index)=>{
                            let Icons = item.icon
                            return(
                                <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                    <div
                                        className="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                            <Icons className="size-6"/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                       
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    ) : (<div>Not</div>)
}
