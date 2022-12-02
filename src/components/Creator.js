import React from 'react';
import "../css/marketplace.css";
import Topnavbar from './Topnavbar';
import Footer from './Footer';

const creator = () => {
  return (
	<>
		<div className='body'>
			<div className='container'>
				<Topnavbar/>

				<Footer/>
			</div>
		</div>
	</>
  )
}

export default creator