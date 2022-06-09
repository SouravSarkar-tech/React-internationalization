import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import More from "./Components/More";
import Navbar from "./Navbar/Navbar";


const App = () => {
	return (
		<Suspense fallback={null}>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/more" element={<More />} />
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;