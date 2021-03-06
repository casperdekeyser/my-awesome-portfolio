import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import Swal from "sweetalert2";

import "./Work.scss";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("Top");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
			// handleWorkFilter("Top")
		});
	}, []);

	
	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);
		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	useEffect(() => {
		handleWorkFilter("Top");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [works]);

	const showAlert = () => {
		Swal.fire(
			"Work In Progress",
			"I am currenlty working on this feature right now.\nCome back later to see it in action!",
			"info"
		);
	};

	return (
		<>
			<h2 className="head-text">
				My <span>Projects</span> Portfolio
			</h2>
			<div className="app__work-filter">
				{[
					"Top",
					"International",
					"All",
					"Web",
					"Mobile",
					"Game",
					"VR",
					"Other",
				].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex"
							>
								{/* <a href={`/item/${work._id}`} target="_self" rel="noreffer"> */}
								<a
									href="/#work"
									onClick={showAlert}
									target="_self"
									rel="noreffer"
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ opacity: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.shortDescription}
							</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, "app__works"),
	"work",
	"app__primagebg"
);
