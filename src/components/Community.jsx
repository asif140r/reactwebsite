import React from 'react'
import img from "../assets/Discord.png";
import img1 from "../assets/ri.png";



const Community = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center pt-[108px] bg-black'>
        <div>
        <div className='flex items-center justify-center gap-[39px]'>
            <img src={img1} alt="" />
          <h2 className='text-white text-center font-[Montserrat] font-[700] text-[20px] md:text-[48px] leading-[66px] '>Join Our Community</h2>
        </div>

         <p className='w-[400px] md:w-[777px] font-[Open Sans] font-[24px] leading-[32.68px] text-[#86909D] text-center mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Quis non fugit</p>
         
        </div>

        <button className='flex items-center justify-center gap-[10px]  w-[226px] h-[60px] rounded-[50px] bg-gradient-to-r from-[#531DD0] to-[#EA00F5] mt-[43px]'>
            <span className='font-[Montserrat] text-white font-[600] leading-[32px]'>JOIN DISCORD</span>
            <img src={img} alt="" />
         </button>
    </div>
    </>
  )
}

export default Community