import React from "react";

const Episode = ({name, airDate, episode, url}) => {
	return (
		<div className={"Character"}>
			<div className={"Description"}>
				<a href={url}><p className={"TextLine"}>{`Name : ${name}`}</p></a>
				<p className={"TextLine"}>{`Episode : ${episode}`}</p>
				<p className={"TextLine"}>{`Air Date : ${airDate}`}</p>

			</div>
		</div>
	);
}

export default Episode
