import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	const renderHelper = () => {
		return (
			<BrowserRouter>
				<div>Hello World</div>
			</BrowserRouter>
		);
	};

	return renderHelper();
};

export default App;
