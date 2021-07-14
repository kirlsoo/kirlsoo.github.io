import React from 'react';
import '../../css/aboutme.css';

const AboutMe = () => {
	return(
		<div className="about" id="about">
			<div className="slider">
				<div className="container">
					<div className="item">
						<div className="left">
							<div className="leftContainer">
								<div className="imgContainer">
									<img className="LogoinSlide1" src=""/>
								</div>
								<h2>About Me!</h2>
								<p>Hi, I'm Kristen, but most people call me Kirl. I'm a 3rd Year B.S. in Computer Science student. 
								</p>
								<span>Wanna know more?</span>
							</div>
						</div>
						<div className="right">
							<div className="rightContainer">
								<p>I do random stuff, and have tons of random hobbies. I learn multiple languages, both in programming and linguistics. I try. I really like trying out all the stuff in development and discovering cool things along the way. It's really fun to create things.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;