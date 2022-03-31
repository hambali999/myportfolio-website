import React from "react";
import projectImage from '../images/code.jpeg'
import myForioImage from '../images/myforio.jpg'
import gameOffImage from '../images/gameoff.png'
import rpImage from '../images/rp.png'

const Project = () => {
	return (
		<div className="projects">
			<div className="project">
				<a href="https://apps.apple.com/sg/app/myforio/id1574730009">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>MyForio App</h2>
							<div className="date">
								{" "}
								<p>React Native, NodeJS, MongoDB, Heroku</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={myForioImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

			<div className="project">
				<a href="https://github.com/hambali999/dsa-website">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>DSA website</h2>

							<div className="date">
								{" "}
								<p>React, Javascript, Algorithm, Data Structures</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={projectImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>


			<div className="project">
				<a href="https://yalamboy.itch.io/wheremoon">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>WhereMoon</h2>

							<div className="date">
								{" "}
								<p>Unity Game Engine, C#, GameOff2020</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={gameOffImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

			<div className="project">
				<a href="https://www.linkedin.com/in/nur-hambali-064126131/details/featured/1601555341486/single-media-viewer/">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>Text Analysis</h2>

							<div className="date">
								{" "}
								<p>SAS Enterprise Miner, SAS Text Miner</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={rpImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

			<div className="project">
				<a href="https://myforio.com/">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>MyForio Website</h2>

							<div className="date">
								{" "}
								<p>Gatsby, GraphQL</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={myForioImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

		</div>
	);
};

export default Project;
