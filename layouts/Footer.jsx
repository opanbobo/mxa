import Link from 'next/link';

// Image
import MXALogo from '../img/logo/mxa-logo.svg';
import IconFacebook from '../img/icon/icon-facebook.svg';
import IconTwitter from '../img/icon/icon-twitter.svg';

const Footer = () => {
  return (
    <>
    <div className="mxa-footer-ornament-shape"></div>
    <footer id="footer" className="w-full bg-primary md:pt-5 xl:pt-0 pb-7 xl:pb-16">
      <div className="container mx-auto justify-center">
        <div className="flex flex-wrap mx-3 md:mx-0 items-stretch">
          <div className="w-6/12 md:w-3/12 lg:w-4/12 flex flex-wrap">
            <img className="relative w-28 h-11 -top-1" src={MXALogo} alt="mxa-logo-footer"/>
          </div>
          <div className="w-6/12 md:w-9/12 lg:w-8/12 flex flex-wrap">
            <ul className="flex flex-wrap flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14 lg:space-x-20 text-sm font-semibold list-none">
              <li><Link href="/"><a className="hover:text-red-500">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-red-500">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-red-500">Services</a></Link></li>
              <li><Link href="/case-studies"><a className="hover:text-red-500">Case Studies</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-red-500">Contact</a></Link></li>
            </ul>
          </div>
        </div>
        <hr className="mxa-hr w-full mt-10 mb-6"/>
        <div className="flex flex-row justify-between">
          <div className="mxa-copyright">
            <p className="text-sm text-[#535353] font-normal">©2022 MXA, All rights reserved.</p>
          </div>
          <div>
            <ul className="flex flex-row space-x-7">
              <li><Link href="/"><img className="w-4 h-4 md:w-6" src={IconFacebook} alt="mxa-facebook"/></Link></li>
              <li><Link href="/"><img className="w-4 h-4 md:h-6" src={IconTwitter} alt="mxa-twitter"/></Link></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
    </>
  )
}

export default Footer;