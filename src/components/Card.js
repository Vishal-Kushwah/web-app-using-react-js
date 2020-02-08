import React from 'react';

function Card({name,email,id}){	
	return(
		<div className='tc bg-light-green pa1 dib br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https:robohash.org/${id}?50*50`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card  