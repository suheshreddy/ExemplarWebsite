import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import * as Icon from 'react-feather';
import { useParams } from 'react-router-dom';
import IndustryHero from './IndustryHero';
import { startupServices } from '../data/dataTwo';
import WhatweDoFilter from '../component/WhatweDoFilter';
import Footer from './Footer/footer';
import image from '../assets/images/portfolio/01.jpg';
import image1 from '../assets/images/portfolio/02.jpg';
import image2 from '../assets/images/portfolio/03.jpg';
import image3 from '../assets/images/portfolio/04.jpg';
import image4 from '../assets/images/portfolio/05.jpg';
import image5 from '../assets/images/portfolio/06.jpg';
import image6 from '../assets/images/portfolio/07.jpg';
import image7 from '../assets/images/portfolio/08.jpg';
import image8 from '../assets/images/portfolio/09.jpg';
import image9 from '../assets/images/portfolio/010.jpg';
import image10 from '../assets/images/portfolio/011.jpg';
import image11 from '../assets/images/portfolio/012.jpg';

import image12 from '../assets/images/portfolio/1.jpg';
import image13 from '../assets/images/portfolio/2.jpg';
import image14 from '../assets/images/portfolio/3.jpg';
import image15 from '../assets/images/portfolio/4.jpg';
import image16 from '../assets/images/portfolio/5.jpg';
import image17 from '../assets/images/portfolio/6.jpg';
import image18 from '../assets/images/portfolio/7.jpg';
import image19 from '../assets/images/portfolio/8.jpg';
import image20 from '../assets/images/portfolio/20.jpg';
import image21 from '../assets/images/portfolio/21.jpg';
import image22 from '../assets/images/portfolio/22.jpg';
import image23 from '../assets/images/portfolio/23.jpg';

import image25 from '../assets/images/portfolio/10.jpg';
import image26 from '../assets/images/portfolio/11.jpg';
import image27 from '../assets/images/portfolio/12.jpg';
import image28 from '../assets/images/portfolio/13.jpg';
import image29 from '../assets/images/portfolio/14.jpg';
import image30 from '../assets/images/portfolio/9.jpg';
import image31 from '../assets/images/portfolio/15.jpg';
import image32 from '../assets/images/portfolio/16.jpg';


