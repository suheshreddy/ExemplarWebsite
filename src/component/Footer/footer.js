import React from 'react';
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

import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
  PiShoppingCart,
  MdKeyboardArrowRight,
} from '../../assets/icons/icons';

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <img src={logo_dark} className="inline-block d" alt="" /> */}
            <img src={logo_light} className=" dark:inline-block" alt="" />
            <p className="mt-2 pl-2">
              300 E. Davis St,
              <br />
              McKinney, TX 75069
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">DROP US A LINE</h3>
            <p>6268424232</p>

            <h3 className="text-cyan-400 font-semibold mt-4 mb-2">
              SHOOT US A MESSAGE
            </h3>
            <a
              href="mailto:hr@exemplarinfo.com"
              className="hover:text-cyan-400"
            >
              hr@exemplarinfo.com
            </a>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">QUICK LINKS</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" className="hover:text-cyan-400">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-cyan-400">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-cyan-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>© 2024 Exemplar Info, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
