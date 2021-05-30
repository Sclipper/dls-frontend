/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { getAccessToken } from './getAccessToken'

const noAtRequired = ['/auth/register']
// import { API_BASE_URL } from '../env'
const callAPI = async (endpoint, request) => {
  const { method = 'get', data, headers } = request
  const API_BASE_URL = 'http://localhost:8080'
  const url = `${API_BASE_URL}${endpoint}`

  let accessToken
  if (!noAtRequired.includes(endpoint)) {
    accessToken = await getAccessToken()
  }

  return axios({
    url,
    method,
    timeout: 30000,
    headers: {
      Authorization: `bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    data,
  })
}

export default callAPI
