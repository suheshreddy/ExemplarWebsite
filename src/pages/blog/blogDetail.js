import React from 'react';
import { Link, useParams } from 'react-router-dom';

import slide02 from '../../assets/images/blog/slide02.jpg';

import Navbar from '../../component/Navbar/navbar';
import Footer from '../../component/Footer/footer';
import BlogComment from '../../component/blogComment';
import BlogUserDetail from '../../component/blogUserDetail';
import { blogData } from '../../data/data';

import { MdKeyboardArrowRight } from '../../assets/icons/icons';

export default function BlogDetail() {
  const params = useParams();
  const id = params.id ?? 1;
  console.log('params1d', id);
  const data = blogData.find((blog) => blog.id === parseInt(id));
  return (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              {data.title} Case Study
            </h3>

            {/*<ul className="list-none mt-6">
                            <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Client :</span> <span className="block">{data?.name? data?.name : 'Calvin Carlo'}</span></li>
                            <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{data?.date ? data?.date : '23th May, 2022'}</span></li>
                            <li className="inline-block font-semibold text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
    </ul>*/}
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px] mb-0 inline-flex space-x-1">
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
              Blogs Details
            </li>
          </ul>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
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
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-2 md:col-span-1"></div>
            <div className="lg:col-span-8 md:col-span-10">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <img
                  src={data?.image ? data?.image : slide02}
                  className="rounded-md"
                  alt=""
                />

                <div className="mt-6">
                  {data &&
                    data?.content.map((item, index) => (
                      <p key={index + '1'} className={item.class}>
                        {item.text}
                      </p>
                    ))}
                </div>
              </div>

              {/* <BlogComment/> */}
            </div>

            <div className="lg:col-span-2 md:col-span-1">
              {/* <BlogUserDetail client={data?.client} name={data?.name}/> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
