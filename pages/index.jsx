import { useState } from 'react';
import { css } from '@emotion/css';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import Particles from "react-tsparticles";

// Images
import HomeLanding from '../img/banner/HomeLanding.png';
import Clients1 from '../img/clients-list/clients-1.png';
import Clients2 from '../img/clients-list/clients-2.png';
import Clients3 from '../img/clients-list/clients-3.png';
import Clients4 from '../img/clients-list/clients-4.png';
import Clients5 from '../img/clients-list/clients-5.png';
import Clients6 from '../img/clients-list/clients-6.png';
import Clients7 from '../img/clients-list/clients-7.png';
import Clients8 from '../img/clients-list/clients-8.png';
import Clients9 from '../img/clients-list/clients-9.png';
import Clients10 from '../img/clients-list/clients-10.png';

import Banner1 from '../img/banner/case-studies-1.jpg';
import Banner2 from '../img/banner/case-studies-2.jpg';

const Home = () => {

  const ServicesData = [
    {id: '1', title: 'Awareness', subheadline: 'Building a brand always starts with awareness and we can help you deliver your message to the right audiences.', service1: 'Digital Media Planning & Buying', service2: 'Publisher Partnership', alignData: true },
    {id: '2', title: 'Performance', subheadline: 'Discuss with us what kind of action you need from your audience - subscription, lead, sales, or any other actions - and we will try our best to achieve it.', service1: 'Digital Media Planning & Buying', service2: 'Report, Analysis & Optimization', alignData: false },
    {id: '3', title: 'Content Marketing', subheadline: 'Content is one of the most important pillars for your brand. We are able to deliver your content through any platform and work with the right partner to spread your content.', service1: 'Digital Media Planning & Buying', service2: 'Publisher & KOL Partnership', alignData: true }
  ]

  const CaseStudiesData = [
    {id : '1', title: 'Build awareness and educate customers to be concerned of their OTP confidentiality', titleLink: 'Asosiasi Kartu Kredit Indonesia', link:'/detail-case-studies/1', asset: Banner1},
    {id : '2', title: 'Drive engagement and submission for MLD Content Hunt Season 3', titleLink: 'MLD Content Hunt Season 3', link:'/detail-case-studies/2', asset: Banner2},
  ]

  const ClientData = [
    {id : '1', asset: Clients1},
    {id : '2', asset: Clients2},
    {id : '3', asset: Clients3},
    {id : '4', asset: Clients4},
    {id : '5', asset: Clients5},
    {id : '6', asset: Clients6},
    {id : '7', asset: Clients7},
    {id : '8', asset: Clients8},
    {id : '9', asset: Clients9},
    {id : '10', asset: Clients10}
  ]

  const alignContent = (position, type) => {
    if(type === 'text'){
      return position ? 'text-left' : 'text-right';
    }
    if(type === 'justify'){
      return position ? 'justify-start' : 'justify-end' ;
    }
    return position ? 'self-start' : 'self-end';
  }

  const [isOpen, setOpen] = useState(false);

  const particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: "#fff",
      },
    },
    fpsLimit: 120,
    fullScreen:{
      enable: true,
      zIndex: -2
    },
    interactivity: {
      events: {
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#AFB1B3",
      },
      links: {
        color: "#AFB1B3",
        distance: 150,
        enable: true,
        opacity: 1,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  }
  return (
   <>
    <div id="mxa-main-landing" className="min-h-full lg:pb-28">
      <div className="container">
        <div className="grid grid-cols-1 place-items-end lg:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base md:text-xl mb-4 md:mb-6 font-extrabold">About Us</h3>
            <h2 className={`text-4xl md:text-5xl mb-8 font-bold ${css`line-height: 1.4; letter-spacing: -0.5px;`}`}>
              Right Place, <br/>
              Right Time, <br/>
              Right Idea,
            </h2>
            <figure className="mb-8 lg:hidden">
              <img className="w-full h-auto" src={HomeLanding} alt=""/>
            </figure>
            <div className="hidden lg:block">
              <p className="text-xl font-normal mb-8">With the rapid development of digital, we know very well how important it is to grow your business with great strategize. As a full service-oriented agent, with a cross functional team, we can work together to develop strategies or ideas about your brand or product.</p>
              <Link href="/about">
                <a className="mxa-btn-link-primary">Discover More</a>
              </Link>
            </div>
            
          </div>
          <div className="hidden bottom-0 right-0 lg:block">
            <img className="w-full h-auto" src={HomeLanding} alt=""/>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="mx-4 md:mx-8 pb-20 lg:hidden">
          <p className="text-xl font-normal mb-8 pt-3 md:pt-0">With the rapid development of digital, we know very well how important it is to grow your business with great strategize. As a full service-oriented agent, with a cross functional team, we can work together to develop strategies or ideas about your brand or product.</p>
          <Link href="/about">
            <a className="mxa-btn-link-primary">Discover More</a>
          </Link>
        </div>
      </div>
    </div>
    <div id="mxa-services" className="min-h-fit bg-primary">
      <div className="mxa-service-ornament-before"></div>
      <div className="w-full xl:min-h-screen relative bg-[#ff0000] pb-6 md:pb-10">
        <div className="container">
          <h3 className="text-base md:text-xl font-extrabold mb-6 md:mb-9 text-white">Services</h3>
          <h4 className="w-full md:w-6/12 text-3xl font-bold text-white">Our specialty is to provide the best for your company with these kind of services.</h4>
          <div className="flex flex-col">
            {ServicesData.map((data) => 
                <Disclosure defaultOpen={true} className={`${alignContent(data.alignData,'layout')} ${alignContent(data.alignData,'justify')} flex flex-col my-6 lg:my-10`} as="div" open={isOpen} onChange={() => setOpen(!isOpen)} key={data.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button disabled={true} open={isOpen} className={`${alignContent(data.alignData,'text')}  text-4xl md:text-7xl font-semibold underline ${open ? 'text-white' : 'text-black'}`}>
                        {data.title}
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-300 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0">
                          <Disclosure.Panel unmount={isOpen} className={`${alignContent(data.alignData,'text')} mt-6 mb-8 `}>
                            <h5 className={`text-xl md:text-2xl font-normal mb-5 md:mb-6 text-white`}>{data.subheadline}</h5>
                            <div className={`flex flex-col md:flex-row ${alignContent(data.alignData,'justify')} gap-3`}>
                              <div>
                                <button className="mxa-btn-services">{data.service1}</button>
                              </div>
                              <div>
                                <button className="mxa-btn-services">{data.service2}</button>
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                    </>
                  )}
                </Disclosure>
              )}
          </div>
        </div>
      </div>
      <div className="mxa-service-ornament-after"></div>
    </div>

    <div id="mxa-case-studies" className="min-h-fit">
      <div className="bg-primary py-14">
      <div className="container">
        <h3 className="text-base md:text-xl font-extrabold mb-4">Case Studies</h3>
        {CaseStudiesData.map((data) =>
          <div className="grid grid-cols-1 justify-between lg:grid-cols-2 gap-y-2 md:gap-y-0 gap-x-8 mb-8" key={data.id}>
            <div>
              <div className="block lg:hidden">
                <img className="h-auto" src={data.asset} alt=""/>
              </div>
              <div className="hidden lg:block">
                <h2 className={`text-2xl font-bold leading-9 mb-5 ${css`line-height: 38px; letter-spacing: 0.25px;`}`}>{data.title}</h2>
                <hr className="mxa-hr w-full mb-4"/>
                <Link href={`${data.link}`}><a className="text-sm font-semibold">{data.titleLink} <i className="mxa-icon-chevron-right ml-6"></i></a></Link>
              </div>
            </div>
            <div>
              <div className="hidden mx-auto text-center lg:block">
                <img className="h-auto" src={data.asset} alt=""/>
              </div>
              <div className="block lg:hidden">
                <h2 className={`text-2xl font-bold leading-9 mb-5 ${css`line-height: 38px; letter-spacing: 0.25px;`}`}>{data.title}</h2>
                <hr className="mxa-hr w-full mb-4"/>
                <Link href={`${data.link}`}><a className="text-sm font-semibold">{data.titleLink} <i className="mxa-icon-chevron-right ml-6"></i></a></Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-20">
          <Link href="/case-studies">
            <a className="mxa-btn-link-primary">See All Study Case</a>
          </Link>
        </div>
      </div>
      </div>
      <div className="mxa-case-studies-ornament-before"></div>
    </div>

    <div id="mxa-clien-list" className="min-h-fit mx-auto mb-8 xl:mb-40">
      <div className="container">
        <h3 className="text-base md:text-xl font-extrabold mb-4">Clients List</h3>
        <h4 className="text-lg font-normal md:text-2xl mb-8">We have years of experience developing custom brand journey with:</h4>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {ClientData.map((data) =>
              <div className="mx-auto" key={data.id}><img className="w-24 h-16 md:w-40 md:h-24" src={data.asset} alt=""/></div>
            )}  
          </div>
      </div>
    </div>
    <Particles id="tsparticles" options={particlesConfig}/>
   </>
  )
}

export default Home;