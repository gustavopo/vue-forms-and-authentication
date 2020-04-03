import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vuejs-forms-and-authentication.firebaseio.com'
});

instance.defaults.headers.common['myHeader'] = 'myHeader';

export default instance;
