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
import image1 from '../assets/images/whatwedo/application.jpg';
import image2 from '../assets/images/whatwedo/modernazation.jpg';
import image3 from '../assets/images/whatwedo/app-transformation.jpg';
import image4 from '../assets/images/whatwedo/machine-learning.jpg';
import image5 from '../assets/images/whatwedo/robotic-automation.jpg';
import image6 from '../assets/images/whatwedo/ai.jpg';
import image7 from '../assets/images/whatwedo/data-strategy.jpg';
import image8 from '../assets/images/whatwedo/analytics-training.jpg';
import image9 from '../assets/images/whatwedo/data-modernization.jpg';
import image10 from '../assets/images/whatwedo/study-the-problem.jpg';
import image11 from '../assets/images/whatwedo/data-modelling.jpg';

import image12 from '../assets/images/whatwedo/design-solution.jpg';
import image14 from '../assets/images/whatwedo/robotic-processs.jpg';
import image13 from '../assets/images/whatwedo/cloud-connectors.jpg';
import image15 from '../assets/images/whatwedo/personalized-communications.jpg';
import image16 from '../assets/images/whatwedo/ransomware.jpg';
import image17 from '../assets/images/whatwedo/health-check.jpg';
import image18 from '../assets/images/whatwedo/vulnerability-scannig.jpg';
import image19 from '../assets/images/whatwedo/cloud-migration.jpg';
import image20 from '../assets/images/whatwedo/hybrid-cloud.jpg';
import image21 from '../assets/images/whatwedo/saas.jpg';
import image22 from '../assets/images/whatwedo/Acquiescence.jpg';
import image23 from '../assets/images/whatwedo/smart-solution.jpg';
import image24 from '../assets/images/whatwedo/application.jpg';

