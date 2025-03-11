import React from 'react'
import column from '../assets/column.png'
import Countdown from "react-countdown";
import { CgInstagram, CgMail } from 'react-icons/cg';

const Hero = () => {

  const targetDate = new Date("2025-04-15T08:00:00");

  return (
    <div className='bg-[#FFF2DB] h-max font-roman flex flex-col items-center justify-center text-[#a86d36]'>

      <div className='w-full bg-[#68421e] py-4 flex items-center justify-around text-white one-title mb-28'>
          <h2 className=''>
            TUCMUN 1
          </h2>
          <div className='flex gap-x-6'>
            <a href="#">About</a>
            <a href="#">Conference</a>
            <a href="#">Committee</a>
            <a href="#">Charity</a>
            <a href="#">Keynote</a>
            <a href="#">Registration</a>
          </div>
        </div>

      <div className='flex flex-col items-center justify-center gap-y-28 w-full max-w-[70rem] mx-auto mb-28'> 
        <div className='flex gap-x-12 items-center py-40'>
          <img src={column} alt="" className='h-[25rem]'/>
          <div className='flex flex-col gap-y-4 text-center font-semibold'>
            <h1 className='eight-title'>
              Welcome to <br />
              <span className='text-[#68421e]'>TUCMUN I</span>
            </h1>
            <p className='three-title'>
              "Roar the Truth"
            </p>
          </div>
          <img src={column} alt="" className='h-[25rem]'/>
        </div>

        <div className='flex flex-col gap-y-2 items-center'>
          <h2 className='five-title font-semibold'>
            Registration Closes Soon.
          </h2>
          <div className="flex flex-col items-center justify-center text-white p-6">
                <Countdown
                    date={targetDate}
                    renderer={({ days, hours, minutes, seconds }) => (
                        <div className="flex space-x-10 eight-title text-[#68421e] font-semibold">
                            <div className="px-4 py-1 rounded flex flex-col items-center">
                              <h1>{days}</h1>
                              <p className='one-title'>Days</p>
                            </div>
                            <div> : </div>
                            <div className="px-4 py-1 rounded flex flex-col items-center">
                              <h1>{hours}</h1>
                              <p className='one-title'>Hours</p>
                            </div>
                            <div> : </div>
                            <div className="px-4 py-1 rounded flex flex-col items-center">
                              <h1>{minutes}</h1>
                              <p className='one-title'>
                                Minutes</p>
                            </div>
                            <div> : </div>
                            <div className="px-4 py-1 rounded flex flex-col items-center">
                              <h1>{seconds}</h1>
                              <p className='one-title'>Seconds</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>

        <div className='py-10 w-full grid grid-cols-3 gap-6'>
            <div className='bg-[#e9dbc6] p-6 w-full rounded-lg text-[#68421e] flex flex-col items-center justify-center -rotate-1'>
              <h2 className='three-title font-semibold text-center'>
                April 11th (Friday) -12th (Saturday)
              </h2>
            </div>

            <div className='bg-[#e9dbc6] p-6 w-full rounded-lg text-[#68421e] flex flex-col items-center justify-center font-semibold rotate-1'>
              <h2 className='three-title text-center'>
                Contact
              </h2>
              <a href='mailto:tucmunregistration@gmail.com' className='one-title underline text-blue-600'>
                tucmunregistration@gmail.com
              </a>
            </div>

            <div className='bg-[#e9dbc6] p-6 w-full rounded-lg text-[#68421e] text-center flex flex-col items-center justify-center font-semibold -rotate-1'>
              <h2 className='three-title'>
                Location
              </h2>
              <a href='mailto:tucmunregistration@gmail.com' className='one-title underline text-blue-600'>
                2910 N Parham Rd, Henrico, VA 23294
              </a>
            </div>

        </div>

      </div>

      <div className='w-full bg-[#68421e] py-10 flex flex-col items-center justify-center text-white one-title gap-y-6'>
          <h2 className='seven-title'>
            TUCMUN 1
          </h2>
          <div className='flex gap-x-6'>
            <a href="#">About</a>
            <a href="#">Conference</a>
            <a href="#">Committee</a>
            <a href="#">Charity</a>
            <a href="#">Keynote</a>
            <a href="#">Registration</a>
          </div>
          <div className="flex items-center gap-x-6">
            <CgInstagram className='h-8 w-8'/>
            <CgMail className='h-10 w-10'/>
          </div>
        </div>

    </div>
  )
}

export default Hero