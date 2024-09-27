import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  FiPhone,
} from '../assets/icons/icons';

export default function WhatweDoFilter({ content }) {
  // Set the default selected category to the first one
  const [selectedCategory, setSelectedCategory] = useState(content[0].category);

  const matchCategory = (category) => {
    setSelectedCategory(category);
    console.log('match category');
  };

  // Filter the data based on selected category
  const filteredData = content.filter(
    (item) => item.category === selectedCategory
  );

  console.log('hallo', content[0].category, filteredData);

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <h4 className="text-4xl lg:text-5xl font-bold mb-10">
          Accelerate Business Transformation with our AI Services
        </h4>
        <div className="grid grid-cols-1 items-center gap-[30px]">
          <div className="filters-group-wrap text-center">
            <div className="filters-group">
              <ul className="mb-0 list-none container-filter-box filter-options space-x-3">
                {content.map((item) => (
                  <li
                    key={item.category}
                    className={`${
                      selectedCategory === item.category ? 'active' : ''
                    } inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500`}
                    onClick={() => matchCategory(item.category)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="filtered-content-container">
          {filteredData.length > 0 &&
            filteredData.map((data, index) => (
              <div key={index} className="picture-item">
                <div className="group relative gap-4 flex overflow-hidden rounded-md transition-all duration-500">
                  <Link
                    to="/portfolio-detail-one"
                    className="w-2/5 object-cover"
                  >
                    <img
                      src={data.image}
                      className="rounded-md"
                      alt={data.title}
                    />
                  </Link>
                  <div className="content pt-3 w-3/5 flex-1">
                    <h6 className="text-slate-400 text-lg lg:text-xl">
                      {data.description || 'Description coming soon.'}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          {!filteredData.length > 0 &&
            content.map((data, index) => (
              <div key={index} className="picture-item">
                <div className="group relative gap-4 flex overflow-hidden rounded-md transition-all duration-500">
                  <Link
                    to="/portfolio-detail-one"
                    className="w-2/5 object-cover"
                  >
                    <img
                      src={data.image}
                      className="rounded-md"
                      alt={data.title}
                    />
                  </Link>
                  <div className="content pt-3 w-3/5 flex-1">
                    <h6 className="text-slate-400 text-lg lg:text-xl">
                      {data.description || 'Description coming soon.'}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
