import reduxType from '../config/reduxType';
import api from '../api';


export const fetchRandomPhoto = () => async (dispatch) => {

  let photo = localStorage.getItem("photos")
  if(!photo){
    const res = await api.get('/photos/random', {
      params: {
        count: 12,
        orientation: 'portrait',
      },
    });
    localStorage.setItem("photos", JSON.stringify(res.data))
    photo = localStorage.getItem("photos")
  }
  // console.log(photo);
  dispatch({ type: reduxType.FETCH_RANDOM_PHOTO, payload: JSON.parse(photo) });
};

export const fetchSearchPhoto = (value) => async (dispatch) => {

    const res = await api.get('/search/photos', {
      params: {
        query: value,
        orientation: 'portrait',
      },
    });
    console.log(res.data);
  // console.log(photo);
  dispatch({ type: reduxType.FETCH_SEARCH_PHOTO, payload: res.data.results });
};
