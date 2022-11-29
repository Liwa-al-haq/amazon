import React, { Component } from 'react'
import logo from "./img/logo.png"
import flag from './img/images.png'
export class Header extends Component {
  render() {
    return (
        <div>
      <div className='flex w-screen h-16'style={{backgroundColor:"rgb(19,25,33)"}}>

        <img src={logo} alt='' className='w-23 h-11 ml-2 mt-3'></img>
        <div className='mt-5 ml-3 text-white'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 max-[1020px]:hidden">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  </div>
        <ul className='flex flex-wrap text-white mt-1 flex-col max-[1020px]:hidden'>
            <li className='text-xs mt-2' >Hello</li>
            <li className='font-bold text-sm truncate' >Select your address</li>
        </ul>
        {/* <input type="text"
                    placeholder=" Search Courses"
                    name="search"/>
                <button>
                    <i class="fa fa-search"
                        style="font-size: 18px;">
                    </i>
                </button> */}
                
        <select name="menu" id="cars"className='ml-10 w-12 h-10 mt-3 rounded-l border-gray-500'>
        <option value="volvo">All</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
        <input type='text' placeholder=" " className=' h-10 mt-3 w-5/12'/>
        <button style={{backgroundColor:"rgb(242,168,70)"}}className='h-10 mt-3 w-11 rounded-r'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
<img src={flag} className='h-3.5 mt-7 ml-10 max-[1200px]:hidden'alt=''></img>
                <h4 className='mt-6 ml-1 text-white font-bold text-sm max-[1200px]:hidden'>EN</h4>
      <div className='ml-3'>
   <p className='text-xs text-white mt-3 ml-4 pt-1 max-[1200px]:hidden truncate'>Hello, sign in</p>   
     <p className='font-bold text-sm text-white ml-4 pt--1 max-[1200px]:hidden truncate'>Accounts & Lists</p>
      </div>
      <div className='ml-3'>
   <p className='text-xs text-white mt-3 ml-4 pt-1 max-[1200px]:hidden truncate'>Returns</p>   
     <p className='font-bold text-sm text-white ml-4 pt--1 max-[1200px]:hidden truncate'>& Orders</p>
      </div>
      <a className=' '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-7 w-29 h-10 mt-3 text-white justify-end ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</a>
<p className='font-bold text-white mt-7 text-sm'>Cart</p>
      </div>

        <div className='flex w-screen h-10 pb-1'style={{backgroundColor:"rgb(35,47,62)"}}>
            <ul className='justify-between gap-4 ml-4 mt-2 flex flex-wrap text-white '>
                <li><svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </li>
        <li className='hover:border'>All</li>
        <li className='hover:border'>Amazon miniTV</li>
        <li className='hover:border'>Sell</li>
        <li className='hover:border'>Best Sellers</li>
        <li className='hover:border'>Mobiles</li>
        <li className='hover:border'>Today's Deals</li>
        <li className='hover:border'>Customer Service</li>
        <li className='hover:border'>Electronics</li>
        <li className='hover:border'>Prime</li>
        <li className='hover:border'>Home & Kitchen</li>
        <li className='hover:border'>Fashion</li>
        <li className='hover:border'>New Releases</li>
        <li className='hover:border'>Amazon Pay</li>
        <li className='hover:border'>Books</li>
        <li className='hover:border'>Computers</li>
        <li className='hover:border'>Coupons</li>
            </ul>
        </div> 
    
        </div>
      
    )
  }
}

export default Header