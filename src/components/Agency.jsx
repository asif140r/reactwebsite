import React from 'react'
import img from "../assets/i1.png";
import img2 from "../assets/image 1370.png";

const Agency = () => {
  return (
    <>
    <div className='md:flex items-center bg-black pt-16 md:pt-[274px]'>
        <img className='w-[400px] mb-9 md:mb-0 md:w-[430px] rounded-[10px] ml-12' src={img} alt="" />
        <div className='text-[#FFFFFF] ml-12 md:ml-[108px]'>
            <h3 className=' font-[Montserrat] font-[700] text-[42px] md:text-[48px] leadding-[66px] pb-[30px]'>Fine-tuned by agency owners We understand <br /> how to get results for your models</h3>
            <p className='w-[400px] md:w-[636px] font-[Open Sans] font-[400] text-[16px] leadding-[29px] text-[#9CA3AF] mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam. Lobortis massa hac inceptos volutpat iaculis porttitor vel potenti in dictum tempor, eleifend torquent mi ut at curabitur aenean quam nunc fames.</p>
            <p className='w-[400px] md:w-[636px] font-[Open Sans] font-[400] text-[16px] leadding-[29px]  text-[#9CA3AF]'>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam</p>
        </div>
    </div>

    <div className='md:flex items-center bg-black pt-10 md:pt-[152px] pl-[100px]'>
       
        <div className='text-[#FFFFFF] '>
            <h3 className=' font-[Montserrat] ml-[-40px] font-[700] text-[42px] md:text-[48px] md:leadding-[66px] pb-[30px]'>Fine-tuned by agency owners We understand how <br /> to get results for your models</h3>
            <p className='md:w-[636px] ml-[-32px] font-[Open Sans] font-[400] text-[16px] leadding-[29px] text-[#9CA3AF] mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam. Lobortis massa hac inceptos volutpat iaculis porttitor vel potenti in dictum tempor, eleifend torquent mi ut at curabitur aenean quam nunc fames.</p>
            <p className='md:w-[636px] ml-[-32px] font-[Open Sans] font-[400] text-[16px] leadding-[29px]  text-[#9CA3AF]'>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam</p>
        </div>

        <img className='w-[420px] rounded-[10px] ml-[-50px] md:ml-12' src={img2} alt="" />
    </div>
   
    
    </>
  )
}

export default Agency