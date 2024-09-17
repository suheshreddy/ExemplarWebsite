import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar/navbar';
import * as Icon from 'react-feather';
import { useParams } from "react-router-dom";
import IndustryHero from "../component/IndustryHero";
 
import {MdKeyboardArrowRight} from "../assets/icons/icons"
export default function Industry() {

    const { id } = useParams();

    const industries = {
        banking: {
          name: "Banking & Financial Services",
          description: "Secure & Trusted financial services.",
        },
        insurance: {
          name: "Insurance",
          description: "Comprehensive Coverage tailored for insurance needs.",
        },
        retail: {
          name: "Retail & CPG",
          description: "Retail Innovation with cutting-edge solutions.",
        },
        manufacturing: {
          name: "Manufacturing",
          description: "Advanced solutions for modern manufacturing.",
        },
        energy: {
          name: "Energy & Utilities",
          description: "Powerful Solutions for efficient energy management.",
        },
        healthcare: {
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
        </>
    ) : (<div>Not</div>)
}
