import React from 'react'
import img from "../assets/a.png"
import img2 from "../assets/b.png"


const Pricing = () => {
  return (
    <>
    <div className='md:flex items-center justify-center gap-[30px] mt-[150px]'>
    <div className='ml-[100px] md:ml-0 mb-9 md:mb-0'>
        <p className='w-[160px] font-[Outfit] text-[16px] leading-[24px] tracking-[10%] text-[#E224DB]'>PRICING OPTIONS</p>
        <h2 className='font-[Roboto] font-[700] text-[50px] leading-[60px] text-[#FFFFFF] mt-[8px] mb-[36px]'>Our Twitter <br /> Pricing Plans.</h2>
        <p className='font-[Epilogue] font-[500] text-[20px] leading-[70px] text-white'>Save 30% on the yearly Packages</p>

        <div className='flex items-center gap-[20px] text-white'>
            <p>MONTHLY</p>
            <div className='w-[80px] h-[40px] rounded-[20px] bg-white'></div>
            <p>YEARLY</p>
        </div>
    </div>

   <div className='md:flex items-center gap-[30px]'>
   <div className='flex items-center flex-col text-white bg-[#120F22] w-[100%] md:w-[360px] py-5'>
         <img className='mt-[50px] mb-[40px]' src={img} alt="" />
         <hr className='w-[360px] border-0 my-2 h-[1px] bg-[#FFFFFF26]' />
         <p className='mb-[30px] font-[Roboto] text-[24px] font-[700] leading-[30px]'>Agency Plan</p>
         <h3 className='mb-[30px] font-[Roboto] text-[42px] font-[700] leading-[60px]'>100$</h3>
         <p className='w-[217px] mt-[20px] font-[Outfit] text-[16px] font-[400] leading-[42px] text-[#FFFFFF99]'>Unlimited accs (pay per acc)
           Unlimited RTs
           1 hour support
          RT group trading network
          Private members group
          1-1 onboarding call
          25x cheaper than VAs
          Cancel anytime
        </p>
        <button className='w-[207px] h-[55px] bg-gradient-to-r from-[#531DD0] to-[#EA00F5] my-[40px]'>Start free 7 days trial</button>
    </div>


    <div className='flex items-center flex-col text-white bg-[#120F22] w-[100%] md:w-[360px]'>
         <img className='mt-[50px] mb-[40px]' src={img} alt="" />
         <hr className='w-[360px] border-0 my-2 h-[1px] bg-[#FFFFFF26]' />
         <p className='mb-[30px] font-[Roboto] text-[24px] font-[700] leading-[30px]'>Agency Plan</p>
         <h3 className='mb-[30px] font-[Roboto] text-[42px] font-[700] leading-[60px]'>100$</h3>
         <p className='w-[217px] mt-[20px] font-[Outfit] text-[16px] font-[400] leading-[42px] text-[#FFFFFF99]'>Unlimited accs (pay per acc)
         Unlimited accs (pay per acc) Unlimited RTs 1 hour support Unlimited free RT groups RT group trading network Private members group 1-1 onboarding call 25x cheaper than VAs
        </p>
        <button className='w-[207px] h-[55px] bg-gradient-to-r from-[#531DD0] to-[#EA00F5] my-[40px]'>Show more</button>
    </div>

   </div>

    </div>
    
    </>
  )
}

export default Pricing