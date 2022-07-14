import Image from 'next/image';

// Image
import BadgeService1 from '../../img/icon/badge-icon-service-1.svg';
import BadgeService2 from '../../img/icon/badge-icon-service-2.svg';
import BadgeService3 from '../../img/icon/badge-icon-service-3.svg';
import BadgeService4 from '../../img/icon/badge-icon-service-4.svg';
import BadgeService5 from '../../img/icon/badge-icon-service-5.svg';
import BadgeService6 from '../../img/icon/badge-icon-service-6.svg';
import BadgeService7 from '../../img/icon/badge-icon-service-7.svg';

const Services = () => {

  const ServiceListData = [
    {id: "1", asset: BadgeService1, title: "Digital Media Campaign Strategy", description: "We crawl and analyse every data aspect to help you develop the right strategy by leveraging various channels and platforms to achieve marketing objective goals."},
    {id: "2", asset: BadgeService2, title: "Digital Media Campaign Planning", description: "With data analyst and digital media specialist, we create precision and efficient media plan to help our clients start from winning the competition, increase penetration until inspire the consumers."},
    {id: "3", asset: BadgeService3, title: "Digital Media Campaign Buying", description: "We maintain our good relationship with every stakeholders in todays digital world. As a result, we offer best deal and solution, manage the execution and served it in an appetite report format only for you."},
    {id: "4", asset: BadgeService4, title: "Premium Publisher", description: "Through our wide range publisher networks, we offer you many opportunities to start spreading the conversation, do more action or even become more innovating in the digital advertising world."},
    {id: "5", asset: BadgeService5, title: "Programmatic", description: "We offer programmatic advertising and also help you to optimise your campaign, start from using real time bidding, deliver the right ads quality to the right audience, until help you to manage your targeting method using our audience data."},
    {id: "6", asset: BadgeService6, title: "Social Media", description: "We distribute your great social media content to the right audience, to bring more impact and efficiently achieve your brand goals."},
    {id: "7", asset: BadgeService7, title: "KOL", description: "We help you connect and select influencers that best represent your brand to answer your campaign objective."}
  ]
  return(
    <div className="mxa-services-page min-h-fit pt-0 pb-16 md:pt-2 md:pb-32">
      <div className="container">
        <h1 className="text-base md:text-3xl font-extrabold md:font-bold mb-4 md:mb-9">Our service list</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6 md:gap-y-7">
          {ServiceListData.map((data) =>
            <div className="card bg-[#F8F8F8] max-w-sm px-4 md:px-9 py-8 md:py-7 shadow-sm" key={data.id}>
              <div className="card-header flex flex-row items-center md:items-start md:flex-col space-x-4 md:space-x-0 md:space-y-5">
                <div className="md:mx-auto md:text-center">
                  <Image width={60} height={60} src={data.asset} alt="service-icon"/>
                </div>
                <p className="text-xl font-bold xl:pr-10">{data.title}</p>
              </div>
              <div className="card-body mt-4">
                <p className="text-base font-normal mb-3">{data.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Services;