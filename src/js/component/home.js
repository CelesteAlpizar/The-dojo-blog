import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./navbar.js";
import { Homepage } from "./homepage.js";
import { BlogList } from "./blog-list.js";

//create your first component
export function Home() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Homepage />
			</div>
		</div>
	);
}
