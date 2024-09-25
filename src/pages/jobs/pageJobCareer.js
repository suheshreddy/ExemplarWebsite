import React from 'react';
import { Link } from 'react-router-dom';

import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';

import Navbar from '../../component/Navbar/navbar';
import JobFooter from '../../component/Footer/jobFooter';
import CountUp from 'react-countup';
import MobileApp from '../../component/mobileApp';

import { FaArrowRight, MdKeyboardArrowRight } from '../../assets/icons/icons';
import Footer from '../../component/Footer/footer';

export default function PageJobCareer() {
  return (
    <>
      <Navbar navClass="nav-light" />
      <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-12">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Job Opening
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
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index-job">Job</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Job Opening
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
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

      <section className="relative md:py-24 py-16">


        <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
  <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
    Job Openings
  </h3>

  <p className="text-slate-400 max-w-xl mx-auto">
    Explore exciting career opportunities and join our team of professionals dedicated to excellence. Check out our latest job openings and be part of our growing community.
  </p>
</div>


          <div className="lg:flex justify-center mt-8">
            <div className="lg:w-3/4">
              <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500">
                <div>
                  <Link
                    to="/job-detail/marketing-manager"
                    className="text-lg font-semibold hover:text-indigo-600"
                  >
                    Marketing Manager
                  </Link>
                  <p className="text-slate-400 mt-1">Total Openings: 1</p>
                </div>

                <Link
                  to="/job-detail/marketing-manager"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4"
                >
                  Apply now
                </Link>
              </div>

              <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500 mt-6">
                <div>
                  <Link
                    to="/job-detail/recruitment-officer"
                    className="text-lg font-semibold hover:text-indigo-600"
                  >
                    Recruitment Officer
                  </Link>
                  <p className="text-slate-400 mt-1">Total Openings: 2</p>
                </div>

                <Link
                  to="/job-detail/recruitment-officer"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4"
                >
                  Apply now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
