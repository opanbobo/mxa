import { useEffect, useState } from 'react';
import Link from 'next/link';

// Image
import MXALogo from '../img/logo/mxa-logo.svg';

const Header = () => {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      // Or use document.documentElement.scrollTop;
      let currentPosition = window.pageYOffset; 
      if (currentPosition > scrollTop) {
        setScrolling(false);
      }else{
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    
  },[scrollTop])

  const OpenHamburgerMenu = () => {
    window.document.getElementById('hamburger-menu').style.height = '100vh';
    window.document.body.style.overflow = 'hidden';
  }
  const CloseHamburgerMenu = () => {
    window.document.getElementById('hamburger-menu').removeAttribute('style');
    window.document.body.removeAttribute('style');
  }

  return (
    <>
      <header className={`fixed mxa-header-fixed ${scrollTop > 50 ? 'active' : ''} w-full py-2 z-10`}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full xl:w-8/12 text-center">
              <nav>
                <ul className="list-none">
                  <li className="mxa-nav-items hidden"><Link href="/about">About</Link></li>
                  <li className="mxa-nav-items hidden"><Link href="/services">Services</Link></li>
                  <li className="mxa-nav-items">
                    <Link href="/"><a><img className="inline w-[90px] h-10 md:w-[120px] md:h-[60px] cursor-pointer" src={MXALogo} alt="mxa-logo"/></a></Link>
                  </li>
                  <li className="mxa-nav-items hidden"><Link href="/case-studies">Case Studies</Link></li>
                  <li className="mxa-nav-items hidden"><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="absolute top-5 right-4 lg:hidden">
              <div className="mxa-menu-hamburger" onClick={() => OpenHamburgerMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="hamburger-menu" className="mxa-overlay-header">
        <div className="mxa-overlay-content-header py-2">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full text-center">
                <Link href="/"><a onClick={() => CloseHamburgerMenu()}><img className="inline w-[90px] h-10 md:w-[120px] md:h-[60px] cursor-pointer" src={MXALogo} alt="mxa-logo"/></a></Link>
              </div>
              <div className="absolute top-2 right-4 lg:hidden">
               <span className="text-4xl" onClick={() => CloseHamburgerMenu()}>&times;</span>
              </div>
            </div>
          </div>
          <div className="mxa-wrapper-menu-box">
            <nav className="w-full text-center">
              <ul className="list-none">
                <li className="text-3xl font-bold my-12" onClick={() => CloseHamburgerMenu()}><Link href="/">Home</Link></li>
                <li className="text-3xl font-bold my-12" onClick={() => CloseHamburgerMenu()}><Link href="/about">About Us</Link></li>
                <li className="text-3xl font-bold my-12" onClick={() => CloseHamburgerMenu()}><Link href="/services">Services</Link></li>
                <li className="text-3xl font-bold my-12" onClick={() => CloseHamburgerMenu()}><Link href="/case-studies">Case Studies</Link></li>
                <li className="text-3xl font-bold my-12" onClick={() => CloseHamburgerMenu()}><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;