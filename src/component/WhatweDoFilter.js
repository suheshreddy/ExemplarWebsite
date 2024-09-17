import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  FiPhone,
} from '../assets/icons/icons';

import { portfolioOneData } from '../data/portfolio';

export default function WhatweDoFilter(props) {
  let [selectedCategory, setSelectedCategory] = useState(null);

  let matchCategory = (category) => {
    setSelectedCategory(category);
  };

  let filteredData = selectedCategory
    ? portfolioOneData.filter((item) => item.category === selectedCategory)
    : portfolioOneData;

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-[30px]">
          <div className="filters-group-wrap text-center">
            <div className="filters-group">
              <ul className="mb-0 list-none container-filter-box filter-options space-x-3">
                <li
                  className={`${
                    selectedCategory === null ? 'active' : ''
                  } inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`}
                  data-group="all"
                  onClick={() => matchCategory(null)}
                >
                  Application Development
                </li>
                <li
                  className={`${
                    selectedCategory === 'branding' ? 'active' : ''
                  } inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`}
                  data-group="branding"
                  onClick={() => matchCategory('branding')}
                >
                  Application Modernization
                </li>
                <li
                  className={`${
                    selectedCategory === 'designing' ? 'active' : ''
                  } inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`}
                  data-group="designing"
                  onClick={() => matchCategory('designing')}
                >
                  Application Transformation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={props.className}>
          {[filteredData[0]].map((data, index) => {
            return (
              <div
                key={index}
                className="picture-item "
                data-groups='["branding"]'
              >
                <div className="group relative gap-4  flex overflow-hidden rounded-md transition-all duration-500">
                  <Link
                    to="/portfolio-detail-one "
                    className="w-2/5 object-cover"
                  >
                    <img src={data.image} className="rounded-md " alt="" />
                  </Link>
                  <div className="content pt-3 w-3/5 flex-1">
                    <h6 className="text-slate-400 text-lg lg:text-xl">
                      Redefining outdated and obsolete portfolios to match the
                      requirements of now and future. With thorough testing
                      under the Center of Excellence, the Enterprise
                      Applications are completely re-architected, re-engineered
                      and re-coded to drive improved results.
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
