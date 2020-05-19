import axios from 'axios';

export const fetchShow = () => {
  return axios
    .get(
      'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    )
    .then((response) => {
      // console.log('response from axios in fetchShow: ', response.data)
      return response.data;
    })
    .catch((error) => console.log('Error from fetchShow: ', error));
};
