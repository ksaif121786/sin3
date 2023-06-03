import axios from 'axios';
var intance = axios.create({ baseURL: 'http://localhost:3001/api' });
export default intance