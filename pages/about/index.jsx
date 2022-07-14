import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { css } from '@emotion/css';
import Image from 'next/image';

// Image
import AboutBanner from '../../img/banner/AboutBanner.png';

// Client Grup
import ClientLocal1 from '../../img/about/client-list/client-local-1.png';
import ClientLocal2 from '../../img/about/client-list/client-local-2.png';
import ClientLocal3 from '../../img/about/client-list/client-local-3.png';
import ClientLocal4 from '../../img/about/client-list/client-local-4.png';
import ClientLocal5 from '../../img/about/client-list/client-local-5.png';
import ClientLocal6 from '../../img/about/client-list/client-local-6.png';

import ClientGlobal1 from '../../img/about/client-list/client-global-1.png';
import ClientGlobal2 from '../../img/about/client-list/client-global-2.png';
import ClientGlobal3 from '../../img/about/client-list/client-global-3.png';
import ClientGlobal4 from '../../img/about/client-list/client-global-4.png';
import ClientGlobal5 from '../../img/about/client-list/client-global-5.png';
import ClientGlobal6 from '../../img/about/client-list/client-global-6.png';
import ClientGlobal7 from '../../img/about/client-list/client-global-7.png';
import ClientGlobal8 from '../../img/about/client-list/client-global-8.png';
import ClientGlobal9 from '../../img/about/client-list/client-global-9.png';
import ClientGlobal10 from '../../img/about/client-list/client-global-10.png';
import ClientGlobal11 from '../../img/about/client-list/client-global-11.png';
import ClientGlobal12 from '../../img/about/client-list/client-global-12.png';
import ClientGlobal13 from '../../img/about/client-list/client-global-13.png';

import ClientMeasure1 from '../../img/about/client-list/client-measure-1.png';

// Our Grup Solution
import MemberGrupSolution1 from '../../img/about/our-grup/member-solution-grup-1.png';
import MemberGrupSolution2 from '../../img/about/our-grup/member-solution-grup-2.png';
import MemberGrupSolution3 from '../../img/about/our-grup/member-solution-grup-3.png';
import MemberGrupSolution4 from '../../img/about/our-grup/member-solution-grup-4.png';
import MemberGrupSolution5 from '../../img/about/our-grup/member-solution-grup-5.png';
import MemberGrupSolution6 from '../../img/about/our-grup/member-solution-grup-6.png';
import MemberGrupSolution7 from '../../img/about/our-grup/member-solution-grup-7.png';
import MemberGrupSolution8 from '../../img/about/our-grup/member-solution-grup-8.png';
import MemberGrupSolution9 from '../../img/about/our-grup/member-solution-grup-9.png';
import MemberGrupSolution10 from '../../img/about/our-grup/member-solution-grup-10.png';
import MemberGrupSolution11 from '../../img/about/our-grup/member-solution-grup-11.png';
import MemberGrupSolution12 from '../../img/about/our-grup/member-solution-grup-12.png';

// Our Grup Media
import MemberGrupMedia1 from '../../img/about/our-grup/member-media-grup-1.png';
import MemberGrupMedia2 from '../../img/about/our-grup/member-media-grup-2.png';
import MemberGrupMedia3 from '../../img/about/our-grup/member-media-grup-3.png';
import MemberGrupMedia4 from '../../img/about/our-grup/member-media-grup-4.png';
import MemberGrupMedia5 from '../../img/about/our-grup/member-media-grup-5.png';
import MemberGrupMedia6 from '../../img/about/our-grup/member-media-grup-6.png';
import MemberGrupMedia7 from '../../img/about/our-grup/member-media-grup-7.png';
import MemberGrupMedia8 from '../../img/about/our-grup/member-media-grup-8.png';

// Our Grup Commerce
import MemberGrupCommerce1 from '../../img/about/our-grup/member-commerce-grup-1.png';
import MemberGrupCommerce2 from '../../img/about/our-grup/member-commerce-grup-2.png';
import MemberGrupCommerce3 from '../../img/about/our-grup/member-commerce-grup-3.png';
import MemberGrupCommerce4 from '../../img/about/our-grup/member-commerce-grup-4.png';

// Our Grup Entertainment
import MemberGrupEntertainment1 from '../../img/about/our-grup/member-entertainment-grup-1.png';
import MemberGrupEntertainment2 from '../../img/about/our-grup/member-entertainment-grup-2.png';
import MemberGrupEntertainment3 from '../../img/about/our-grup/member-entertainment-grup-3.png';
import MemberGrupEntertainment4 from '../../img/about/our-grup/member-entertainment-grup-4.png';

