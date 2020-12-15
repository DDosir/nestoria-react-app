import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {fetchData} from "../../store/actionCreators";


class SearchForm extends Component {
	render() {
		return(
				<form className='search' onSubmit={this.props.handleSubmit}>
						<p className='search__child'>Status</p>
						<p className='search__child'>Gender</p>
						<p className='search__child'>Name</p>
						<p className='search__child'>Species</p>
						<p className='search__child'>Type</p>
						<Field className='search__child' name='status' component='select'>
							<option/>
							<option value='dead'>Dead</option>
							<option value='alive'>Alive</option>
							<option value='unknown'>Unknown</option>
						</Field>
						<Field className='search__child' name='gender' component='select' placeholder='Name'>
							<option/>
							<option value='female'>Female</option>
							<option value='male'>Male</option>
							<option value='genderless'>Genderless</option>
							<option value='unknown'>Unknown</option>
						</Field>
						<Field className='search__child' name='name' component='input' placeholder='Name'/>
						<Field className='search__child' name='species' component='input'/>
						<Field className='search__child' name='type' component='input'/>
						<button className='search__child' type='submit'>Submit</button>
				</form>
		)
	}
}

export default SearchForm = reduxForm({
	form: 'reduxForm',
	onSubmit : (values, dispatch) => {
		let queryParams = Object.keys(values).reduce((accumulator, key) => accumulator + `${key}=${values[key]}&`,'character/?');
		console.log(queryParams);
		dispatch(fetchData(queryParams));
	},
})(SearchForm);
