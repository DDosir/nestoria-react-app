import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from '../store/actionCreators'

const WrappedComponent = (url) => {
	const list = useSelector( state => state.results);
	const dispatch = useDispatch();
	const path = 'character/';

	useEffect(() => {
		dispatch(fetchData(url));
	}, []);


	return
}

export default WrappedComponent;

