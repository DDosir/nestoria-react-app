import axios from "axios";

const options = {
	method: 'GET',
	url: 'https://cors-anywhere.herokuapp.com/https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/cities.json',
	headers: {
		'x-access-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDg3MzAwNiwibWFzaGFwZUlkIjoiNWZiZTAzMjI2NjgzZTczMWQ0
		MDZmODkyIiwicG9saWN5IjpbImRlZmF1bHQtbWFya2V0cGxhY2Utc2VydmljZSIsImRldmVsb3BlcnMtZGFzaGJvYXJkLXNlcnZpY2UiLCJwcm92aWRl
		ci1kYXNoYm9hcmQtc2VydmljZSIsImRlZmF1bHQtb3JnLWRhc2hib2FyZC1zZXJ2aWNlIiwib3JnLWRhc2hib2FyZC1zZXJ2aWNlIiwiYWRtaW4tcGFu
		ZWwtc2VydmljZSJdLCJvcmlnaW5fc2l0ZSI6InJhcGlkYXBpIiwiZW1haWwiOiJkYW4uc2h2aWRlbmtvdkBZYW5kZXgucnUiLCJpYXQiOjE2MDYyODgx
		NjIsImV4cCI6MTYzNzg0NTc2Mn0.KahIjCN_Fh54sxnadg0fd7bRvatXGZtvwZt8x-CYOI8`,
		'x-rapidapi-key': 'ab90af2969msh04127ff21b11dc7p1e24bbjsn9d2ba056d947',
		'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
	}
};

const API = axios.create(options);

export default API;
