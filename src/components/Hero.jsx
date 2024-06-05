import React from 'react'
import img from '../assets/x.png'

const Hero = () => {
  return (
    <>
    <div className='bg-black text-[#FFFFFF] min-h-[100vh] flex items-center  flex-col pt-16 md:pt-[300px]'>
      <div className='flex items-center ml-[80px]'>
        <button className=' md:ml-0 w-[70px] h-[35px] rounded-[50px] bg-[#E224DB]'>New</button>
        <p className='w-[400px] md:w-[540px] font-[Circular Std] font-[450] text-[13px] md:text-[16px] leading-[5%] ml-[15px]'>5 Day FREE Trial to get your First 50 Only Fans subs from <img className='w-[14px] blk' src={img} /></p>
        </div>
        <h2 className='font-[Montserrat] font-[700] text-[30px] md:text-[72px] md:leading-[90px] text-center mt-[29px]'>Maximum <img className='blk' src={img} /> Traffic, Earn <br />
         Maximum Cashflow.</h2>
        <p className='font-[Open Sans] font-[400] text-[16px] px-3 md:text-[18px] text-[#EFEDFD] md:leading-[36px] text-center mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus, pretium feugiat morbi id <br /> nisi ligula urna, condimentum ante mollis interdum vulputate odio sodales.</p>
      
        <button className='bg-gradient-to-r from-[#531DD0] to-[#EA00F5]  font-[Montserrat] font-[600] text-[16px] leading-[32px] w-[200px] h-[60px] rounded-[50px] mt-[43px]'>Get Started Now</button>
        
    </div>
    </>
  )
}

export default Hero