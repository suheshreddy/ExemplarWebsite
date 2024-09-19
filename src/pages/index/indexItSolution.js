import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/hero1.png';
import shape_image from '../../assets/images/shape-image.png';

import Navbar from '../../component/Navbar/navbar';
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import CookieModal from '../../component/cookieModal';
import Blog from '../../component/blog';
import CompanyLogo from '../../component/companyLogo';
import WhoWeAre from '../../component/whoWeAre';
import Cta from '../../component/cta';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import * as Icon from 'react-feather';
import { MdOutlineEventNote, FaRegEnvelope } from '../../assets/icons/icons';
import { about } from '../../data/dataTwo';

import marketing from '../../assets/images/marketing.png';
import SEO_SVG from '../../assets/images/illustrator/SEO_SVG.svg';
import feature from '../../assets/images/feature.png';

import UserFeedBack2 from '../../component/userFeedBack2';

import '../../../node_modules/react-modal-video/css/modal-video.css';
import CountUp from 'react-countup';

import { marketingContact } from '../../data/dataFour';

import { FaArrowRight, FaRobot, FaUserFriends } from 'react-icons/fa';
import {
  BsCheckCircle,
  BsBriefcase,
  BsLightbulb,
  BsBarChart,
  BsDatabase,
  BsGear,
  BsShield,
  BsCloud,
} from 'react-icons/bs';

const whatWeDo = [
  {
    name: 'Applications Integration',
    url: '/what-we-do/applications-integration',
    description:
      'Seamless integration of business applications for enhanced efficiency.',
    icon: BsBriefcase,
  },
  {
    name: 'Artificial Intelligence',
    url: '/what-we-do/artificial-intelligence',
    description: 'Innovative AI solutions to drive smarter business decisions.',
    icon: BsLightbulb,
  },
  {
    name: 'Data Analytics',
    url: '/what-we-do/data-analytics',
    description: 'Turn data into insights with cutting-edge analytics tools.',
    icon: BsBarChart,
  },
  {
    name: 'Data Engineering',
    url: '/what-we-do/data-engineering',
    description:
      'Robust data infrastructure for optimized business performance.',
    icon: BsDatabase,
  },
  {
    name: 'Digital Workflows',
    url: '/what-we-do/digital-workflows',
    description: 'Streamline processes with automated and digital workflows.',
    icon: BsGear,
  },
  {
    name: 'Cyber Security',
    url: '/what-we-do/cyber-security',
    description:
      'Protect your digital assets with world-class security solutions.',
    icon: BsShield,
  },
  {
    name: 'Infrastructure Cloud',
    url: '/what-we-do/infrastructure-cloud',

    description: 'Scalable cloud solutions for modern infrastructure needs.',
    icon: BsCloud,
  },
  {
    name: 'Robotics Process Automation',
    url: '/what-we-do/robotics-process-automation',
    description: 'Automate repetitive tasks with RPA to enhance productivity.',
    icon: FaRobot,
  },
  {
    name: 'Customer Experience',
    url: '/what-we-do/customer-experience',
    description: 'Deliver exceptional customer service and experiences.',
    icon: FaUserFriends,
  },
];

