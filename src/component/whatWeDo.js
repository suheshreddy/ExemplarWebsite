import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import * as Icon from 'react-feather';
import { useParams } from 'react-router-dom';
import IndustryHero from './IndustryHero';
import { startupServices } from '../data/dataTwo';
import WhatweDoFilter from '../component/WhatweDoFilter';
import Footer from './Footer/footer';

import { MdKeyboardArrowRight } from '../assets/icons/icons';
export default function Industry() {
  const { id } = useParams();

  const whatWeDo = {
    'applications-integration': {
      name: 'Applications Integration',
      description:
        'Seamless integration of business applications for enhanced efficiency.',
    },
    'artificial-intelligence': {
      name: 'Artificial Intelligence',
      description:
        'Innovative AI solutions to drive smarter business decisions.',
    },
    'data-analytics': {
      name: 'Data Analytics',
      description: 'Turn data into insights with cutting-edge analytics tools.',
    },
    'data-engineering': {
      name: 'Data Engineering',
      description:
        'Robust data infrastructure for optimized business performance.',
    },
    'digital-workflows': {
      name: 'Digital Workflows',
      description: 'Streamline processes with automated and digital workflows.',
    },
    'cyber-security': {
      name: 'Cyber Security',
      description:
        'Protect your digital assets with world-class security solutions.',
    },
    'infrastructure-cloud': {
      name: 'Infrastructure Cloud',
      description: 'Scalable cloud solutions for modern infrastructure needs.',
    },
    'robotics-process-automation': {
      name: 'Robotics Process Automation',
      description:
        'Automate repetitive tasks with RPA to enhance productivity.',
    },
    'customer-experience': {
      name: 'Customer Experience',
      description: 'Deliver exceptional customer service and experiences.',
    },
  };

  const service = whatWeDo[id.toLowerCase()];

  return service ? (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative table w-full py-32 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Techwind</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      <WhatweDoFilter className="grid lg:w-full mx-auto  grid-cols-1 mt-4 gap-[30px]" />

      <Footer />
    </>
  ) : (
    <div>Not</div>
  );
}