const About = () =>{

  const ClientListLocalData = [
    {asset: ClientLocal1},
    {asset: ClientLocal2},
    {asset: ClientLocal3},
    {asset: ClientLocal4},
    {asset: ClientLocal5},
    {asset: ClientLocal6}
  ]

  const ClientListGlobalData = [
    {asset: ClientGlobal1},
    {asset: ClientGlobal2},
    {asset: ClientGlobal3},
    {asset: ClientGlobal4},
    {asset: ClientGlobal5},
    {asset: ClientGlobal6},
    {asset: ClientGlobal7},
    {asset: ClientGlobal8},
    {asset: ClientGlobal9},
    {asset: ClientGlobal10},
    {asset: ClientGlobal11},
    {asset: ClientGlobal12},
    {asset: ClientGlobal13}
  ]

  const ClientListMeasureData = [
    {asset: ClientMeasure1}
  ]

  const OurGrupData = [
    {id: 1, category: "Solution", show: true, ListMemberGrup: 
    [
      {asset: MemberGrupSolution1},
      {asset: MemberGrupSolution2},
      {asset: MemberGrupSolution3},
      {asset: MemberGrupSolution4},
      {asset: MemberGrupSolution5},
      {asset: MemberGrupSolution6},
      {asset: MemberGrupSolution7},
      {asset: MemberGrupSolution8},
      {asset: MemberGrupSolution9},
      {asset: MemberGrupSolution10},
      {asset: MemberGrupSolution11},
      {asset: MemberGrupSolution12}
    ]},
    {id: 2, category: "Media & Community", show: false, ListMemberGrup: 
    [
      {asset: MemberGrupMedia1},
      {asset: MemberGrupMedia2},
      {asset: MemberGrupMedia3},
      {asset: MemberGrupMedia4},
      {asset: MemberGrupMedia5},
      {asset: MemberGrupMedia6},
      {asset: MemberGrupMedia7},
      {asset: MemberGrupMedia8}
    ]},
    {id: 3, category: "Commerce", show: false, ListMemberGrup: 
    [
      {asset: MemberGrupCommerce1},
      {asset: MemberGrupCommerce2},
      {asset: MemberGrupCommerce3},
      {asset: MemberGrupCommerce4}
    ]},
    {id: 4, category: "Entertainment", show: false, ListMemberGrup: 
    [
      {asset: MemberGrupEntertainment1},
      {asset: MemberGrupEntertainment2},
      {asset: MemberGrupEntertainment3},
      {asset: MemberGrupEntertainment4}
    ]}
  ]
  return(
    <div className="mxa-about-page">
      <div id="mxa-about-description" className="min-h-fit pt-0 pb-8 md:pt-4 md:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-content-between gap-4">
            <div className="w-full md:w-[86%]">
              <h2 className={`text-base md:text-xl font-extrabold mb-6 ${css`letter-spacing: -0.5px;`}`}>Who we are</h2>
              <p className="text-xl font-normal mb-6">MXA started in 2010, and were known as Media X Asia, the first Indonesia premium publisher network. After two years, we pivoted to digital buying agency business.</p>
              <p className="text-xl font-normal mb-6">Now MXA is one of the biggest local digital media buying agency in Indonesia that provides consultation for online campaign planning and strategy.</p>
              <h3 className={`text-[25px] md:text-[30px] mb-6 font-bold ${css`line-height: 1.4; letter-spacing: -0.5px;`}`}>
                Right Place, <br/>
                Right Time, <br/>
                Right Idea,
              </h3>
              <p className="text-xl font-normal">We sit together and become our client’s partner, so we can listen and discuss ways to achieve our objectives. Through the steps, we decide the right strategy, media and KPI, to deliver the right results.</p>
            </div>
            <div className="mxa-ornament-about-img">
              <div className="pt-28 md:pt-52 lg:pt-12">
                <Image width={682} height={482} src={AboutBanner} alt="about banner"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mxa-client-list-about" className="min-h-fit">
        <div className="bg-[#F1F1F1] md:pb-10">
          <div className="container">
            <h2 className={`text-base md:text-xl font-extrabold pt-14 md:pt-[108px] mb-3 ${css`letter-spacing: -0.5px;`}`}>Client List</h2>
            <p className="text-base md:text-xl font-normal mb-10">We have years of experience developing custom brand journey with:</p>

            <h3 className="text-xl md:text-3xl font-bold mb-5">Local High Rank Publishers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {ClientListLocalData.map((data, index)=>
                <div className="mx-auto text-center lg:mx-0 lg:text-left" key={index}>
                  <Image width={157} height={96} src={data.asset} alt=""/>
                </div>
              )}
            </div>

            <h3 className="text-xl md:text-3xl font-bold mt-14 md:mt-20 mb-5">Global High Quality Networks and Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {ClientListGlobalData.map((data, index)=>
                <div className="mx-auto text-center lg:mx-0 lg:text-left" key={index}>
                  <Image width={157} height={96} src={data.asset} alt=""/>
                </div>
              )}
            </div>

            <h3 className="text-xl md:text-3xl font-bold mt-14 md:mt-20 mb-5">Global Campaign Measurement and Ad Serving</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {ClientListMeasureData.map((data, index)=>
                <div className="mx-auto text-center lg:mx-0 lg:text-left" key={index}>
                  <Image width={157} height={96} src={data.asset} alt=""/>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mxa-about-clientlist-ornament"></div>
      </div>

      <div id="mxa-our-grup-about" className="min-h-fit mb-[205px] md:mb-[400px]">
        <div className="container">
          <h2 className={`text-base md:text-xl font-extrabold md:pt-3 mb-3 ${css`letter-spacing: -0.5px;`}`}>Our Group</h2>
          <p className="text-base md:text-xl font-normal mb-10">Alongside with our sister company, we complement each other to meet your company&apos;s needs.</p>

          {OurGrupData.map((grupData) =>
            <Disclosure as="div" defaultOpen={grupData.show} className="mxa-ourgrup-accordion my-6" key={grupData.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`w-full flex justify-between items-center px-6 py-5 md:px-8 md:py-6 rounded-lg ${open ? "bg-[#FF0000]" : "bg-[#DCDCDC]"}`}>
                    <div className={`text-xl md:text-2xl font-bold ${open ? "text-white" : "text-black"} ${css`letter-spacing: 0.25px;`}`}>
                      {grupData.category}
                    </div>
                    <div>{open ? <MinusIcon className={`w-6 h-6 md:w-8 md:h-8 ${open ? "text-white" : "text-black"}`}/> : <PlusIcon className={`w-6 h-6 md:w-8 md:h-8 ${open ? "text-white" : "text-black"}`}/>}</div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel className="my-8" static>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {grupData.ListMemberGrup.map((data, index) =>
                          <div className="mx-auto text-center" key={index}>
                            <Image width={157} height={96} src={data.asset} alt=""/>
                          </div>
                        )}
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
  )
}

export default About;