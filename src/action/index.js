import reduxType from '../config/reduxType';
import api from '../api';

export const fetchRandomPhoto = () => async (dispatch) => {
  const res = await api.get('/photos/random', {
    params: {
      count: 12,
      orientation: 'portrait',
    },
  });

  dispatch({ type: reduxType.FETCH_RANDOM_PHOTO, payload: res.data });
};
