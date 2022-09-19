import createGlobalState from 'react-create-global-state'

const stringifyUser = localStorage.getItem('user')

const user = JSON.parse(stringifyUser) || {}

const [_useUserGlobal, UserGlobalProvider] = createGlobalState(user)

const useUserGlobal = () => {
  const [userGlobal, _setUserGlobal] = _useUserGlobal()

  const setUserGlobal = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    _setUserGlobal(user)
  }
  return [userGlobal, setUserGlobal]
}

export { useUserGlobal, UserGlobalProvider }
