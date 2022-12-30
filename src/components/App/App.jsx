import logo from '../../images/logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Main from '../Main/Main';

function App() {
	return (
		<div className='page'>
			<Routes>
				<Route
					path='/'
					element={<Main />}
				/>

			</Routes>
		</div>
	);
}

export default App;