import { MdKeyboardArrowRight } from '../assets/icons/icons';
export default function Industry() {
  const { id } = useParams();

  const whatWeDo = {
    'applications-integration': {
      name: 'Applications Integration',
      description:
        'Seamless integration of business applications for enhanced efficiency.',
       content: [
        {
          image: image1,
          title: "Application Development",
          category:"applications-development",
          description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
        },
        {
          image: image2,
          title: "Application Modernization",
          category:"applications-modernization",
          description: "Repurposing legacy landscapes by moving them to modern and flexible platforms. We assess and test legacy applications to identify and use the best modernization techniques to deliver future-ready solutions with improved usability, security and agility." // No description provided in the screenshot for this tab
        },
        {
          image: image3,
          title: "Application Transformation",
          category:"applications-transformation",
          description: "Redefining outdated and obsolete portfolios to match the requirements of now and future. With thorough testing under the Center of Excellence, the Enterprise Applications are completely re-architected, re-engineered and re-coded to drive improved results." // No description provided in the screenshot for this tab
        }
      ]
      
    },
    'artificial-intelligence': {
      name: 'Artificial Intelligence',
      description:
        'Innovative AI solutions to drive smarter business decisions.',
        content: [
          {
            image: image1,
            title: "Application Development",
            category:"applications-development",
            description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
          },
          {
            image: image1,
            title: "Application Modernization",
            category:"applications-modernization",
            description: "" // No description provided in the screenshot for this tab
          },
          {
            image: image1,
            title: "Application Transformation",
            category:"applications-transformation",
            description: "" // No description provided in the screenshot for this tab
          }
        ]
    },
    'data-analytics': {
      name: 'Data Analytics',
      description: 'Turn data into insights with cutting-edge analytics tools.',
      content: [
        {
          image: image1,
          title: "Application Development",
          category:"applications-development",
          description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
        },
        {
          image: image1,
          title: "Application Modernization",
          category:"applications-modernization",
          description: "" // No description provided in the screenshot for this tab
        },
        {
          image: image1,
          title: "Application Transformation",
          category:"applications-transformation",
          description: "" // No description provided in the screenshot for this tab
        }
      ]
    },
    'data-engineering': {
      name: 'Data Engineering',
      description:
        'Robust data infrastructure for optimized business performance.',
        content: [
          {
            image: image1,
            title: "Application Development",
            category:"applications-development",
            description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
          },
          {
            image: image1,
            title: "Application Modernization",
            category:"applications-modernization",
            description: "" // No description provided in the screenshot for this tab
          },
          {
            image: image1,
            title: "Application Transformation",
            category:"applications-transformation",
            description: "" // No description provided in the screenshot for this tab
          }
        ]
    },
    'digital-workflows': {
      name: 'Digital Workflows',
      description: 'Streamline processes with automated and digital workflows.',
      content: [
        {
          image: image1,
          title: "Application Development",
          category:"applications-development",
          description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
        },
        {
          image: image1,
          title: "Application Modernization",
          category:"applications-modernization",
          description: "" // No description provided in the screenshot for this tab
        },
        {
          image: image1,
          title: "Application Transformation",
          category:"applications-transformation",
          description: "" // No description provided in the screenshot for this tab
        }
      ]
    },
    'cyber-security': {
      name: 'Cyber Security',
      description:
        'Protect your digital assets with world-class security solutions.',
        content: [
          {
            image: image1,
            title: "Application Development",
            category:"applications-development",
            description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
          },
          {
            image: image1,
            title: "Application Modernization",
            category:"applications-modernization",
            description: "" // No description provided in the screenshot for this tab
          },
          {
            image: image1,
            title: "Application Transformation",
            category:"applications-transformation",
            description: "" // No description provided in the screenshot for this tab
          }
        ]
    },
    'infrastructure-cloud': {
      name: 'Infrastructure Cloud',
      description: 'Scalable cloud solutions for modern infrastructure needs.',
      content: [
        {
          image: image1,
          title: "Application Development",
          category:"applications-development",
          description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
        },
        {
          image: image1,
          title: "Application Modernization",
          category:"applications-modernization",
          description: "" // No description provided in the screenshot for this tab
        },
        {
          image: image1,
          title: "Application Transformation",
          category:"applications-transformation",
          description: "" // No description provided in the screenshot for this tab
        }
      ]
    },
    'robotics-process-automation': {
      name: 'Robotics Process Automation',
      description:
        'Automate repetitive tasks with RPA to enhance productivity.',
        content: [
          {
            image: image1,
            title: "Application Development",
            category:"applications-development",
            description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
          },
          {
            image: image1,
            title: "Application Modernization",
            category:"applications-modernization",
            description: "" // No description provided in the screenshot for this tab
          },
          {
            image: image1,
            title: "Application Transformation",
            category:"applications-transformation",
            description: "" // No description provided in the screenshot for this tab
          }
        ]
    },
    'customer-experience': {
      name: 'Customer Experience',
      description: 'Deliver exceptional customer service and experiences.',
      content: [
        {
          image: image1,
          title: "Application Development",
          category:"applications-development",
          description: "Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs."
        },
        {
          image: image1,
          title: "Application Modernization",
          category:"applications-modernization",
          description: "" // No description provided in the screenshot for this tab
        },
        {
          image: image1,
          title: "Application Transformation",
          category:"applications-transformation",
          description: "" // No description provided in the screenshot for this tab
        }
      ]
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
      <WhatweDoFilter className="grid lg:w-full mx-auto  grid-cols-1 mt-4 gap-[30px]"  content={service.content}/>

      <Footer />
    </>
  ) : (
    <div>Not</div>
  );
}
