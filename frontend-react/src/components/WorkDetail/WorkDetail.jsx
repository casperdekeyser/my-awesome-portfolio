import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client";

const WorkDetail = () => {
	let { id } = useParams();

	const [workDetail, setWorkDetail] = useState('');

	useEffect(() => {
		const query = `*[_type == "works" && _id == "${id}"]`;

		client.fetch(query).then((data) => {
			console.log("here", data);
			setWorkDetail(data[0]);
		});
	}, [id]);

	return (
		<>
		<br /><br /><br />
			<h2 className="head-text">
				{workDetail.title}
			</h2>
			<br />
			<div>
				{workDetail.longDescription}
			</div>
		</>
	);
};

export default WorkDetail;
