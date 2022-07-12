import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<h2 className="head-text">Get in touch with me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href="mailto:hello@micael.com" className="p-text">
						casper.dekeyser@gmail.com
					</a>
				</div>
			</div>
			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.linkedin} alt="linkedin" />
					<a
						href="https://www.linkedin.com/in/casperdekeyser/"
						className="p-text"
					>
						www.linkedin.com/in/casperdekeyser/
					</a>
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);