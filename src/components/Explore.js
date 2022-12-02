import React from 'react'
import "../css/marketplace.css";
import Topnavbar from "./Topnavbar";
import { useState } from 'react';
import Footer from "./Footer";
import ladyimg from '../img/32716342251668159026599.png';
import nftimage from '../img/28787322511667214457632.jpg';
import { red } from '@material-ui/core/colors';


const Explore = () => {
	const[stylebox, setStylebox]= useState(false);
	const handleClick=()=>{
		setStylebox(true);
	}


  return (
	<>
		
		<div className="body">
			<div className="container">
				<Topnavbar/>
				<div className='statsSearchbar'>
					<input type="text" className='inputSearch  rounded-md' placeholder='Search by name or attributes' />
				</div>

				<div className='searchtitle'>
					<h2 className='exploreBlockChain'>Explore all Blockchains</h2>
				</div>
				<div className='flex justify-between mb-10'>
					<div className='flex'>
						<div className='waves mx-4'>
							<input type="button" className='Blockchainbtn rounded-md' value="Blockchain" />
						</div>
						<div className='waves mx-4'>
							<input type="button" className='Categorybtn rounded-md' value="Category" />
						</div>
						<div className='waves mx-4'>
							<input type="button" className='Statusbtn rounded-md' value="Status" />
						</div>
					</div>
					<div className='flex'>
						<div className='waves mx-4'>
							<input type="button" className='Statusbtn rounded-md' value="Status" />
						</div>
						
						<div className= 'viewType flex mx-4 rounded-md'>
            {/* {stylebox?<Largelist/>:<Smalllist/>} */}
							<div id='smalllist'>
							<div className='rounded-md p-2' onClick={handleClick}>
								<img src="https://img.icons8.com/ios/50/null/instagram-new--v1.png" width={25} alt="icons"/>
							</div>
							</div>
							<div>
							<div classidName='rounded-md p-2' id="largelist" > 
								<img src="https://img.icons8.com/ios/50/null/instagram-new--v1.png" width={25} alt="icons"/>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex'>
				<div className='firstnft w-1/4 px-3'>
                      <img src= { nftimage } alt="nftimage" className=''/>
                      <div className='class="btn-grad text-white font-16 font-medium rounded-full py-2 px-6 absolute nft-card-category"'>Art</div>
                      <div className='nftsdetails'>
                        <div className="flex mx-1">
                          <div className="no">
                              <img src= { ladyimg } width={ 40 } alt="ladyimg"/>
                          </div>
                          <div className="align-center text-white">admin</div>
                          <div className='pr-5'>
                            <p>12days</p>
                            <p>7hrs</p>
                          </div>
                          <div className='text-white'>Left</div>
                        </div>
                        <div className='lionDiv'>
                          <p className='font-bold text-white font-xl-20'>Lion#1</p>
                        </div>
                        <div className='px-4'>
                        <p className='pb-0 mb-0 font-medium font-16 text-slate-500'>Highest Bid</p>
                        <div className='my-1 mr-2 text-color-landing-drop font-semibold'>0.05 Waves</div>
                        </div>
                      </div>
                    </div>
					<div className='firstnft w-1/4 px-3'>
                      <img src= { nftimage } alt="nftimage" className=''/>
                      <div className='class="btn-grad text-white font-16 font-medium rounded-full py-2 px-6 absolute nft-card-category"'>Art</div>
                      <div className='nftsdetails'>
                        <div className="flex mx-1">
                          <div className="no">
                              <img src= { ladyimg } width={ 40 } alt="ladyimg"/>
                          </div>
                          <div className="align-center text-white">admin</div>
                          <div className='pr-5'>
                            <p>12days</p>
                            <p>7hrs</p>
                          </div>
                          <div className='text-white'>Left</div>
                        </div>
                        <div className='lionDiv'>
                          <p className='font-bold text-white font-xl-20'>Lion#1</p>
                        </div>
                        <div className='px-4'>
                        <p className='pb-0 mb-0 font-medium font-16 text-slate-500'>Highest Bid</p>
                        <div className='my-1 mr-2 text-color-landing-drop font-semibold'>0.05 Waves</div>
                        </div>
                      </div>
                    </div>
					<div className='firstnft w-1/4 px-3'>
                      <img src= { nftimage } alt="nftimage" className=''/>
                      <div className='class="btn-grad text-white font-16 font-medium rounded-full py-2 px-6 absolute nft-card-category"'>Art</div>
                      <div className='nftsdetails'>
                        <div className="flex mx-1">
                          <div className="no">
                              <img src= { ladyimg } width={ 40 } alt="ladyimg"/>
                          </div>
                          <div className="align-center text-white">admin</div>
                          <div className='pr-5'>
                            <p>12days</p>
                            <p>7hrs</p>
                          </div>
                          <div className='text-white'>Left</div>
                        </div>
                        <div className='lionDiv'>
                          <p className='font-bold text-white font-xl-20'>Lion#1</p>
                        </div>
                        <div className='px-4'>
                        <p className='pb-0 mb-0 font-medium font-16 text-slate-500'>Highest Bid</p>
                        <div className='my-1 mr-2 text-color-landing-drop font-semibold'>0.05 Waves</div>
                        </div>
                      </div>
                    </div>
					<div className='firstnft w-1/4 px-3'>
                      <img src= { nftimage } alt="nftimage" className=''/>
                      <div className='class="btn-grad text-white font-16 font-medium rounded-full py-2 px-6 absolute nft-card-category"'>Art</div>
                      <div className='nftsdetails'>
                        <div className="flex mx-1">
                          <div className="no">
                              <img src= { ladyimg } width={ 40 } alt="ladyimg"/>
                          </div>
                          <div className="align-center text-white">admin</div>
                          <div className='pr-5'>
                            <p>12days</p>
                            <p>7hrs</p>
                          </div>
                          <div className='text-white'>Left</div>
                        </div>
                        <div className='lionDiv'>
                          <p className='font-bold text-white font-xl-20'>Lion#1</p>
                        </div>
                        <div className='px-4'>
                        <p className='pb-0 mb-0 font-medium font-16 text-slate-500'>Highest Bid</p>
                        <div className='my-1 mr-2 text-color-landing-drop font-semibold'>0.05 Waves</div>
                        </div>
                      </div>
                    </div>


				</div>
				<Footer/>
			</div>
		</div>
	</>
  )
}

export default Explore