import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/navbar';
import Footer from '../../component/Footer/footer';
import CompanyLogo from '../../component/companyLogo';
import TinySlider from 'tiny-slider-react';
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';
import { MdKeyboardArrowRight } from '../../assets/icons/icons';

import heroImage from '../../assets/images/company/aboutus.jpg'; // Hero Image
import teamImage1 from '../../assets/images/client/01.jpg'; // Team member images
import teamImage2 from '../../assets/images/client/02.jpg';
import teamImage3 from '../../assets/images/client/03.jpg';
import teamImage4 from '../../assets/images/client/04.jpg';

// Carousel settings
const sliderSettings = {
  container: '.tiny-single-item',
  items: 1,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: 'bottom',
  speed: 400,
  gutter: 16,
};

export default function PageAboutus() {
  return (
    <>
      <Navbar navClass="nav-light" />
      {/* Hero Section */}
      <section
        className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Start working with us to generate awareness, drive traffic, and
              achieve your goals.
            </p>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
            <li className="uppercase text-[13px] font-bold text-white/50 hover:text-white">
              <Link to="/index">Home</Link>
            </li>
            <li className="text-base text-white/50 mx-0.5">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li className="uppercase text-[13px] font-bold text-white">
              About Us
            </li>
          </ul>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative md:py-24 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Who We Are Section */}
          <div className="grid grid-cols-1 text-center">
            <h2 className="md:text-5xl text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              At <span className="font-semibold">[Your Company Name]</span>, we
              are a team of passionate innovators, problem-solvers, and tech
              enthusiasts, committed to transforming businesses through
              cutting-edge software solutions. Our focus is on building smarter,
              scalable, and secure technology to help companies unlock their
              full potential.
            </p>
          </div>

          {/* Our Journey Section */}
          <div className="grid grid-cols-1 text-center mb-16">
            <h3 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Founded in <span className="font-semibold">[Year]</span>, we
              started with a simple yet ambitious goal: to create software that
              truly makes a difference. What began as a small, dedicated team
              has grown into a global service provider known for world-class
              software solutions. Today, we serve clients across multiple
              industries, helping them scale and innovate with technology.
            </p>
            {/* Journey Image */}
          </div>

          {/* Our Values Section */}
          <div className="grid grid-cols-1 text-center mb-16">
            <h3 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-6">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              We live by core values that shape the way we work and serve our
              clients. These values ensure that every project we undertake is
              driven by innovation, quality, and a deep understanding of our
              clients' needs.
            </p>
            {/* Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
              {/* Value 1 */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mx-auto mb-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600">
                  We constantly embrace new technologies and ideas to stay ahead
                  in the ever-changing tech landscape.
                </p>
              </div>
              {/* Value 2 */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mx-auto mb-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5V19m0 0l7.03-6.03M12 19L4.97 12.97"
                  />
                </svg>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Excellence
                </h4>
                <p className="text-gray-600">
                  Delivering exceptional quality and attention to detail in
                  every project we undertake.
                </p>
              </div>
              {/* Value 3 */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mx-auto mb-4 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 014-4h10a4 4 0 110 8H7a4 4 0 01-4-4z"
                  />
                </svg>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Transparency
                </h4>
                <p className="text-gray-600">
                  Open communication and honesty are the cornerstones of our
                  client relationships.
                </p>
              </div>
              {/* Value 4 */}
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 mx-auto mb-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c.667 0 1.333 0 2-.667C14.667 6 16 4.667 16 3m0 0H8m8 0l-2.5 6.5M7.5 9.5L10 3M7.5 9.5C6 11.333 4.667 13.333 4 16a8 8 0 0016 0c-.667-2.667-2-4.667-3.5-6.5"
                  />
                </svg>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Customer Focus
                </h4>
                <p className="text-gray-600">
                  Your business needs are at the heart of every solution we
                  create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container">
          <div className="grid grid-cols-1 text-center mb-8">
            <h3 className="md:text-3xl text-2xl font-bold mb-6">What We Do</h3>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              We specialize in a range of services to empower businesses with
              technology:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card p-6 bg-white rounded shadow-lg">
              <h4 className="text-lg font-semibold mb-3">
                Custom Software Development
              </h4>
              <p>Tailored solutions for your business needs.</p>
            </div>
            <div className="service-card p-6 bg-white rounded shadow-lg">
              <h4 className="text-lg font-semibold mb-3">
                Mobile App Development
              </h4>
              <p>Intuitive mobile applications for all platforms.</p>
            </div>
            <div className="service-card p-6 bg-white rounded shadow-lg">
              <h4 className="text-lg font-semibold mb-3">Web Development</h4>
              <p>Scalable web solutions for business growth.</p>
            </div>
            <div className="service-card p-6 bg-white rounded shadow-lg">
              <h4 className="text-lg font-semibold mb-3">Cloud Solutions</h4>
              <p>Agile, secure cloud-based services.</p>
            </div>
            <div className="service-card p-6 bg-white rounded shadow-lg">
              <h4 className="text-lg font-semibold mb-3">
                AI & Machine Learning
              </h4>
              <p>Innovative AI solutions for business efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
