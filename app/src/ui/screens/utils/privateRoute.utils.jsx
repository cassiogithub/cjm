import { Navigate } from 'react-router-dom'
import { useUserGlobal } from '../../../context'

export function PrivateRoute({ children }) {
  const [userGlobal] = useUserGlobal()
  if (!userGlobal.token) {
    return <Navigate to={'/login'} />
  }
  return <>{children}</>
}
