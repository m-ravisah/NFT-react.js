import React, { useState, useEffect } from 'react'
import "../css/marketplace.css";
import { useNavigate } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import logo from "../img/logo.b8ea790.svg";
import keeper from "../img/keeper.5fe351f.png";


const Topnavbar = () => {
    const navigate = useNavigate('');
    const [open, setOpen] = React.useState(false);
        
    const handleClickToOpen = () => {
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };

    const token = localStorage.getItem("token")
    const logout =()=>{
    localStorage.removeItem("token");
        navigate('/signin');
    }
    return(
    <>
        {!token?
            
            <div id="withoutLogin">
            <div className="header flex">
                <div className="logo">
                    <button onClick={()=>navigate('/')}>
                        <img className="logosize" src={ logo } alt="logo"/>
                    </button>

                </div>
                <div className="menu">
                        <div className="explore">
                            <button onClick={()=> navigate('/explore')}>Explore</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/stats')}>Stats</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/creator')}>Creator</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/team')}>Team</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/blog')}>Blog</button>
                        </div>

                </div>

                <div className="walletbtn">
                    <button type="button" className="px-2 py-2 rounded-lg btncolor" onClick={handleClickToOpen}>
                        <span className="text-white font-16 py-1">Connect Wallet</span>
                    </button>
                    <Dialog open={open} onClose={handleToClose}>        
                        <DialogContentText className="dialogBox">
                            <div className="connMethod">Choose your connection method</div>
                            <div className="dialogTitle">Wave Keeper &amp; MetaMask required a browser
                                extension</div>
                            <div className="dialogBtnDiv">
                                <input type="button" className="dialogBoxBtn"
                                    value= "LOGIN WITH EMAIL"
                                />
                            </div>
                            <div className="dialogBtnDiv">
                                <p type="button" className="dialogBoxBtn">
                                    <img src={ keeper } className="keeper" alt='keeper'/>
                                    KEEPER </p>
                                    {/* <button>WAVE</button> */}
                            </div>
                        </DialogContentText>
                        <div className="closbtnDiv">
                            <Button className="closeBtn" onClick={handleToClose} autoFocus>
                                Close
                            </Button>
                        </div>
                    </Dialog>
            </div>

            <div className="hidden xl:flex ml-5">
                <div className="hidden xl:flex mx-3">
                <div className="w-auto flex flex-col md:flex-row align-center justify-center">
                    <span className="bg-white w-[1px] h-[40px]"></span>
                </div>
                </div>
                <div className="hidden xl:flex mx-3 min-w-[70px]">
                <div className="w-auto flex flex-col md:flex-row signin">
                    <button  onClick={()=>navigate('/signin')} >
                    <span className="text-white">Sign in</span>
                    </button>
                
                </div>
                </div>
                <div className="hidden xl:flex mx-3 min-w-[70px]">
                <div className="w-auto flex flex-col md:flex-row signup">
                    <button onClick={()=> navigate('/signup')}>
                    <span className="signupColor">Sign up</span>
                    </button>
                </div>
                </div>
            </div>
            </div>
            </div> :

            <div id='withLogin'>
                <div className="header flex justify-between">
                    <div className="logo">
                        <button onClick={()=>navigate('/')}>
                            <img className="logosize" src={ logo } alt="logo"/>
                        </button>

                    </div>
                    <div className="menu">
                        <div className="explore">
                            <button onClick={()=> navigate('/explore')}>Explore</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/stats')}>Stats</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/creator')}>Creator</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/team')}>Team</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/blog')}>Blog</button>
                        </div>
                        <div className="explore">
                            <button onClick={()=> navigate('/profile')}>Profile</button>
                        </div>
                        <div className="explore">
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>

                    <div className="walletbtn">
                        <button type="button" className="px-2 py-2 rounded-lg btncolor" onClick={handleClickToOpen}>
                            <span className="text-white font-16 py-1">Connect Wallet</span>
                        </button>
                        <Dialog open={open} onClose={handleToClose}>        
                            <DialogContentText className="dialogBox">
                                <div className="connMethod">Choose your connection method</div>
                                <div className="dialogTitle">Wave Keeper &amp; MetaMask required a browser
                                    extension</div>
                                <div className="dialogBtnDiv">
                                    <input type="button" className="dialogBoxBtn"
                                        value= "LOGIN WITH EMAIL"
                                    />
                                </div>
                                <div className="dialogBtnDiv">
                                    <p type="button" className="dialogBoxBtn">
                                        <img src={ keeper } className="keeper" alt='keeper'/>
                                        KEEPER </p>
                                        {/* <button>WAVE</button> */}
                                </div>
                            </DialogContentText>
                            <div className="closbtnDiv">
                                <Button className="closeBtn" onClick={handleToClose} autoFocus>
                                    Close
                                </Button>
                            </div>
                        </Dialog>
                    </div>

                   
                </div>
            </div>
        
        }
    

    </>
    )

}
export default Topnavbar