export default function IndexItSolution() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-indigo-600 bg-[url('../../assets/images/bg2.png')] bg-center bg-no-repeat bg-cover">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7">
              <div className="md:me-6 md:mb-20">
                {/*<h5 className="text-lg text-white/60"></h5>*/}
                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
                  We Accelerate Your Business With <br />
                  Perfection{' '}
                </h4>
                <p className="text-white/60 text-lg max-w-xl">
                  We adopt industry-specific software testing models for the
                  desired quality and delivery of the best solution at minimum
                  risk
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img src={hero1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="py-6 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <CompanyLogo />
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mb-24 mb-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What we do ?
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We see technology as an enabler for changing business models. We
              adapt fast and enable a full spectrum of new age technology
              services for our customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {whatWeDo.map((data, index) => {
              const Icons = data.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                      <Icons className="size-7" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to={data.url}
                      className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out"
                    >
                      {data.name}
                    </Link>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <WhoWeAre />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="lg:ms-8">
                <img src={shape_image} alt="" />
              </div>
            </div>

            <div className="md:col-span-6 order-2 md:order-1">
              <div className="lg:me-5">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  SMART & INNOVATIVE
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Innovate with AI Solutions
                  <br />
                  Powered by Exemplar Info
                </h3>

                <p className="text-slate-400 max-w-xl mb-6">
                  Our cutting-edge AI services revolutionize business operations
                  through intelligent automation and data-driven insights. We
                  empower companies to harness the full potential of artificial
                  intelligence, implementing smart algorithms and machine
                  learning models that drive efficiency, enhance
                  decision-making, and unlock new opportunities in an
                  increasingly AI-driven world.
                </p>

                <Link
                  to="/contact-one"
                  className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  <MdOutlineEventNote className="me-2 text-lg" /> Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
            <div className="lg:col-span-8 md:col-span-12">
              <div className="grid grid-cols-1 pb-8">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Industries We Serve <br />
                </h3>

                <p className="text-slate-400 max-w-xl">
                  Our seasoned team is highly focused and has vast knowledge in
                  a variety of domains. We provide professionally certified and
                  business-centric solutions across a broad array of industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.Codesandbox className="size-12 stroke-1 text-indigo-600"></Icon.Codesandbox>

                  <div className="content mt-7">
                    <Link
                      to="/industries/banking-and-financial-services"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Banking & Financial Services
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Secure & Trusted The financial services industry depends
                      on secure, robust solutions that support efficient
                      operations.
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/banking-and-financial-services"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.Send className="size-12 stroke-1 text-indigo-600"></Icon.Send>

                  <div className="content mt-7">
                    <Link
                      to="/industries/insurance"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Insurance
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Comprehensive Coverage Leverage insurance expertise with
                      tailored solutions that meet industry standards.
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/insurance"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.Star className="size-12 stroke-1 text-indigo-600"></Icon.Star>

                  <div className="content mt-7">
                    <Link
                      to="/industries/retail-and-consumer-goods"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Retail & CPG
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Retail Innovation Delivering cutting-edge solutions to
                      enhance customer experience and streamline operations.
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/retail-and-consumer-goods"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.Bookmark className="size-12 stroke-1 text-indigo-600"></Icon.Bookmark>

                  <div className="content mt-7">
                    <Link
                      to="/industries/manufacturing"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Manufacturing
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Advanced Manufacturing Boost efficiency and optimize
                      processes with modern manufacturing solutions.t
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/manufacturing"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12">
              <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.Users className="size-12 stroke-1 text-indigo-600"></Icon.Users>

                  <div className="content mt-7">
                    <Link
                      to="/industries/energy-utilities"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Energy & Utilities
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Powerful Solutions Efficient energy management and
                      innovative utilities systems tailored for modern needs.
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/energy-utilities"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                  <Icon.MessageCircle className="size-12 stroke-1 text-indigo-600"></Icon.MessageCircle>

                  <div className="content mt-7">
                    <Link
                      to="/industries/life-sciences-healthcare"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      Life Sciences & Healthcare
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Healthcare Excellence Supporting life sciences with
                      advanced solutions in healthcare and pharmaceutical
                      fields.
                    </p>

                    <div className="mt-5">
                      <Link
                        to="/industries/life-sciences-healthcare"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:start-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
            <div className="overflow-hidden after:content-[''] after:absolute after:size-[512px] after:bg-indigo-600/5 after:top-1/4 after:end-0 after:-z-1 after:rounded-full"></div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <img src={shape_image} alt="" />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-5">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Secure & Trusted
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Effective Financial Services
                  <br /> With Exemplar Info
                </h3>

                <p className="text-slate-400 max-w-xl mb-6">
                  The financial services industry relies on secure and robust
                  solutions designed to streamline operations and ensure
                  efficiency.
                </p>

                <Link
                  to="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="lg:ms-8">
                <img src={SEO_SVG} alt="" />
              </div>
            </div>

            <div className="md:col-span-6 order2 md:order-1">
              <div className="lg:me-5">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  TAILORED COVERAGE
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Insurance Solutions for Every Need
                </h3>

                <p className="text-slate-400 max-w-xl">
                  Leverage expert solutions tailored to the insurance industry's
                  standards, offering comprehensive protection for businesses
                  and individuals.
                </p>

                <ul className="list-none text-slate-400 my-6">
                  <li className="mb-1 flex items-center ms-0">
                    <BsCheckCircle className="text-indigo-600 text-base me-2" />{' '}
                    Customized Coverage Options for All Industries
                  </li>
                  <li className="mb-1 flex items-center ms-0">
                    <BsCheckCircle className="text-indigo-600 text-base me-2" />{' '}
                    Experienced Professionals with Deep Industry Expertise
                  </li>
                  <li className="mb-1 flex items-center ms-0">
                    <BsCheckCircle className="text-indigo-600 text-base me-2" />{' '}
                    Scalable Solutions Designed for Your Growth
                  </li>
                </ul>

                <Link
                  to="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieModal />
    </>
  );
}
