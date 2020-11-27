import {ADD_TO_LIST} from "./actions";
import axios from "axios";

export const requestFromUrl = (url) => {
	return (resource) => {
		return (dispatch, getState) => {
			const options = {
				method: 'GET',
				url: `${url}${resource}`,
			};
			axios.request(options)
				.then((response) => dispatch(addToList((response.data))))
				.catch((error) => console.error(error));
			console.log('state ', getState())
		}
	}
}

export const fetchData = requestFromUrl(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/`)

export const addToList = (payload) => {
	return {
		type: ADD_TO_LIST,
		payload
	}
}
