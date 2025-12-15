import React, { useEffect, useState } from "react";

const Home = () => {
	const [color, setColor] = useState("red");
	const [auto, setAuto] = useState(false);
	const [showPurple, setShowPurple] = useState(false);

	useEffect(() => {
		if (!auto) return;

		const colors = showPurple
			? ["red", "yellow", "green", "purple"]
			: ["red", "yellow", "green"];
		let index = colors.indexOf(color);

		const interval = setInterval(() => {
			index = (index + 1) % colors.length;
			setColor(colors[index]);
		}, 1000);

		return () => clearInterval(interval);
	}, [auto, color]);

	const handleClick = (newColor) => {
		if (!auto) setColor(newColor);
	};

	return (
		<div className="container text-center mt-5">
		 <div className="traffic-light">
		
			<div
				className={`light red ${color === "red" ? "active" : ""}`}
				onClick={() => handleClick("red")}
			></div>
			<div
				className={`light yellow ${color === "yellow" ? "active" : ""}`}
				onClick={() => handleClick("yellow")}
			></div>
			<div
				className={`light green ${color === "green" ? "active" : ""}`}
				onClick={() => handleClick("green")}
			></div>
			{showPurple && (
			<div
				className={`light purple ${color === "purple" ? "active" : ""}`}
				onClick={() => handleClick("purple")}
			></div>
			)}
		</div>
		<button
			className="btn btn-primary mt-3"
			onClick={() => setAuto(!auto)}
		>
			{auto ? "Stop" : "Auto"}
		</button>

		 <button
		 className="btn btn-secondary mt-3"
		 onClick={() => setShowPurple(true)}
		 >
			?
		 </button>		
		 </div>
	);
};

export default Home;