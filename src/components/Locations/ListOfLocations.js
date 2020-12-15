import React, {useEffect} from "react";
import Location from "../Locations/Location";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/actionCreators";

const ListOfCharacters = () => {
	const list = useSelector( state => state.reducer.results);
	const dispatch = useDispatch();
	const path = 'location/'

	useEffect(() => {
		dispatch(fetchData(path));
	}, []);
	return (
		<div className={"List"}>
			{list.map(({id,name, type, dimension, residents, url, created}) =>
				<Location name={name}
				          created={created}
				          dimension={dimension}
				          key={id}
				          type={type}
				          url={url}
				/>
			)}
		</div>
	)
}

export default ListOfCharacters
