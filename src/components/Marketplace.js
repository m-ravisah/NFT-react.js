import React from "react";
import "../css/marketplace.css";
import Topnavbar from "./Topnavbar";
import Footer from "./Footer";
import heroimg from "../img/nft-group-1.f479e2b.svg";
import multihero from "../img/../img/img-1.5aad5de.png";
import nature from "../img/26550285971667403331677.jpeg";
import ladyimg from "../img/32716342251668159026599.png";
import fastTransaction from "../img/../img/fast-transaction.e2ddce7.svg";


const Marketplace = () => {

return (
    <>
    <div className="body">
        <div className="container">
           
            <Topnavbar/>
            <div className="first_section">
                <div className="titletext w-2/4">
                    <div className="title">
                        <h2 className="font-25 font-md-40 font-lg-46 font-xl-54 font-xxl-66 mt-0 xl:mt-12 theme-text-color">
                            <span className="intro font-bold textColor">
                            Discover, and collect Digital Art 
                                <span className="nfts">
                                &nbsp;NFTs
                                </span>
                            </span>
                        </h2>
                        <p className="opacity-75 my-3 nftintro textColor">
                            Digital marketplace for crypto
                            collectibles and non-fungible tokens
                            (NFTs). Buy, Sell, and discover exclusive
                            digital assets.
                        </p>
                    </div>
                    <div className="w-auto flex items-center mt-12 hero-btn-wrapper">
                        <a
                        href="/marketplace/explore"
                        className="">
                            <button type="button" className="px-2 py-2 rounded-lg btncolor">
                                <span className="capitalize font-16 py-1 textColor">Explore</span>
                            </button>
                        </a>
                    </div>

                </div>
                <div className="nftimage w-2/4">
                    <img src= { heroimg }  alt= "heroimg"/>
                </div>
            </div>

            <div className="second_section">
                <div className="firstContent w-11/12">
                    <div className="firsttext">
                        <p className="textP">
                        The amazing NFT <br/>
                        art of the world <br/> here
                        </p>
                    </div>

                    <div className="lastContent w-8/12">
                        <div className="secondContent w-2/4">
                            <div className="secondContentIcon mx-3">
                                <img src={ fastTransaction } alt="fastTransaction"/>
                            </div>
                            <div className="secondContentText">
                                <p className="textColors">Fast Transaction</p>
                                <p className="textColorDescription">
                                    Lorem ipsum dolor sit amet,<br/>
                                    consectetur adipiscing elit.<br/>
                                    Aliquam etiam viverra tellus<br/> imperdiet.
                                </p>
                            </div>
                        </div>


                        <div className="thirdContent w-2/4">
                            <div className="lastContentIcon mx-3">
                                <img src={ fastTransaction } alt="fastTransaction"/>
                            </div>
                            <div className="lastContentText">
                                <p className="textColors">Growth Transaction</p>
                                <p className="textColorDescription">
                                    Lorem ipsum dolor sit amet,<br/>
                                    consectetur adipiscing elit.<br/>
                                    Aliquam etiam viverra tellus<br/> imperdiet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third_section my-5">
                <h2 className="topCreators">Latest Drops</h2>
                <div className="button">
                    <button className="btnColor rounded">View All</button>
                </div>
            </div>

            <div className="fourth_section my-5">
                <h2 className="topCreators">Top Creators</h2>
                <div className="twoCreators">
                    <div className="flex creators mx-2">
                        <div className="no">1</div>
                        <div className="no">
                            <img src= { ladyimg } width={ 40 } alt="ladyimg"/>
                        </div>
                        <div>
                            <div className="name">admin</div>
                            <div className="name">@admin</div>
                        </div>
                    </div>
                    <div className="flex creators mx-2">
                        <div className="no">2</div>
                        <div className="no nature">
                            <img src={ nature } alt="nature"/>
                        </div>
                        <div>
                            <div className="name">user</div>
                            <div className="name">@user</div>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="btnColor rounded">View All</button>
                </div>
            </div>

            <div className="fifth_section my-5">
                <h2 className="topCreators">Top Ranking</h2>
                <div className="button">
                    <button className="btnColor rounded">View All</button>
                </div>
            </div>

            <div className="seventh_section mt-5">
                <div className="multiimage 2/5">
                    <img src= { multihero } alt="multihero"/>
                </div>
                <div className="sevenSectiontext p-3 w-3/5">
                    <h3 className="fonttitle">
                        Never Miss a drop
                    </h3>
                    <p className="sevenSectionDescription mt-6 mb-8 opacity-75">
                        Facilisi ipsum nunc dolor, viverra
                        ornare. Odio commodo auctor <br/> nulla id
                        et, quisque eu. Diam, nulla leo
                        lectus arcu neque, <br/> aliquam. Tortor
                        ut proin nibh rhoncus phasellus
                        mattis.
                    </p>
                    <div>
                        <input className="px-5 py-3 rounded" type="text" placeholder="Enter Your Mail"/>
                        <input type="button" className="px-5 py-3 mx-3 rounded btnColor" value="Subscribe"/>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>  
    </div>
        
    </>
  )
}



export default Marketplace;
