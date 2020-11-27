import React, {useEffect} from "react";
import Character from "../Characters/Character";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/actionCreators";
import {Switch,Route} from "react-router-dom";

const ListOfCharacters = ({url}) => {
	const list = useSelector( state => state.results);
	const dispatch = useDispatch();
	const path = 'character/';

	useEffect(() => {
		dispatch(fetchData(url));
	}, []);

	return (
		// <Switch>
		// 	<Route exact path={'/character'}
				<div className={"List"}>
					{list.map(({name, created, gender, id, image, species, status, type, url}) =>
						<Character name={name}
						           created={created}
						           gender={gender}
						           key={id}
						           image={image}
						           species={species}
						           status={status}
						           type={type}
						           url={url}
						           path={path + id}
						/>
					)}
				</div>
		// 		{/*<Route path={'/character/:id'}/>*/}
		// {/*</Switch>*/}
	)
}

export default ListOfCharacters
