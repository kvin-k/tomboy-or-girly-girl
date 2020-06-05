import React from 'react';
import Block from './Block';
import './BlocksList.css'

const BlocksList=({blocksData,getScore,showOverlay})=>{

		const imageBlocks = blocksData.map(item=>
			<Block blockClicked={getScore} key={item.id} url={item.url} id={item.id} score={item.score}
			showOverlay={showOverlay}/>)
		return(
		<div className='container'>
			{imageBlocks}
		</div>
	)
}

export default BlocksList;