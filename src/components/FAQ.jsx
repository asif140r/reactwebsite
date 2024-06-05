import React from 'react';
import img from '../assets/up.png';
import img2 from '../assets/down.png';


const FAQ = () => {
  return (
    <>
       <div className='ml-9 md:ml-0 flex flex-col items-center justify-center text-white bg-black pt-[130.39px] pb-[170px]'>
        <h2 className='font-[Montserrat] font-[700] text-[26px] md:text-[48px] leading-[66px] text-center'>Frequently Asked Questions</h2>
          <div className='flex flex-col justify-center items-center'>
          <div className='flex items-center md:gap-[84px] pt-10 md:pt-[105.58px]'>
            <h3 className='w-[370px] md:w-[900px] font-[Montserrat] font-[600] text-[18px] md:text-[24px] ml-4 leading-[29.26px]'>What is the reason for utilizing an AI-powered text-to-image generator?</h3>
            <img className='' src={img}  />
          </div>
          <p className='w-[380px] md:w-[900px]  pt-[48px] md:ml-[-50px] font-[Open Sans] font-[400] text-[16px] leading-[29px] text-[#9CA3AF]'>No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes.</p>
          </div>

          <div className='flex items-center gap-[120px]  md:gap-[710px]'>
            <h3 className='font-[Montserrat] font-[600] text-[18px] md:text-[24px] leading-[29.26px] ml-[-38px] md:ml-0 pt-[51px]'>What is Tweet Riser?</h3>
            <img className='mt-12' src={img2} alt="" />
          </div>

          <div className='flex items-center w-[400px] md:w-[1075px] gap-3 md:gap-[130px]'>
            <h3 className='font-[Montserrat] w-[420px] md:w-[870px] font-[600] text-[18px] ml-3 md:ml-4 md:text-[24px] leading-[29.26px] pt-[51px]'>Will Tweet Riser help me build an audience and grow my account?</h3>
            <img className='mt-12' src={img2} alt="" />
          </div>

          <div className='flex items-center w-[400px] md:w-[1075px] md:gap-[350px]'>
            <h3 className='font-[Montserrat] font-[600] text-[18px] md:text-[24px] leading-[29.26px] mr-9 pt-[51px] ml-[18px] w-[400px] md:w-[600px]'>Can I customize the messages sent by Tweet Riser?</h3>
            <img className='mt-6' src={img2} alt="" />
          </div>

          <div className='flex items-center md:gap-[300px] w-[400px] md:w-[1070px]'>
            <h3 className='font-[Montserrat] font-[600] text-[18px] md:text-[24px] leading-[29.26px] pt-[51px] ml-4 md:ml-8'>How do I integrate Tweet Riser with Twitter / X?</h3>
            <img className='mt-12 ml-[42px]' src={img2} alt="" />
          </div>
       </div>
    </>
  )
}

export default FAQ