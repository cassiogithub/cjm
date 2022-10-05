import { useHttp } from '../_base/use-http.hook'
import { BASE_URL } from '../../../constants'
import { useMemo } from 'react'
export function useUser() {
  const instance = useHttp(BASE_URL)

  async function registryUser(user) {
    return instance.post('/usuarios', user)
  }

  async function loginUser(login) {
    return instance.post('/usuarios/login', login)
  }

  return useMemo(
    () => ({
      registryUser,
      loginUser,
    }),
    []
  )
}