import image25 from '../assets/images/whatwedo/external-impact.jpg';
import image26 from '../assets/images/whatwedo/internal-impact.jpg';

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
          title: 'Application Development',
          category: 'applications-development',
          description:
            'Remodeling legacy portfolios into future-proof and flexible foundation based modular applications. Our cloud, mobile and web application services enable enterprises to improve productivity, implement changes and reduce operational costs.',
        },
        {
          image: image2,
          title: 'Application Modernization',
          category: 'applications-modernization',
          description:
            'Repurposing legacy landscapes by moving them to modern and flexible platforms. We assess and test legacy applications to identify and use the best modernization techniques to deliver future-ready solutions with improved usability, security and agility.', // No description provided in the screenshot for this tab
        },
        {
          image: image3,
          title: 'Application Transformation',
          category: 'applications-transformation',
          description:
            'Redefining outdated and obsolete portfolios to match the requirements of now and future. With thorough testing under the Center of Excellence, the Enterprise Applications are completely re-architected, re-engineered and re-coded to drive improved results.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'artificial-intelligence': {
      name: 'Artificial Intelligence',
      description:
        'Innovative AI solutions to drive smarter business decisions.',
      content: [
        {
          image: image4,
          title: 'Machine Learning Solutions',
          category: 'machine-learning-solutions',
          description:
            'We program and integrate machine learning, deep learning and artificial neural network software into your existing IT infrastructure, enabling it to find patterns amongst your business data and automate mission-critical processes. We use machine learning in industries as diverse as cyber security, healthcare, marketing automation, finance and banking.',
        },
        {
          image: image5,
          title: 'Robotic Process Automation',
          category: 'robotic-process-automation',
          description:
            'We integrate Robotic Process Automation (RPA) software into existing or new programs used in clerical and administrative work, in order to automate standard processes. Built-in governance and change management tools ensure compliance with various industry standards. Our RPA services are applicable to individual platforms and multi-system infrastructures.', // No description provided in the screenshot for this tab
        },
        {
          image: image6,
          title: 'AI Security Solutions',
          category: 'ai-security-solutions',
          description:
            'Our software engineers have worked on several AI-powered security solutions, including facial, speech and handwriting recognition software with biometric, biographic and contextual matching capabilities. Other security processes automated by AI include object detection, situational analysis, and threat assessments.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'data-analytics': {
      name: 'Data Analytics',
      description: 'Turn data into insights with cutting-edge analytics tools.',
      content: [
        {
          image: image7,
          title: 'Data Strategy',
          category: 'data-strategy',
          description:
            'We’ll help you develop an actionable data and analytics strategy that outlines the people, processes, and technology you need to get the most value out of your data. We don’t take a cookie-cutter approach. Using our exclusive methodology, your playbook will include tailored strategies that support your business goals and set you up for long-term success',
        },
        {
          image: image8,
          title: 'Analytics & Training',
          category: 'analytics-training',
          description:
            'Whether your reporting needs some fine-tuning, you want to migrate to a new analytics platform, or you need help choosing the right tools. We offer a range of training services to bolster your team’s knowledge so you can increase productivity, decrease maintenance costs, and improve technology adoption rates.', // No description provided in the screenshot for this tab
        },
        {
          image: image9,
          title: 'Data Modernization',
          category: 'data-modernization',
          description:
            "We'll help move you away from legacy solutions that inhibit innovation to modernized solutions that allow you to keep up with your growing business demands. We also help ensure you are maximizing your modern technologies to their fullest potential.", // No description provided in the screenshot for this tab
        },
      ],
    },
    'data-engineering': {
      name: 'Data Engineering',
      description:
        'Robust data infrastructure for optimized business performance.',
      content: [
        {
          image: image10,
          title: 'Studying The Problem',
          category: 'studying-the-problem',
          description:
            'As with any project, we start by studying your product needs or challenges, documenting requirements and what is the value you are looking for from the data.Perform analysis with limited data sets and gain key insights.',
        },
        {
          image: image11,
          title: 'Data Modeling And Evaluation',
          category: 'data-modeling-and-evaluation',
          description:
            'Our data scientists now train numerous models to define which one of them provides the most accurate results. We choose the right model for you in terms of accuracy, simplicity and performance.Take your insights to a deeper level using all of your data.', // No description provided in the screenshot for this tab
        },
        {
          image: image12,
          title: 'Designing The Solution and Deployment',
          category: 'designing-the-solution-and-deployment',
          description:
            'Depending on the solution we are trying to build, if it’s a BI product, we will share reports and dashboards with you or if it’s a ML algorithm, we’ll share a custom ML-driven app for your use or integrate it with the needed applications.Apply analytics to solve problems before they impact operations.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'digital-workflows': {
      name: 'Digital Workflows',
      description: 'Streamline processes with automated and digital workflows.',
      content: [
        {
          image: image13,
          title: 'Robotic Process',
          category: 'robotic-process',
          description:
            'Automate digital tasks and help your business evolve with precision. Our team of experts work with you to identify processes and functions that might be holding your business back from growth, then realign those areas with Robotic Process Automation (RPA) to create new ways to innovate. Linking small steps to big ones, and turning tasks into systems, our team gives you the flexibility to be agile and resilient — then scales it.',
        },
        {
          image: image14,
          title: 'Cloud Connectors',
          category: 'cloud-connectors',
          description:
            'It’s easy to forget about your print environment as you start transitioning your workflow to the cloud. Until you need to print something in an emergency, that is.  Exemplar Info Managed Print Cloud Services helps you implement a comprehensive transition to the cloud that pairs your print software stack with hidden efficiencies and streamlined systems.', // No description provided in the screenshot for this tab
        },
        {
          image: image15,
          title: 'Personalized communications',
          category: 'personalized-communications',
          description:
            'Implement sophisticated projects, plan workflows, develop custom configurations, or supply creative campaign elements with ease. With digital tools that are tailored to your exact needs, we’ll create a system that moves with your business and allows you to generate flexible design-to-production workflows that connect with every audience.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'cyber-security': {
      name: 'Cyber Security',
      description:
        'Protect your digital assets with world-class security solutions.',
      content: [
        {
          image: image16,
          title: 'Ransomware Recovery',
          category: 'ransomware-recovery',
          description:
            'With best-in-class data recovery, your business will become more resilient — even in the face of ransomware challenges. Our trained security experts have extensive experience in helping businesses of every size prevent, respond to, and recover from ransomware attacks. We’ll leverage our experience so your business can remain as protected as possible.',
        },
        {
          image: image17,
          title: 'Health Check and Review',
          category: 'health-check-and-review',
          description:
            'Reduce your overall risk and build a solid foundation for the future with a cyber security health check that pinpoints and resolves any weak areas of your business before they become threats. Post-review, we’ll mitigate any security shortfalls and leverage both our experience and industry best practices to leave your business even stronger than we found it.', // No description provided in the screenshot for this tab
        },
        {
          image: image18,
          title: 'Vulnerability Scanning',
          category: 'vulnerability-scanning',
          description:
            'Proactively manage your business risks and take action to mitigate them with an expert team that knows exactly how to limit your exposure to cyberthreats. Starting with complete coverage for your infrastructure, we’ll help you identify vulnerabilities before they become threatened and take corrective action that helps you stay ahead of attacks.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'infrastructure-cloud': {
      name: 'Infrastructure Cloud',
      description: 'Scalable cloud solutions for modern infrastructure needs.',
      content: [
        {
          image: image19,
          title: 'Cloud Migration',
          category: 'cloud-migration',
          description:
            'Improve your business’s efficiency with a secure cloud migration that’s fast and cutting-edge. We’ll apply our extensive experience in both public and private cloud services to design IT solutions that help you maximize the value of the cloud while making the best use of your IT budget. Your business will be leaner and more agile, without any added on-site hardware.',
        },
        {
          image: image20,
          title: 'Hybrid Cloud',
          category: 'hybrid-cloud',
          description:
            'Get the best out of your cloud environment with a hybrid solution that offers more flexibility and value. Merging public and private clouds, we’ll create a bespoke solution that gives your business every advantage we can think of (including some we’ll think up for you along the way).', // No description provided in the screenshot for this tab
        },
        {
          image: image21,
          title: 'Software as a Service (Saas)',
          category: 'applications-transformation',
          description:
            'Take advantage of the most decisive way to easily enable cloud technologies without on-site hardware or database management.  We’ve delivered effective SaaS solutions for businesses of every size with a comprehensive suite of technologies that are designed to fast track business efficiencies. Plus, their easy-to-use features mean your team can use them to benefit your business almost instantly.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'robotics-process-automation': {
      name: 'Robotics Process Automation',
      description:
        'Automate repetitive tasks with RPA to enhance productivity.',
      content: [
        {
          image: image22,
          title: 'Acquiescence',
          category: 'acquiescence',
          description:
            'We converge on fulfilling what the professions lack and good agreement with policies and associated laws and regulation.Today, robotics finds usage beyond manufacturing and more towards areas like e-commerce, fintech, logistics, retail, healthcare etc',
        },
        {
          image: image23,
          title: 'Smart Solution',
          category: 'smart-solution',
          description:
            'Our professionals provide cost-effective solutions for all types of business and result in generating profits.Robotics also has significant overlap with Artificial Intelligence and automate the tasks with predictive solutions.', // No description provided in the screenshot for this tab
        },
        {
          image: image24,
          title: 'automated-bots',
          category: 'applications-transformation',
          description:
            'Our specialists develop task self-regulation and eradicate the necessity for human engagement to obtain firmer work operations.Robotics automation is transforming the way logistics and supply chain processes across the world are being optimized.', // No description provided in the screenshot for this tab
        },
      ],
    },
    'customer-experience': {
      name: 'Customer Experience',
      description: 'Deliver exceptional customer service and experiences.',
      content: [
        {
          image: image25,
          title: 'The External Impact Of Great Customer Experience',
          category: 'the-external-impact-of-great-customer-experience',
          description:
            'Customers continue with good experiences (a good experience has low drop outs). They come back (a good experience has high retention). They tell people (free marketing is a sign of a good experience). If your experience is good, customers will be the first to try your new products, services and touchpoints. They will even give you ideas for innovation and disruption.',
        },
        {
          image: image26,
          title: 'The Internal Impact Of Great Customer Experience',
          category: 'the-internal-impact-of-great-customer-experience',
          description:
            'Great Customer Experience is intentional. When we let our experiences happen by accident – in the weird space between each department’s goals – it won’t meet our customers’ needs. Therefore, great customer experience is a team sport, where everyone agrees how to meet customer needs and works together to deliver a great experience. You manage your objectives, processes and systems to deliver customer and business needs. A great customer experience is easy to deliver consistently.', // No description provided in the screenshot for this tab
        },
      ],
    },
  };

  const service = whatWeDo[id.toLowerCase()];

  return service ? (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative table w-full py-32 bg-[url('https://www.tekdallas.com/images/6fa489fd976c01523098b67c42913d76.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              What We do
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
              {service.name}
            </li>
          </ul>
        </div>
      </section>
      <WhatweDoFilter
        className="grid lg:w-full mx-auto  grid-cols-1 mt-4 gap-[30px]"
        content={service.content}
      />

      <Footer />
    </>
  ) : (
    <div>Not</div>
  );
}
