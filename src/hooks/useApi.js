import axios from 'axios'

function useApi() {

  axios.defaults.baseURL = 'https://api.adoptez1artisan.com/'

  axios.defaults.headers.common['content-type'] = 'application/json;charset=UTF-8'

  const token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['authorization'] = 'Bearer ' + token
  }

  return axios
}

export default useApi
