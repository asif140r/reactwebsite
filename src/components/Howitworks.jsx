import React from 'react'
import logo1 from "../assets/1.png"
import logo2 from "../assets/2.png"
import logo3 from "../assets/3.png"
import re from "../assets/re.jpg"


const Howitworks = () => {
  return (
    <>
    <div className='flex items-center flex-col bg-black text-[#FFFFFF] pt-14 md:pt-[196px]'>
        <h2 className='font-[Montserrat] font-[700] text-[48px] leading-[66px] mb-8 md:mb-[70px]'>How it works</h2>

        <div className='md:flex gap-[30px]'>
        <div className='flex items-center flex-col'>
        <div className='w-[121px] h-[121px] border-[1px] border-[#231E37] rounded-[50%] flex justify-center items-center relative'>
        <img className='' src={logo1} alt="" />
        <div className=''></div>
        </div>
        <div>
            <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] text-center mt-[30px]'>Type a Prompt</h3>
            <p className='w-[366px] font-[Open Sans] font-[400] leading-[29px] text-[16px] text-center text-[#9CA3AF] mt-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some.</p>
        </div>
        </div>


        <div className='flex items-center flex-col'>
        <div className='w-[121px] h-[121px] border-[1px] border-[#231E37] rounded-[50%] flex justify-center items-center relative'>
        <img className='' src={logo2} alt="" />
        <div className=''></div>
        </div>
        <div>
            <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] text-center mt-[30px]'>Generate Twitter</h3>
            <p className='w-[366px] font-[Open Sans] font-[400] leading-[29px] text-[16px] text-center text-[#9CA3AF] mt-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some.</p>
        </div>
        </div>

        <div className='flex items-center flex-col'>
        <div className='w-[121px] h-[121px] border-[1px] border-[#231E37] rounded-[50%] flex justify-center items-center relative'>
        <img className='' src={logo3} alt="" />
        <div className=''></div>
        </div>
        <div>
            <h3 className='font-[Montserrat] font-[600] text-[24px] leading-[29.26px] text-center mt-[30px]'>Export or create</h3>
            <p className='w-[366px] font-[Open Sans] font-[400] leading-[29px] text-[16px] text-center text-[#9CA3AF] mt-[20px] pb-[150px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some.</p>
        </div>
        </div>
        </div>
    </div>

  <img className='' src={re} alt="" />
    </>
  )
}

export default Howitworks