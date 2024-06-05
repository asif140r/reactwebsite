import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="bg-black text-white px-[30px]">
    <nav className="flex items-center justify-between w-[100%] pt-[12px]">
       <h2 className="font-[Circular Std] font-[700] text-[36px] leading-[90px] text-to-r from-[#243FE2] to[#E224DB] text">Twittery</h2>
       <div>
            <ul className="flex justify-between items-center border-[1px] border-[#FFFFFF33] rounded-[50px] h-[50px] w-[568px] px-8 py-[15px]">
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px] text-[#EA00F5]">Home</li>
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px]">Company</li>
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px]">Pricing</li>
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px]">FAQ</li>
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px]">Contact</li>
            </ul>
          </div>

           
           <ul className=" md:flex items-center ">
              <li className="font-[Montserrat] font-[400] text-[16px] leading-[19.5px] text-[#FFFFFF]">Login</li>
              <li className="  ml-[40px] border-[#EA00F5] border-[1px] w-[171px] h-[50px] rounded-[50px] text-center pt-3">Book now</li>
            </ul>
           
       
    </nav>
    </div>
    </>
  )
}

export default Navbar