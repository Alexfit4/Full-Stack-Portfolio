import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';
export default function OuterSpace() {
	return (
		<div>
			<StarfieldAnimation
				style={{
					position: 'relative',
					backgroundImage: `url("https://via.placeholder.com/500")`,
					width: '100%',
					height: '100%',
				}}
			/>
		</div>
	);
}
