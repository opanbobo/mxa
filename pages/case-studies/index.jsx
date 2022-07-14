
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Image
import CaseStudies1 from '../../img/case-studies/case-studies-1.png';
import CaseStudies2 from '../../img/case-studies/case-studies-2.png';
import CaseStudies3 from '../../img/case-studies/case-studies-3.png';
import CaseStudies4 from '../../img/case-studies/case-studies-4.png';
import CaseStudies5 from '../../img/case-studies/case-studies-5.png';
import CaseStudies6 from '../../img/case-studies/case-studies-6.png';

const CaseStudies = () => {
  SwiperCore.use([Navigation]); 

  const CaseStudiesData = [
    {id: 1, asset: CaseStudies1, titleCase: "Asosiasi Kartu Kredit Indonesia", description: "Build awareness and educate customers to be concerned of their OTP confdentiality", titleData: "Achievement", dataCase: "104%"},
    {id: 2, asset: CaseStudies2, titleCase: "MLDSPOT Content Hunt Season 3", description: "Drive engagement and submission for MLD Content Hunt Season 3", titleData: "Actual Reach", dataCase: "16.582.561"},
    {id: 3, asset: CaseStudies3, titleCase: "BCA #LebaranNyaman", description: "Create buzz and conversation about BagiBagi and Sakuku Feature", titleData: "Reach", dataCase: "3.000.000"},
    {id: 4, asset: CaseStudies4, titleCase: "Yamaha Indonesia #MenangBanyak", description: "Generate awareness by highlighting Yamaha Gears features and spark debate between 125cc users and 110cc users", titleData: "Achievement", dataCase: "106%"},
    {id: 5, asset: CaseStudies5, titleCase: "KlikDokter TikTok Campaign", description: "Build community and awareness for KlikDokter in TikTok", titleData: "Reach", dataCase: "13.000.000"},
    {id: 6, asset: CaseStudies6, titleCase: "Asosiasi Kartu Kredit Indonesia (2021)", description: "Educate credit card users about the confidentiality OTP code through video and banner", titleData: "Achievement", dataCase: "5.400.000"}
  ]

  return(
    <>
      <div className="mxa-case-studies-page pt-5 pb-20 md:pb-32">
        <div className="container">
          <div className="mxa-case-studies-slider min-h-fit relative">
            <Swiper
              className={`${css`padding-bottom: 20px !important;`}`}
              spaceBetween={10}
              slidesPerView={1}
              speed={800}
              slideToClickedSlide={true}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              onSlideChange={() => console.log("")}>
              {CaseStudiesData.map((data) =>
                <SwiperSlide key={data.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div>
                      <Image width={566} height={286} src={data.asset} alt=""/>
                      <h3 className={`text-3xl lg:text-4xl font-bold my-5 ${css`line-height: 1.2`}`}>{data.titleCase}</h3>
                      <p className="text-xl font-normal">{data.description}</p>
                    </div>
                    <div>
                      <div className="mx-auto text-center pt-20 md:pt-0">
                        <p className="text-xl font-normal">{data.titleData}</p>
                        <h3 className={`text-[50px] md:text-[70px] font-extrabold mb-10 md:mb-[110px] ${css`letter-spacing: -0.5px;`}`}>{data.dataCase}</h3>
                        <Link href={`/detail-case-studies/${data.id}`}>
                          <a className="w-56 h-10 sm:h-14 text-center focus:outline-none text-white text-sm font-semibold bg-black hover:bg-red-600 rounded-2xl px-10 py-4 transition duration-150 ease-in">See Study Case</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
            <div className="swiper-navigation absolute top-[65%] md:relative md:mt-12">
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudies;