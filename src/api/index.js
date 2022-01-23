import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID srSaup5YtAC-pZvunDvckWW-oVxuM6muf0Qn3cXrF5M',
  },
});
