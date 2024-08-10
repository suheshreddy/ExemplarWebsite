import React from 'react'
import { Link } from 'react-router-dom';

// import logo_light from '../../assets/images/logo-light.png';
import logo_dark from '../../assets/images/logo-png.png';
import logo_light from '../../assets/images/logo-transparent-white.png';

import american_ex from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import master_card from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

import * as Icon from 'react-feather';

import { footerLinks, footerCompany } from '../../data/data';

import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance, PiShoppingCart, MdKeyboardArrowRight} from '../../assets/icons/icons'

export default function Footer() {
    return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="py-[60px] px-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-8 md:col-span-12">
                                <Link to="/#" className="text-[22px] focus:outline-none">
                                    <img src={logo_light} className='w-48 ' alt="" />
                                </Link>
                     
               
                            </div>
                            <div className="lg:col-span-4 md:col-span-4">
                                <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact</h5>
                                <p className="mt-6">For more information feel free to reach us by clicking the link below</p>
                                <form>
                                    <div className="grid grid-cols-1">
                              

                                        <a href="/contact-one" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </footer>
    )
}
