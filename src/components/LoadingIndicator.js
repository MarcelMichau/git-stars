import React from 'react';
import Halogen from 'halogen';

const LoadingIndicator = () => {
	const color = '#2185D0';

	const style = {
		display: 'flex',
		WebkitFlex: '0 1 auto',
		flex: '0 1 auto',
		WebkitFlexDirection: 'column',
		flexDirection: 'column',
		WebkitFlexGrow: 1,
		flexGrow: 1,
		WebkitFlexShrink: 0,
		flexShrink: 0,
		WebkitFlexBasis: '25%',
		flexBasis: '25%',
		height: '200px',
		WebkitAlignItems: 'center',
		alignItems: 'center',
		WebkitJustifyContent: 'center',
		justifyContent: 'center'
	};

	return (
		<div
			style={{
				boxSizing: 'border-box',
				display: 'flex',
				WebkitFlex: '0 1 auto',
				flex: '0 1 auto',
				WebkitFlexDirection: 'row',
				flexDirection: 'row',
				WebkitFlexWrap: 'wrap',
				flexWrap: 'wrap'
			}}
		>
			<div style={style}><Halogen.PacmanLoader color={color} /></div>
		</div>
	);
};

export default LoadingIndicator;
