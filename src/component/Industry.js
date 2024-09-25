import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import * as Icon from 'react-feather';
import { useParams } from 'react-router-dom';
import IndustryHero from '../component/IndustryHero';
import { startupServices } from '../data/dataTwo';
import Footer from '../component/Footer/footer';
import ab03 from '../assets/images/about/ab03.jpg';

import {
  LiaCrosshairsSolid,
  BiLineChart,
  FiAirplay,
  FiFileText,
  GoRocket,
  GoClock,
  LuUsers,
  LuSearch,
  BiUserVoice,
  BiCreditCardAlt,
  FaRegQuestionCircle,
  MdOutlineCollectionsBookmark,
  HiOutlineCog6Tooth,
  RiPresentationFill,
  LiaFileInvoiceDollarSolid,
  RiMoneyCnyBoxLine,
  MdOutlineJoinInner,
  MdOutlineSelectAll,
  AiOutlineFire,
  LiaRulerCombinedSolid,
  TbBuildingSkyscraper,
  TbBuildingMonument,
  LiaMoneyCheckAltSolid,
  LiaUniversitySolid,
  LuPizza,
  FaRegBuilding,
  BiWater,
  LiaDropbox,
  MdCenterFocusWeak,
  AiOutlineDollar,
  BsShieldCheck,
  FiThumbsUp,
  TbKeyboardShow,
  TbAward,
  BsBookmark,
  FaRegStar,
  LuClock,
} from '../assets/icons/icons';

