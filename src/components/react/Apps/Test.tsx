import Window from '../Desktop/Window';

function Test() {
	return (
		<Window
			title={'Test Window'}
			content={`
        <h1>Test Window</h1>
        <p>This is a test window</p>
    `}
			sizeX={400}
			sizeY={400}
			posX={600}
			posY={80}
		/>
	);
}

export default Test;
