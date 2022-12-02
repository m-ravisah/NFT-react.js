import React from 'react'
import "../css/marketplace.css";
import starimage from "../img/wave.6c32376.png";

const Footer = () => {
//     const array = [2, 5, 9];

//     console.log(array);
    
//     const index = array.indexOf(5);
//     if (index > -1) { 
//       array.splice(index, 1); 
//     }
    
//     
//     console.log(array);

  return (
    <>
    <div className="eighth_section flex">
        <div className="w-2/5">
            <div className="eighthSectionTitle flex">
                <div className="icon">
                    <img src= {starimage} className="starpic" alt="starimage"/>
                </div>
                <div>
                    <p className="opacity-75 font-16 mx-3 text-white">
                        Create, sell, or collect digital items<br/>
                        secured with blockchain
                    </p>
                </div>
            </div>
            <div className="flex mt-5">
                <div className="ml-3">
                    <img src="https://img.icons8.com/ios/50/null/twitter--v1.png" width={35} alt="icons"/>
                </div>
                <div className="ml-3">
                    <img src="https://img.icons8.com/ios/50/null/linkedin.png" width={35} alt="icons"/>
                </div>
                <div className="ml-3">
                    <img src="https://img.icons8.com/ios/50/null/instagram-new--v1.png" width={35} alt="icons"/>
                </div>
            </div>
        </div>

        <div className="marketplace">
            <h6 className="marketplaceTitle mb-3">Marketplace</h6>
            <ul className='pl-0'>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75 ">Drops</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">Creators</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">Collection</li>
                </a>
            </ul>
        </div>

        <div className="company">
            <h6 className="companyTitle mb-3">Company</h6>
            <ul className='pl-0'>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">About</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">Mission and Team</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">My Blog</li>
                </a>
            </ul>
        </div>

        <div className="help">
            <h6 className="helpTitle mb-3">Help</h6>
            <ul className='pl-0'>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">How it works</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">FAQs</li>
                </a>
                <a href="" className='no-underline'>
                    <li className="font-16 mb-3 opacity-75">Support</li>
                </a>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Footer