import React from 'react'

function TopBar() {
  return (
    <div className="fixed w-full  z-30 bg-black text-white p-4">
      <ul className="flex flex-wrap justify-center md:justify-end items-center gap-x-7 gap-y-1 md:section text-[14px] xs:gap-x-3 sm:gap-x-7 md:gap-x-10  font-semibold">
        <li className="hover:text-gray-300 cursor-pointer">CONTACT US</li>
        <li className="hover:text-gray-300 cursor-pointer">CAREERS</li>
        <li className="hover:text-gray-300 cursor-pointer">LOGIN</li>
        <li className="hover:text-gray-300  cursor-pointer">+92 336 2627443</li>
      </ul>
    </div>
  )
}

export default TopBar
