import React from 'react';
import './Block.css';

const Block = ({url,id,blockClicked,score,showOverlay})=>{
	return(
		<div className='fl w-third vh tc bg-light-green dib br1 pa1 ma1 grow bw2 shadow-5'
		onClick={() => {
			blockClicked(score);
		}}>
		<div className="overlay" style={{display: showOverlay === true ? 'block' : 'none'}}>
		<div className="text">{`+${score}`}</div>
		</div>
		<img src={url} alt='girly images' width='100%' height='100%'/>		
		</div>
		)
}

export default Block;