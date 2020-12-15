import React from "react";
import {Link} from "react-router-dom";

const Character = ({path, name, gender, image, species, status, type, url}) => {
	return (
		<div className={"Character"}>
			<div className={"Image__Wrap"}>
				<Link to={path}>
					<img className={"Image"} src={image} alt={url}/>
				</Link>
			</div>
			<div className={"Description"}>
				<p className={"TextLine"}>{`Name : ${name}`}</p>
				<p className={"TextLine"}>{`Gender : ${gender}`}</p>
				<p className={"TextLine"}>{`Status : ${status}`}</p>
				<p className={"TextLine"}>{`Species : ${species}`}</p>
				{type ?
					<p className={"TextLine"}>{`Type : ${type}`}</p>
					: null}
			</div>
		</div>
	);
}

export default Character
