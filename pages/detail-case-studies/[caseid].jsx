// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/css';

// Images
import CaseStudiesBanner1 from '../../img/case-studies/detail-case-studies-1.png';
import CaseStudiesBanner2 from '../../img/case-studies/case-studies-2.png';
import CaseStudiesBanner3 from '../../img/case-studies/detail-case-studies-2.png';
import CaseStudiesBanner4 from '../../img/case-studies/detail-case-studies-3.png';
import CaseStudiesBanner5 from '../../img/case-studies/case-studies-5.png';
import CaseStudiesBanner6 from '../../img/case-studies/case-studies-6.png';

const DetailCaseStudies = () => {

  const slug = useRouter();
  const slugCaseId = parseInt(slug.query.caseid);

  const DetailCaseStudiesData = [
    {id: 1, caseStudiesTitle:"Asosiasi Kartu Kredit Indonesia", asset: CaseStudiesBanner1, titleDescription1: "Objective", description1: "Build awareness and educate customers to be concerned of their OTP confdentiality", titleDescription2: "Channel", description2: `<ul><li>Youtube</li><li>Instagram</li><li>Facebook</li></ul>`,
      dataCampaign: [
        {titleResult: "Overall Result", dataNumber: "9,744,963", tagData: "impressions"},
        {titleResult: "Plan", dataNumber: "1,126,667", tagData: "views"},
        {titleResult: "Actual Results", dataNumber: "1,177,092", tagData: "views"},
        {titleResult: "Achievement", dataNumber: "104%", tagData: ""}
      ],
      idNext: "2", nextCaseStudiesTitle: "MLDSPOT Content Hunt Season 3", nextCaseBanner: CaseStudiesBanner2
    },
    {id: 2, caseStudiesTitle:"MLDSPOT Content Hunt Season 3", asset: CaseStudiesBanner2, titleDescription1: "Objective", description1: "Drive engagement and submission for MLD Content Hunt Season 3", titleDescription2: "Channel", description2: `<ul><li>Instagram</li></ul>`,
      dataCampaign: [
        {titleResult: "Overall Result", dataNumber: "16,582,561", tagData: "Actual Reach Plan"},
        {titleResult: "Plan", dataNumber: "1,513,241", tagData: "Actual views"},
        {titleResult: "Actual Results", dataNumber: "686", tagData: "Submission Plan"}
      ],
      idNext: "3", nextCaseStudiesTitle: "BCA #LebaranNyaman", nextCaseBanner: CaseStudiesBanner3
    },
    {id: 3, caseStudiesTitle:"BCA #LebaranNyaman", asset: CaseStudiesBanner3, titleDescription1: "Background", description1: "One biggest issue on festive month during pandemic situation is how people suddenly couldnt get in touch with any relatives except via online, addressing this situation BCA wants to help people to keep celebrating Festive especially on “THR” culture by highlighting Bagi-Bagi and Sakuku feature", titleDescription2: "Channel", description2: `<ul><li>Riding on TikTok wave through influencer and TikTok Live</li><li>Amplify the conversation to Instagram</li></ul>`,
      dataCampaign: [
        {titleResult: "Reach", dataNumber: "3.000.000", tagData: "for 3 days campaign"},
        {titleResult: "Views", dataNumber: "3.000.000", tagData: "for 3 days campaign"},
        {titleResult: "Average Watched Time", dataNumber: "17,7", tagData: "seconds"},
        {titleResult: "Live Streaming Views", dataNumber: "202,300", tagData: "Live views"}
      ],
      idNext: "4", nextCaseStudiesTitle: "Yamaha Indonesia #MenangBanyak", nextCaseBanner: CaseStudiesBanner4
    },
    {id: 4, caseStudiesTitle:"Yamaha Indonesia #MenangBanyak", asset: CaseStudiesBanner4, titleDescription1: "Background", description1: "Yamaha Gear 125 wants to strengthen their imageries for millennials and Strategy the difference between 110cc and 125cc. As in summary, Yamaha wanted to sparkling the debate between two motorcycle users.", titleDescription2: "Strategy", description2: `<p>At a same time, Raffi Ahmad, one of the biggest KOL in Indonesia are quite often doing a new hobby which is riding a motorcycle. We tap into his Youtube channel to demonstrate the superiority of using 125cc by creating a “Sunmori” activity and in the end of video, Raffi Ahmad also triggering his viewers to comment to trigger the debate</p>`,
      dataCampaign: [
        {titleResult: "Actual Results", dataNumber: "2.000.000", tagData: "Video Views"},
        {titleResult: "Actual Results", dataNumber: "1,550", tagData: "Comments debate"},
        {titleResult: "Achievement", dataNumber: "106%", tagData: "Exceeding Video views KPI"},
        {titleResult: "Achievement", dataNumber: "103%", tagData: "Exceeding debate KPI"}
      ],
      idNext: "5", nextCaseStudiesTitle: "KlikDokter TikTok Campaign", nextCaseBanner: CaseStudiesBanner5
    },
    {id: 5, caseStudiesTitle:"KlikDokter TikTok Campaign", asset: CaseStudiesBanner5, titleDescription1: "Objective", description1: "Increase awareness and build audience for KlikDokter in TikTok", titleDescription2: "Strategy", description2: `<p>We understand that TikToks audience character is different compared with other social media, meanwhile communicating about health and fitness are quite “un-fit” for the audience. As a strategy, we decided to breakdown the audience into several segment and created video that relevant with that age group in order to optimize view rate</p>`,
      dataCampaign: [
        {titleResult: "Maintain video view rate up to", dataNumber: "98%", tagData: ""},
        {titleResult: "Reach", dataNumber: "13.000.000", tagData: "exceeding our KPI for about 149%"},
        {titleResult: "Reach", dataNumber: "10k+", tagData: "New followers in one month"}
      ],
      idNext: "6", nextCaseStudiesTitle: "Asosiasi Kartu Kredit Indonesia (2021)", nextCaseBanner: CaseStudiesBanner6
    },
    {id: 6, caseStudiesTitle:"Asosiasi Kartu Kredit Indonesia (2021)", asset: CaseStudiesBanner6, titleDescription1: "Background", description1: "Happy with the previous performance, AKKI decided to continue the campaign. Same objective and same message, educate credit card users about the confidentiality of their OTP Code.", titleDescription2: "Strategy", description2: `<p>We crafted a strategy to amplify the same message into several formats to ensure that audience still get attracted and completely get the message. So we decided to expand the reach into programmatic and add more “fun” seasoning on TikTok</p>`,
      dataCampaign: [
        {titleResult: "Total Views", dataNumber: "1.700.000", tagData: "across all platform"},
        {titleResult: "Achievement", dataNumber: "119%", tagData: "from KPI"},
        {titleResult: "Achievement", dataNumber: "5.400.000", tagData: "people"},
        {titleResult: "Engagement", dataNumber: "1.700.000", tagData: "across all platforms"}
      ],
      idNext: "1", nextCaseStudiesTitle: "Asosiasi Kartu Kredit Indonesia", nextCaseBanner: CaseStudiesBanner1
    }
  ]
  return(
    <>
      <div className="mxa-detail-case-studies-page pb-14">
        <div className="container">
          {DetailCaseStudiesData.map((data) => 
            <>
              {data.id === slugCaseId &&
                <div key={data.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-24">
                    <div>
                      <div className="relative top-0 md:sticky md:top-24">
                        <h2 className={`text-base md:text-xl font-extrabold mb-6 ${css`letter-spacing: -0.5px;`}`}>What we&apos;ve done</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-7 md:mb-11">{data.caseStudiesTitle}</h3>
                        <img className="w-full h-auto" src={data.asset} alt="case-studies"/>
                      </div>
                    </div>
                    <div>
                      <div className="w-full md:w-11/12">
                        <h5 className="text-xl font-semibold mb-4 md:mt-5">{data.titleDescription1}</h5>
                        <p className="text-lg font-normal mb-8 md:mb-12">{data.description1}</p>
                        <h5 className="text-xl font-semibold mb-2">{data.titleDescription2}</h5>
                        <div className="text-lg font-normal mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: data.description2}}></div>

                        {data.dataCampaign.map((data, index) =>
                          <div className="card bg-[#E0E0E0] px-7 md:px-8 py-5 mt-8 mb-1" key={index}>
                            <p className="text-lg font-semibold mb-2">{data.titleResult}</p>
                            <div className="flex flex-wrap flex-col md:flex-row items-center gap-x-2 space-y-2 md:space-y-0">
                              <div className="w-full md:w-8/12">
                                <span className={`text-[50px] font-extrabold ${css`letter-spacing: -0.5px;`}`}>{data.dataNumber}</span>
                              </div>
                              <div className="w-full md:w-3/12">
                                <span className="text-[16px] md:text-xl font-normal">{data.tagData}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="mxa-hr w-full my-10 md:my-16"/>
                  <Link href={`/detail-case-studies/${data.idNext}`}>
                    <a className="cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-24">
                        <div>
                          <h6 className="text-base md:text-lg font-extrabold mb-2 md:mb-4">Next</h6>
                          <p className={`text-3xl md:text-[2.75rem] font-bold ${css`line-height: 1.2`}`}>{data.nextCaseStudiesTitle}</p>
                        </div>
                        <div>
                          <img className="w-full min-h-[180px] md:min-h-[286px]" src={data.nextCaseBanner} alt=""/>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              }
            </>
          )}
        </div>

      </div>
      <style jsx global>{`
        ul{
          list-style-type: disc;
          padding-left: 1.5rem;
        }
      `}</style>
    </>
  )
}

export default DetailCaseStudies;