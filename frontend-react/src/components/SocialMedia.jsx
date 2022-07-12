import React from 'react';
import { BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
		<div className="app__social">
			<div>
				<a href="https://www.linkedin.com/in/casperdekeyser/">
					{" "}
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia