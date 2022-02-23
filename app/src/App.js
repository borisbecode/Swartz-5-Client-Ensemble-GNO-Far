




import About from "./pages/about";
import Actions from "./pages/actions";
import Admin from "./pages/admin";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Parrainage from "./pages/parrainage";


import {Route, Routes, Navigate } from "react-router-dom";
import React, { Component }  from 'react';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

	);

}

export default App;
