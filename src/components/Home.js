import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div class="overview">
			<div class="salut">
				<h1 class="name">Nur Hambali</h1>
				<h3 className="tagline">Software Engineer @ NCS <br/>Student @ Singapore University of Social Sciences</h3>
			</div>
			<div class="about">
				<h1 class="title">Software Engineer.</h1>
				<h3 class="intro">
					A gamer & a limitless learner passionate about learning
					new tech <br />
					concepts to improve problem solving abilities with tech. <br />
					Every day is a learning day.
					<br />
					{/* Leo able...kesho stable. */}
					<br />
					🔥🔥🔥
				</h3>
			</div>

			<div className="cta">
				<a
					href="https://drive.google.com/file/d/1sLSDqLG2Tz9PQ73awcD2L8ucCa0ou3t2/view?usp=sharing"
					className="cv"
					download
				>
					Download CV
				</a>
				<a href="mailto:chorongbali@gmail.com" className="email" target="_self">
					Email me
				</a>
			</div>
		</div>
	);
};

export default Home;
