import React from "react";
import { Link } from "react-router-dom";

import ab03 from '../assets/images/about/ab03.jpg';
import ab02 from '../assets/images/about/ab02.jpg';
import ab01 from '../assets/images/about/ab01.jpg';

import CountUp from 'react-countup';

import {FaRegEnvelope} from '../assets/icons/icons'

export default function IndustryHero(props){
    return(
        <div className="container relative py-10">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-3 md:col-span-4">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-12">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={props.content.image} className="shadow rounded-md" alt="" />
                                
                            </div>
                        </div>

              
                    </div>
                </div>

                <div className="lg:col-span-9 md:col-span-8">
                    <div className="lg:ms-5">
              

                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{props.content.heading}</h3>

                        <p className="text-slate-400 max-w-full">{props.content.description}</p>

          
                    </div>
                </div>
            </div>
        </div>
    )
}