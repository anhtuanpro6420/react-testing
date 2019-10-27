import axios from 'axios';

const instance = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? process.env.REACT_APP_BASE_URI
			: 'http://localhost:4000/api'
});

export default instance;
