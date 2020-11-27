import React, {useEffect} from "react";
import Episode from "../Episodes/Episode";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/actionCreators";

const ListOfEpisodes = () => {
	const list = useSelector( state => state.results);
	const dispatch = useDispatch();
	const path = 'episode/';

	useEffect(() => {
		dispatch(fetchData(path));
	}, []);

	return (
		<div className={"List"}>
			{list.map(({id, name, air_date, episode, url}) =>
				<Episode name={name}
				          airDate={air_date}
				          episode={episode}
				          key={id}
				          url={url}
				/>
			)}
		</div>
	)
}

export default ListOfEpisodes
