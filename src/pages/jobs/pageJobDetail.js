import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../component/Navbar/navbar';

import JobFooter from '../../component/Footer/jobFooter';
import MobileApp from '../../component/mobileApp';

import { jobGrid } from '../../data/data';
import * as Icon from 'react-feather';
import { MdKeyboardArrowRight, RiMapPinLine } from '../../assets/icons/icons';

import {
  jobDuties,
  jobRequirements,
  jobNice,
  jobBenefits,
} from '../../data/dataFive';
import Footer from '../../component/Footer/footer';

const job1 = {
  title: 'Marketing Manager',
  location: {
    city: 'Hyderabad',
    country: 'India',
  },
  type: 'Full Time',
  company: 'Exemplar Info',
  description: {
    summary:
      'We are seeking a skilled and innovative Marketing Manager to join our team. The ideal candidate will be responsible for developing and implementing strategies that promote the visibility and adoption of our products. You will work closely with cross-functional teams to align marketing initiatives with business goals and drive growth across diverse markets.',

    vision:
      'Our vision is to provide the next billion people with access to products that exemplify the ideals of Exemplar Info. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.',
    approach:
      'Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.',
  },
  duties: [
    'Develop and execute marketing strategies to increase brand awareness and customer engagement',
    'Collaborate with the product, design, and sales teams to align marketing initiatives with company goals',
    'Manage digital marketing campaigns, including SEO, SEM, and social media channels',
    'Analyze market trends and customer insights to inform marketing tactics and business decisions',
    'Measure and report on the performance of marketing campaigns, adjusting strategies for better outcomes',
    'Lead the content creation efforts for various marketing channels (website, blog, email newsletters, etc.)',
  ],
  requirements: {
    mustHave: [
      '5+ years of experience in marketing, with at least 2 years in a managerial role',
      'Proven track record in developing successful marketing campaigns',
      'Experience with digital marketing channels such as SEO, SEM, and social media',
      'Excellent analytical skills with the ability to interpret data and market trends',
      'Strong project management and organizational skills',
      'Proficiency in marketing tools such as Google Analytics, HubSpot, or similar',
      'Excellent communication skills, both written and verbal',
    ],
    niceToHave: [
      'Experience in the tech or cryptocurrency industry',
      'Familiarity with content management systems (CMS) and marketing automation tools',
      'Understanding of blockchain technology and its applications',
    ],
  },
  benefits: [
    'Flexible work hours',
    'Remote work',
    'Health insurance reimbursement',
    'Wellness program (gym, etc.)',
  ],
};

const job2 = {
  title: 'Recruitment Officer',
  location: {
    city: 'Hyderabad',
    country: 'India',
  },
  type: 'Full Time',
  company: 'Exemplar Info',
  description: {
    summary:
      'We are looking for a motivated and detail-oriented Recruitment Officer to join our HR team. The Recruitment Officer will be responsible for attracting, sourcing, and hiring top talent for our organization. You will collaborate closely with department heads to identify hiring needs, develop job descriptions, and manage the entire recruitment process from sourcing candidates to onboarding.',

    vision:
      'Our vision is to provide the next billion people with access to products that exemplify the ideals of Exemplar Info. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.',
    approach:
      'Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.',
  },
  duties: [
    'Manage end-to-end recruitment processes, from sourcing candidates to onboarding new hires',
    'Collaborate with hiring managers to identify staffing needs and create job descriptions',
    'Utilize various recruitment channels (job boards, social media, etc.) to attract top talent',
    'Screen resumes, conduct interviews, and assess candidate qualifications',
    'Maintain candidate databases and build talent pipelines for future hiring needs',
    'Provide insights on recruitment trends, challenges, and best practices',
    'Ensure a positive candidate experience throughout the recruitment process',
  ],
  requirements: {
    mustHave: [
      '3+ years of experience in recruitment or talent acquisition',
      'Strong understanding of the full recruitment lifecycle',
      'Experience using applicant tracking systems (ATS) and recruitment tools',
      'Excellent communication and interpersonal skills',
      'Ability to manage multiple open positions simultaneously',
      'Strong organizational skills and attention to detail',
      'Knowledge of employment laws and best hiring practices',
    ],
    niceToHave: [
      'Experience recruiting for tech or cryptocurrency roles',
      'Familiarity with blockchain technology and the cryptocurrency space',
      'Background in international recruitment',
    ],
  },
  benefits: [
    'Flexible work hours',
    'Remote work',
    'Health insurance reimbursement',
    'Wellness program (gym, etc.)',
  ],
};

export const jobs = {
  'marketing-manager': job1,
  'recruitment-officer': job2,
};

export default function PageJobDetail() {
  const params = useParams();
  const id = params.id;
  const data = jobs[id];
  console.log('Data jobs', data);
  return (
    <>
      <Navbar navClass="nav-light" />
      <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-12">
            <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {data?.title ? data?.title : 'Senior Web Developer'}
            </h3>

            <ul className="list-none">
              <li className="inline-flex items-center text-slate-400 me-3">
                <RiMapPinLine className="text-white h6 me-2" width={18} />
                <span className="me-1">
                  {data?.city ? data?.city : 'Hyderabad'},
                </span>
                {data?.place ? data?.place : 'India'} -{' '}
                <span className="text-white  px-1">
                  {data?.duration ? data?.duration : 'Full Time'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index">Exemplar Info</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="index-job">Job</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Job Detail
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
        <div className="container relative">
          <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
            <div className="lg:col-start-2 lg:col-span-10">
              <h5 className="mb-4 font-medium text-xl">Description:</h5>

              <p className="text-slate-400 mb-4">
                {data?.description?.summary}
              </p>

              <h5 className="mb-4 mt-6 font-medium text-xl">Duties:</h5>

              <ul className="list-none mb-0">
                {data?.duties?.map((data) => {
                  return (
                    <li className="text-slate-400 flex mt-2">
                      <Icon.ArrowRight
                        width={16}
                        className="text-indigo-600 h5 mb-0 me-2"
                      ></Icon.ArrowRight>{' '}
                      {data}
                    </li>
                  );
                })}
              </ul>

              <h5 className="mb-4 mt-6 font-medium text-xl">Requirements</h5>

              <ul className="list-none mb-0">
                {data?.requirements?.mustHave.map((data, index) => {
                  return (
                    <li key={index} className="text-slate-400 flex mt-2">
                      <Icon.ArrowRight
                        width={16}
                        className="text-indigo-600 h5 mb-0 me-2"
                      ></Icon.ArrowRight>{' '}
                      {data}
                    </li>
                  );
                })}
              </ul>

              <h5 className="mb-4 mt-6 font-medium text-xl">Nice To Have</h5>

              <ul className="list-none mb-0">
                {data?.requirements?.niceToHave.map((data, index) => {
                  return (
                    <li key={index} className="text-slate-400 flex mt-2">
                      <Icon.ArrowRight
                        width={16}
                        className="text-indigo-600 h5 mb-0 me-2"
                      ></Icon.ArrowRight>{' '}
                      {data}
                    </li>
                  );
                })}
              </ul>

              <h5 className="mb-4 mt-6 font-medium text-xl">Benefits</h5>

              {data?.benefits.map((data, index) => {
                return (
                  <p key={index} className="text-slate-400 flex mt-2">
                    <Icon.ArrowRight
                      width={16}
                      className="text-indigo-600 h5 mb-0 me-2"
                    ></Icon.ArrowRight>{' '}
                    {data}
                  </p>
                );
              })}

              <div className="mt-6">
                <a
                  href={`mailto:hr@exemplarinfo.com?subject=Application%20for%20${data?.title}`}
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
