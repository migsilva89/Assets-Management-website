import { parseCookies } from 'nookies'

export const redirectIfNotAuthenticated = async (ctx) => {
  const { ['devassets-token']: token } = parseCookies(ctx)
  
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
}
