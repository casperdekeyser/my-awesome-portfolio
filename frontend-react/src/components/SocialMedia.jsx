import React from 'react';
import {  BsLinkedin } from 'react-icons/bs';
import {  FiMail } from 'react-icons/fi';

const SocialMedia = () => {
  return (
		<div className="app__social">
			<a href="https://www.linkedin.com/in/casperdekeyser/">
				<div>
					<BsLinkedin />
				</div>
			</a>
			<a href="mailto:casper.dekeyser@gmail.com">
				<div>
					<FiMail />
				</div>
			</a>
		</div>
	);
}

export default SocialMedia