import React from 'react';
import logo from '../images/logo.svg';
import SideBar from "./sidebar";
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function Header (){
    return(
        <header>
             <nav className='the-nav'>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <ul className='nav-ul'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
               
            </nav> 
            <span id="App">
      <SideBar /*pageWrapId={"page-wrap"}*/ outerContainerId={"App"} />
</span>
<span className= 'mobile-img'>
                    <img src={logo} alt='logo' />
                </span>
            <h1>Fastest &amp; secure platform to invest in crypto</h1>
            <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
            
            <a className='btn' href='/#'>Try for FREE  <IoIosArrowDroprightCircle size='24px' /> </a>
            
        </header>
    )
}