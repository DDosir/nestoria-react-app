import {ADD_TO_LIST} from "./actions";

const initState = {
	"info": {},
	"results": [],
};

export const reducer = (state = initState, action) => {
	switch (action.type){
		case ADD_TO_LIST:
			return {info: action.payload.info, results: [...action.payload.results]};
		default:
			return state;
	}
}


