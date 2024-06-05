import React from 'react'
import img1 from "../assets/f/Discord.png";
import ins from "../assets/f/i.png";
import tr from "../assets/f/tr.png";
import t from "../assets/f/t.png";

import rl from "../assets/f/rl.png";

const Footer = () => {
  return (
    <>
    <div className='bg-black pt-[107px] w-[100%] md:flex'>
        <div className="ml-[50px] mr-[95px]">
        <h2 className="font-[Circular Std] font-[700] text-[36px] leading-[90px] text-to-r from-[#243FE2] to[#E224DB] text mb-[12px] mt-[-50px]">Twittery</h2>
        <p className='w-[358px] font-[Open Sans] font-[400] text-[16px] leading-[29px] text-[#9CA3AF]'>There are many variations of passages of Lorem Ipsum available but majority have suffered alteration in some form by injected.</p>
          
          <div className='flex gap-[15px] mt-[30px]'>
          <div className='w-[50px] h-[50px] bg-[#5950894D] rounded-[10px] flex items-center justify-center'>
            <img src={tr} alt="" />
          </div>

          <div className='w-[50px] h-[50px] bg-[#5950894D] rounded-[10px] flex items-center justify-center'>
            <img src={ins} alt="" />
          </div>

          <div className='w-[50px] h-[50px] bg-[#5950894D] rounded-[10px] flex items-center justify-center'>
            <img src={t} alt="" />
          </div>

          <div className='w-[50px] h-[50px] bg-[#5950894D] rounded-[10px] flex items-center justify-center'>
            <img src={tr} alt="" />
          </div>
          </div>
        <div>

        </div>
        </div>

        <div className="text-[#FFFFFF] mt-8 mb-6 md:mb-0 md:mt-0 ml-[100px] md:ml-[1px]">
          <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] mb-[20px] '>Company</h3>
          <ul>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Jobs</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Pricacy</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Terms</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Cookies</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Contact Support</li>
          </ul>
        </div>

        <div className="text-[#FFFFFF] ml-[95px]">
          <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] mb-[20px]'>Create</h3>
          <ul>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Social Post</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Mockup Make</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Animation Gif</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Photo Lyric</li>
            <li className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] pb-3'>Cartoon</li>
          </ul>
        </div>

        <div className="text-[#FFFFFF] ml-4 mr-3 md:ml-[99px]">
          <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] mt-9 md:mt-0 mb-[20px]'>Join Newslatter</h3>
          <p className='font-[Open Sans] font-[400] text-[16px] leadding-[46px] text-[#9CA3AF] w-[329px]'>signup for our newsletter to get the latest News in your inbox.</p>

          <div className='border-[1px] flex items-center justify-center mt-[29px]'>
            <input className='w-[100%] h-[100%] bgn p-2 ' type="text" placeholder='Email Address'/>
            <button className='bg-[#EA00F5] w-[72px] h-[45px] rounded-[10px] flex items-center justify-center '><img src={rl} alt="" /></button>
          </div>
        </div>

    </div>
    
    <div className='md:flex items-center justify-between px-[70px] pt-[85px] pb-[110px] bg-black'>
          <div className='flex '>
            <p className='font-[Open Sans] font-[400] text-[14px] leading-[29px] text-[#9CA3AF] mr-[38px]'>Copyright - All Rights Reserved.</p>
            <ul className='flex gap-[22px]'>
              <li className='font-[Open Sans] font-[400] text-[14px] leading-[29px] text-[#9CA3AF]'>Terms</li>
              <li className='font-[Open Sans] font-[400] text-[14px] leading-[29px] text-[#9CA3AF]'>Privacy</li>
            </ul>
          </div>
          <p className='font-[Open Sans] font-[400] text-[14px] leading-[29px] text-[#9CA3AF] mt-10 md:mt-0'>Made with  By Twittery</p>
      </div>
    </>
  )
}

export default Footer