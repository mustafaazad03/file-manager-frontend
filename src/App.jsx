import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import NavbarComponent from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actionCreators/authActionCreators";

const App = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) {
			dispatch(getUser());
		}
	}, [dispatch]);
	return (
		<div className="App">
			<ToastContainer position="bottom-right" />

			<Switch>
				<Route exact path={"/"}>
					<NavbarComponent />
					<div style={{ textAlign: "center" }}>
						<h1
							style={{
								display: "flex",
								justifyContent: "center",
								justifyItems: "center",
								fontSize: "2rem",
								fontWeight: "bold",
								margin: "20px 0", // Add margin for spacing
							}}
						>
							Welcome to the file management system
						</h1>
						<img
							src="https://source.unsplash.com/random/800x400"
							alt="Random Unsplash Image"
							style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}
						/>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							justifyItems: "center",
							fontSize: "1rem",
							fontWeight: "initial",
							margin: "20px 0",
						}}
					>
						Explore the file management system by creating folders, files,
						uploading files, and more!
					</div>
				</Route>
				<Route exact path="/login" component={() => <Login />}></Route>
				<Route exact path="/signup" component={() => <Register />}></Route>
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</div>
	);
};

export default App;
