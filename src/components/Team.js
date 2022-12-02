import React from 'react';
import "../css/marketplace.css";
import Topnavbar from "./Topnavbar";
import Footer from './Footer';
import teamimg from "../img/teams-card-img.76c353e.svg";



const Team = () => {

  return (
	<>
		<div className="body">
			<div className="container">
				<Topnavbar/>
				<div className='team_section flex'>
					<div className='teamDiv rounded-md'>
						<div className='teamImage'>
							<img src= {teamimg} alt="teamimage" className='teamImgSize rounded-md'/>

							<p className='introName'>Ravi Sah</p>
							<h5 className='introPosition'>Co-founder and President</h5>
						</div>
						
					</div>
					<div className='teamintro'>
						<h2 className='creative'>Creative</h2>
						<h2 className='ourTeams'>Our Teams</h2>
						<p className='teamdescription'>Facilisi ipsum nunc dolor, viverra ornare. Odio commodo auctor nulla idet, quisque eu. Diam, nulla le
						<br/><br/>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
					</div>
					<div>
						
					</div>
				</div>

				<Footer/>

			</div>  
    	</div>
	</>
  )
}


export default Team