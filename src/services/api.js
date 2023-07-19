import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'devassets-token': token } = parseCookies()
export const api = axios.create({
  baseURL: 'https://assets-api-fsf5.onrender.com/api/v1/'
})

/**
 * @desc funcao para verificar que dados estao a ser enviados no nosso request
 * Apenas para teste
 */
// api.interceptors.request.use(config => {
//   console.log(config)
//   return config
// })

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