import { MdKeyboardArrowRight } from '../assets/icons/icons';
export default function Industry() {
  const { id } = useParams();

  const industries = {
    'banking-and-financial-services': {
      name: 'Banking & Financial Services',
      heroImage:"../../assets/images/industry/industry-banking-hero.jpg",
      description: 'Secure & Trusted financial services.',
      hero: {
        image: ab03,
        heading: 'Banking Technology Improvements for the Upcoming Digital Age',
        description:
          'Exemplar Info is a technology partner for many midsize banks and financial services companies. At various stages of the project lifecycle, each of these businesses relies on our technical and domain expertise for their unique outsourcing requirements. Core banking, multi-channel banking, credit and finance, payments, cash/investment management, trade finance, tax, risk, and governance are some of the services we offer. We collaborate with world-class technology providers like Microsoft, Oracle, and Functions to provide comprehensive end-user solutions. In addition, we are able to offer our clients high-quality banking IT solutions thanks to our exclusive frameworks, tools, and platforms derived from our extensive project experience.',
      },

      services: [
        {
          icon: RiPresentationFill,
          title: 'Lending & Financing',
          desc: "We shape every lending transaction to meet our clients' unique needs.",
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Structured Finance & Securitization',
          desc: 'We understand the business, regulatory, accounting, tax and administrative issues that come with structured finance and securitization transactions for all asset classes.',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'Project Finance',
          desc: 'Project financing is by its very nature complex. We have the knowledge, skill, and diligence to counsel foreign lenders and investors on conventional, cutting-edge, and complex transactions.',
        },
      ],
    },
    insurance: {
      name: 'Insurance',
      heroImage:"../../assets/images/industry/industry-insurance-hero.jpg",
      description: 'Comprehensive Coverage tailored for insurance needs.',
      hero: {
        image: ab03,
        heading:
          'Our Wide Range of Services Will Get You Into the Future of Insurance.',
        description:
          'In addition to its core technical expertise in a variety of platforms, Exemplar Info contributes valuable insurance knowledge to the project and offers a consultative approach. Utilizing robust practices and industry-standard frameworks, we offer comprehensive development and testing services for policy management, claims management, underwriting, and billing. Through numerous insurance-related product partnerships, Exemplar Info has been able to use product and practice excellence to provide superior customer service.',
      },
      services: [
        {
          icon: RiPresentationFill,
          title: 'Commercial Insurance',
          desc: 'Our extensive knowledge and expertise enable us to comprehend, anticipate, and assist in mitigating the risks you face. â€‹',
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Personal Insurance',
          desc: 'Through our partners, we provide a wide variety of personal insurance solutions.',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'Digital Insurance',
          desc: 'Our main objective is to close the protection gap by making insurance products easier to use and more widely available. â€‹â€‹',
        },
      ],
    },
    'retail-and-consumer-goods': {
      name: 'Retail & CPG',
      heroImage:"../../assets/images/industry/industry-retail-hero.jpg",
      description: 'Retail Innovation with cutting-edge solutions.',
      hero: {
        image: ab03,
        heading:
          'We have helped numerous large and small businesses successfully target their audience, increase traffic, and expand their reach.',
        description:
          'The development of the retail and e-commerce sectors is being fueled by technological advancements. We at Exemplar Info create mobile and web applications and solutions that improve user engagement and efficiency, enabling businesses to expand like never before.The retail and e-commerce industries are implementing a lot of new things, like 24/7 customer support, automation, online shopping portals, faster response times, and so on. Simply adhering to the technology ensures that everything runs smoothly. Additionally, our prominent developers and designers provide solutions for e-commerce and retail app development that are more user-friendly and visually appealing to our clients.',
      },
      services: [
        {
          icon: RiPresentationFill,
          title: 'Omnichannel Retailing',
          desc: 'Retailers are leveraging technology to provide a unified shopping experience across all channels, including physical stores, e-commerce, and mobile.',
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Supply Chain Analytics',
          desc: 'Our advanced analytics solutions are highly efficient and provide richer supply chain intelligence to prepare your retail and CPG business for disruption. ',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'Innovation in Retail',
          desc: "Exemplar Info' data analytics solutions enable retail and CPG companies to use descriptive, prescriptive, predictive, and cognitive analytics to improve predictions based on consumer behavior and to stay ahead in a digitally disrupted world.",
        },
      ],
    },
    manufacturing: {
      name: 'Manufacturing',
      heroImage:"../../assets/images/industry/industry-manufacturing-hero.jpg",
      description: 'Advanced solutions for modern manufacturing.',
      hero: {
        image: ab03,
        heading:
          'The manufacturing sector finds it difficult enough to meet rising customer demands without having to ensure that the expansion does not overburden existing procedures.',
        description:
          "Supply costs must decrease as levels of customer service rise. The list seems to go on and on, including manufacturing processes, organizational silos, industry regulations, and compliance reporting, but the solution begins here.At Exemplar Info, we are aware that cutting-edge technologies like artificial intelligence (AI), big data, and the internet of things (IoT) are creating a rapidly shifting environment, which means that the manufacturing sector's future will increasingly be digital. Navigating this can be time-consuming and challenging. Our skilled and seasoned team will assist you in streamlining your existing manufacturing frameworks and increasing system efficiency through enterprise application design, cutting-edge automation, management, support, and quality assurance.",
      },
      services: [
        {
          icon: RiPresentationFill,
          title: 'Cost Reduction',
          desc: 'Our analytical methodologies help manufacturers identify process improvement opportunities and address cost-effective operations to save millions of dollars in manufacturing, sales, and marketing costs. ',
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Improve Supply Chain',
          desc: 'Ensuring that products reach customers at the right time is critical to any supply chain process. It helps streamline and automate supply chain processes, making manual tasks faster and less tedious. ',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'Leverage Latest Technology',
          desc: 'We see a shift in technology in the way manufacturers embrace technological advancements. Be ahead of the market before your competitors implement new technology to scale and improve your results. ',
        },
      ],
    },
    'energy-utilities': {
      name: 'Energy & Utilities',
      heroImage:"../../assets/images/industry/industry-energyhero.jpg",
      description: 'Powerful Solutions for efficient energy management.',
      hero: {
        image: ab03,
        heading:
          'Utilities and energy providers in a variety of nations are confronted with cost-cutting requirements, rising customer demands, regulatory requirements, and environmental mandates.',
        description:
          'In the oil and gas sector, Exemplar Info has a long history. Exemplar Info is also an expert in the business-to-business and energy sectors. We attend numerous global events related to the energy industry and actively participate in the following industry groups each year.We collaborate with numerous oil and gas industry segments across the globe with hundreds of businesses. Exemplar Info is well-known and respected by media outlets in a variety of industries worldwide. In addition, we are conveniently situated in major energy hubs.',
      },
      services: [
        {
          icon: RiPresentationFill,
          title: 'Energy Experience and Scope',
          desc: 'Let us help you understand your options. Our staff are experienced in oil and gas, renewable energy and the energy transition. ',
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Full-service offering',
          desc: 'With over 100 professionals across our businesses, we assist clients with all energy issues, from mergers and acquisitions (M&A) and valuations to restructuring. ',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'We are where you are',
          desc: 'We combine global reach with local expertise to help you achieve your goals and ambitions. ',
        },
      ],
    },
    'life-sciences-healthcare': {
      name: 'Life Sciences & Healthcare',
      description: 'Supporting healthcare excellence.',
      heroImage:"../../assets/images/industry/industry-lefescience-hero.jpg",
      hero: {
        image: ab03,
        heading:
          'Our life sciences and healthcare experts can help your business grow.',
        description:
          'Healthcare advancements have resulted in new treatment options, increased life expectancy, and a better ability to deal with health challenges. It is only natural that the IT systems in healthcare organisations be updated and equipped to improve productivity, better handle patients, and aid in healthcare reform.Exemplar Info provides IT consulting services to healthcare organisations in order to drive efficient and cost-effective patient solutions. We take a patient-centered approach to addressing healthcare challenges through strategic planning and optimal solutions.',
      },
      services: [
        {
          icon: RiPresentationFill,
          title: 'Data Analysis in Healthcare',
          desc: 'Analyzing all your health data can yield interesting insights for innovation. We support data collection and analysis of patients, doctors, nurses, medical devices, etc. ',
        },
        {
          icon: LiaFileInvoiceDollarSolid,
          title: 'Cybersecurity in healthcare',
          desc: 'Exemplar Info provides robust, all-encompassing cybersecurity solutions that protect healthcare organisations from any device, avoiding costly ransom fees and downtime.',
        },
        {
          icon: LiaMoneyCheckAltSolid,
          title: 'Operational Transformation',
          desc: 'We advise, design, implement and operate industry-specific solutions and programs that transform core business processes, maximize operational efficiency and optimize capital expenditures. ',
        },
      ],
    },
  };

  const industry = industries[id.toLowerCase()];

  return industry ? (
    <>
      <Navbar navClass="nav-light" />

{id.toLowerCase() === 'life-sciences-healthcare' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-banking-hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }



      {id.toLowerCase() === 'energy-utilities' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-energyhero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }

      {id.toLowerCase() === 'manufacturing' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-manufacturing-hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }

      {id.toLowerCase() === 'retail-and-consumer-goods' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-retail-hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }
      {id.toLowerCase() === 'insurance' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-insurance-hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }

      {id.toLowerCase() === 'banking-and-financial-services' &&       <section className="relative table w-full py-32 bg-[url('../../assets/images/industry/industry-banking-hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
            Industry
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {industry.name}
            </li>
          </ul>
        </div>
      </section> }
      
      <IndustryHero content={industry.hero} />

      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Services
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Exemplar Info that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {industry.services.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                >
                  <div className="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                    <Icons className="size-6" />
                  </div>

                  <div className="content mt-7">
                    <Link
                      to="/page-services"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  ) : (
    <div>Not</div>
  );
}
