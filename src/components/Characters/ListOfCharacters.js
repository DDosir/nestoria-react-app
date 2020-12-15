import React, {useEffect} from "react";
import Character from "../Characters/Character";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/actionCreators";
import urls from "../../utils/urls";


const ListOfCharacters = ({path}) => {
	const list = useSelector( state => state.reducer.results);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData(urls.character));
	}, []);


	return (
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
	)
}

export default ListOfCharacters
