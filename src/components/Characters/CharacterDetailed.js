import React, {useEffect} from "react";
import {useSelector} from "react-redux";

const CharacterDetailed = ({match}) => {
	const list = useSelector( state => state.results);

	const id = match.params.id;

	console.log(list);

	console.log(id);
	const {name, gender, image, species, status, type, url} = list.find( (elem) =>  elem.id == id)

	return (
		<div className={"Character"}>
			<div className={"Image__Wrap"}>
					<img className={"Image"} src={image} alt={url}/>
			</div>
			<div className={"Description"}>
				<p className={"TextLine"}>{`Name : ${name}`}</p>
				<p className={"TextLine"}>{`Gender: ${gender}`}</p>
				<p className={"TextLine"}>{`Status : ${status}`}</p>
				{type ?
					<p className={"TextLine"}>{`Type : ${type}`}</p>
					: null}
				<p className={"TextLine"}>{`Species : ${species}`}</p>
			</div>
		</div>
	);
}

export default CharacterDetailed;
