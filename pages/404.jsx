import Link from 'next/link';

const error404 = () =>{
  return (
   <>
    <div className="page-404 min-h-fit py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-semibold mb-4">OOPS! Don&apos;t Panic!</h1>
        <p className="text-base md:text-xl font-normal text-[#707070] mb-10">It&apos;s just a 404 error. <br/> The page you are looking for is not available!</p>
        <Link href="/">
          <a className="h-10 sm:h-14 focus:outline-none text-white font-semibold text-sm bg-black hover:bg-red-700 rounded-xl py-3 px-8">Go Home</a>
        </Link>
      </div>
    </div>
    <style jsx global>{`
      header{
        display: none !important;
      }
      .mxa-footer-ornament-shape{
        display: none !important;
      }
      footer{
        display: none !important;
      }
    `}</style>
   </>
  )
}

export default error404;