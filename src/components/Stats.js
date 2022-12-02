import React from 'react';
import "../css/marketplace.css";
import Topnavbar from './Topnavbar';
import Footer from './Footer';


const Stats = () => {

	
  return (
	<>
		<div className='body'>
			<div className='container'>
				<Topnavbar/>
				<div className='statsSearchbar'>
					<input type="text" className='inputSearch  rounded-md' placeholder='Search by name or attributes' />
				</div>

				<div className='searchtitle'>
					<h2 className='topnfts'>Top NFTs Collections</h2>
				</div>
				<div className='catogorybtnDiv flex'> 
				<div className='mx-5 category'>
					<input type="button" className='catogorybtn rounded-md' value="Category" />
				</div>
				<div className='waves'>
					<input type="button" className='catogorybtn rounded-md' value="Waves" />
				</div>
				</div>

				<div className='tablehead my-6'>
					<table>
						<tr className='statTable'>
							<th>Collection</th>
							<th>volume</th>
							<th>24h %</th>
							<th>7d %</th>
						</tr>
						<tr className='statTable'>
							<th>ef</th>
							<th>ef</th>
							<th>ef</th>
							<th>ef</th>
						</tr>
					</table>
				</div>
				<Footer/>
			</div>
		</div>
	</>
  )
}

export default Stats