import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ECapFX-LOGO-white.png';
import confirmoBlack from '../assets/confirmo-black.png';
import visa from '../assets/visa.svg';
import paypal from '../assets/paypal.svg';
import stripe from '../assets/stripe.svg';
import mastercard from '../assets/mastercard.svg';
import coinpayments from '../assets/coinpayments.png';

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#151515] text-white">
      <p className="sr-only" id="footer-heading">Footer</p>
      <div className="mx-auto px-4 py-20 max-w-screen-2xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 paddingFooter">
          <div className="mt-10 xl:mt-0 additionalInfos">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Logo" className="w-48 h-auto" />
            </div>
            <div className="flex justify-center mb-6">
              <div className="md:order-2 flex space-x-6 justify-center ml-1 socialMediaPhone">
                <a href="https://www.facebook.com/people/Ecapfx/61575174327161/" className="text-white hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com" className="text-gray hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://x.com/EcapFXLTD" className="text-gray hover:text-white">
                  <span className="sr-only">X</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ecapfx/" className="text-gray hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.047-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.966v5.698h-3v-11h2.878v1.497h.041c.4-.755 1.378-1.55 2.833-1.55 3.03 0 3.593 1.993 3.593 4.583v6.47z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://discord.gg/eBkRpp66" className="text-gray hover:text-white">
                  <span className="sr-only">Discord</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 50 50" aria-hidden="true">
                    <path fillRule="evenodd" d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-x-6 mb-12">
              <ul role="list" className="mt-6 space-y-4 ml-28 addInformations">
                <li>
                  <small href="#chooseplan" className="text-sm leading-6 text-white hover:text-white"></small>
                </li>
                <li>
                  <small href="#somethingnew" className="text-sm leading-6 text-white hover:text-white"></small>
                </li>
                <li>
                  <small href="#team" className="text-sm leading-6 text-white hover:text-white"></small>
                </li>
              </ul>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <small href="#chooseplan" className="text-sm leading-6 text-white hover:text-white"></small>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 xl:col-span-2 grid grid-cols-2 gap-8">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <p className="text-sm font-semibold leading-6 text-white">Important Links</p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <small><Link to="/#howitworks" className="text-sm leading-6 text-white hover:text-white">How it works</Link></small>
                  </li>
                  <li>
                    <small><Link to="/#about" className="text-sm leading-6 text-white hover:text-white">About Us</Link></small>
                  </li>
                  <li>
                    <small><Link to="/#team" className="text-sm leading-6 text-white hover:text-white">Team</Link></small>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <p className="text-sm font-semibold leading-6 text-white">Our Services</p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <small><Link to="/#pricingtable" className="text-sm leading-6 text-white hover:text-white">Pricing</Link></small>
                  </li>
                  <li>
                    <small href="#" className="text-sm leading-6 text-white hover:text-white">Guides</small>
                  </li>
                  <li>
                    <small href="#" className="text-sm leading-6 text-white hover:text-white">Mission and Values</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <p className="text-sm font-semibold leading-6 text-white">Customer Care</p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <small><Link to="/contact" className="text-sm leading-6 text-white hover:text-white">Contact</Link></small>
                  </li>
                  <li>
                    <small><Link to="/rules" className="text-sm leading-6 text-white hover:text-white">Rules</Link></small>
                  </li>
                  <li>
                    <small href="#" className="text-sm leading-6 text-white hover:text-white">Live Chat</small>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <p className="text-sm font-semibold leading-6 text-white">Policies</p>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <small><Link to="/claim" className="text-sm leading-6 text-white hover:text-white">Claim</Link></small>
                  </li>
                  <li>
                    <small><Link to="/privacy-policy" className="text-sm leading-6 text-white hover:text-white">Privacy Policy</Link></small>
                  </li>
                  <li>
                    <small><Link to="/terms" className="text-sm leading-6 text-white hover:text-white">Terms and Conditions</Link></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-primary-row-3 mt-10">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="footer-primary-section-title footer-primary-section-title--small text-sm font-semibold leading-6 text-white mb-4">
              {/* Payment Options */}
            </p>
            <div className="footer-primary-payments-list flex flex-row flex-wrap justify-center items-center gap-4">
              <img src={visa} alt="Visa" className="h-4 w-auto" />
              <img src={mastercard} alt="Mastercard" className="h-5 w-auto" />
              <img src={paypal} alt="Paypal" className="h-5 w-auto" />
              <img src={stripe} alt="Stripe" className="h-6 w-auto" />
              <img src={confirmoBlack} alt="Confirmo" className="h-6 w-auto" />
              <img src={coinpayments} alt="CoinPayments" className="h-5 w-auto" />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-10 lg:mt-10 border-t border-gray-700 w-full">
          <div className="w-full flex justify-center px-4">
            <small className="text-xs leading-5 text-center text-white max-w-full">
              © 2025 ECAPFX. All rights reserved. Company ID: 16330400, 166 Willingale Road, Loughton, IG10 2DA, United Kingdom.
            </small>
          </div>
        </div>
        <style jsx>{`
          .additionalInfos {
            margin-top: 10px;
          }
          .footer-primary-row-3 {
            text-align: center;
          }
          .footer-primary-section-title--small {
            font-size: 0.875rem;
            font-weight: 600;
            line-height: 1.5;
          }
          .footer-primary-payments-list img {
            max-height: 2rem;
            width: auto;
          }
          @media (max-width: 768px) {
            .paddingFooter {
              padding-left: 30px;
              padding-right: 30px;
            }
            .paddingCopyright {
              padding-left: 33px;
              padding-right: 33px;
            }
            .socialMediaPhone {
              margin-left: -5px;
            }
            .addInformations {
              margin-left: 0px !important;
            }
            .footer-primary-payments-list {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 1rem !important;
            }
            .footer-primary-row-3 > .flex {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;