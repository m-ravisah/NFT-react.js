import React from 'react';
import "../css/marketplace.css";
import Topnavbar from "./Topnavbar";
import Footer from './Footer';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import profileimage from '../img/32716342251668159026599.png';
import starimage from '../img/wave.6c32376.png';
import nftimage from '../img/28787322511667214457632.jpg';
import ladyimg from "../img/32716342251668159026599.png";


const Profile = () => {
 
  const [showDropList, setShowDropList]= useState(false);
  const navigate = useNavigate('');
  const inputFile = useRef(null) 
  const handleClick = () => {
   inputFile.current.click();
  };
  

  const droplist = ()=>{
    setShowDropList(true)
  }
 

  const Results = () => (
    <div id="results" style={{boxShadow: '0 0 5px black'}} onClick={()=>navigate('/profile/edit')}>
      Setting
    </div>
  )
 
 
  return (
    <>
        <div className="body">
            <div className="container">
                <Topnavbar/>
                <div className='backgroundImage' >
                  <div className='imgagePosition' onClick={handleClick}>
                    <input type= 'file'  ref={inputFile} hidden/>
                    <img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/000000/external-edit-ui-basic-anggara-glyph-anggara-putra.png"/>
                  </div>
                </div>
                <div className='profileDetails'>
                  <div className='ProfilePic'>
                    <div className='profileSize' >
                      <img src= { profileimage } />
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      <h4 className='admintext'>Admin</h4>
                    </div>
                    <div className='flex relative'>
                      <span>
                      <button className='createNFT rounded-lg' onClick={()=> navigate('/createnft')}>CREATE NFT
                        </button>
                      </span>
                      
                      
                      <span className='shareicon'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/share--v1.png"/>
                      </span>
                      <span className='threedots' onClick={droplist}>
                        <img src="https://img.icons8.com/ios-filled/50/null/more.png" />
                      </span>
                          {showDropList?<Results/>:null}
                     
                      
                    </div>
                  </div>
                  <div className='userId pr-2 flex'>
                    <img src= { starimage } className="starimage1" alt="starimage"/>
                    <span className='wallet ml-2'>Wallet :</span>
                    <p className='id'>Bxtcsu..</p>
                  </div>

                  <div className='flex border-b-2'>
                    <div className='profilemenu'>created</div>
                    <div className='profilemenu'>Favourite</div>
                    <div className='profilemenu'>Activity</div>
                    <div className='profilemenu'>Collections</div>
                    <div className='profilemenu'>Menu</div>
                  </div>

                  <div className='nfts flex'>
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
                </div>
                <Footer/>
            </div>
        </div>        
    </>
  )
}

export default Profile