import { useState } from 'react'
import { AboutUs, Button, InputTextGroup } from '../../components'
import { useUser } from '../../../hooks/api'
import { BASE_REGISTER_USER } from '../../../constants'
import { useToastContext } from '../../../hooks/service/use-toast.hook'
import { useNavigate } from 'react-router-dom'
import { useLoader, useUserGlobal } from '../../../context'

export function LoginScreen() {
  const navigate = useNavigate()
  const addToast = useToastContext()
  const [, setUserGlobal] = useUserGlobal()
  const [, setLoader] = useLoader()
  const { loginUser } = useUser()
  const [login, setLogin] = useState(BASE_REGISTER_USER)

  async function handleLogin() {
    try {
      setLoader(true)
      const response = await loginUser(login)
      addToast('Login efetuado !')
      setUserGlobal(response)
      navigate('/')
      setLoader(false)
    } catch (error) {
      setLoader(false)
      error.response.data && addToast(error.response.data, true)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-6/12 h-screen flex items-center justify-center">
        <AboutUs />
      </div>
      <div className="w-6/12 h-screen bg-gray-200 flex justify-center items-center">
        <form
          className="flex flex-col items-center bg-zinc-900 py-6 px-4 rounded-xl w-8/12 gap-3"
          onSubmit={handleSubmit}
        >
          <InputTextGroup
            name="email"
            value={login.email}
            label="Email"
            onChange={handleChange}
            type="email"
          />

          <InputTextGroup
            name="senha"
            value={login.senha}
            label="senha"
            onChange={handleChange}
            type="password"
          />

          <div className="flex justify-between items-center w-8/12 mt-4">
            <Button value="Login" secondary={true} onClick={handleLogin} />
            <Button
              value="Cadastrar-se"
              onClick={() => navigate('/cadastro')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
