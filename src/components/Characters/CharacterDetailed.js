import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/actionCreators";

const CharacterDetailed = ({path}) => {
	const list = useSelector( state => state.results);
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(fetchData(path));
	}, []);

	console.log(useState())

	return (
		<Fragment>
		{	list && Object.keys(list).length ? (<div className={"Character"}>
			<div className={"Image__Wrap"}>
				<img className={"Image"} src={list.image} alt={list.url}/>
			</div>
			<div className={"Description"}>
				<p className={"TextLine"}>{`Name : ${list.name}`}</p>
				<p className={"TextLine"}>{`Gender: ${list.gender}`}</p>
				<p className={"TextLine"}>{`Status : ${list.status}`}</p>
				{list.type ?
					<p className={"TextLine"}>{`Type : ${list.type}`}</p>
					: null}
				<p className={"TextLine"}>{`Species : ${list.species}`}</p>
			</div>
		</div>) : null}

		</Fragment>
	);
}

export default CharacterDetailed;
