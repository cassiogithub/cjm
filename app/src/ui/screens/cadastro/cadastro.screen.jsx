import { useState } from 'react'
import { AboutUs, Button, InputTextGroup } from '../../components'
import { useUser } from '../../../hooks/api'
import { BASE_REGISTER_USER } from '../../../constants'
import { checkSameValues } from '../../../functions/same-values.function'
import { useToastContext } from '../../../hooks/service/use-toast.hook'
import { useNavigate } from 'react-router-dom'
import { useLoader } from '../../../context'

export function CadastroScreen() {
  const [cadastro, setCadastro] = useState(BASE_REGISTER_USER)
  const [, setLoader] = useLoader()
  const { registryUser } = useUser()
  const addToast = useToastContext()
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setCadastro({ ...cadastro, [name]: value })
  }

  async function handleCadastrarUsuario() {
    try {
      setLoader(true)
      checkSameValues(
        cadastro.senha,
        cadastro.confirmaSenha,
        'Campos de senha não conferem'
      )
      await registryUser(cadastro)
      addToast('Você foi cadastrado com sucesso!')
      setCadastro(BASE_REGISTER_USER)
      setLoader(false)
    } catch (error) {
      setLoader(false)
      !error.response && addToast(error.message, true)
      error.response.data && addToast(error.response.data, true)
    }
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
            name="nome"
            value={cadastro.nome}
            label="Nome"
            onChange={handleChange}
          />
          <InputTextGroup
            name="email"
            value={cadastro.email}
            label="Email"
            onChange={handleChange}
            type="email"
          />
          <InputTextGroup
            name="dataNascimento"
            value={cadastro.dataNascimento}
            label="Data de nascimento"
            onChange={handleChange}
            type="date"
          />
          <InputTextGroup
            name="senha"
            value={cadastro.senha}
            label="senha"
            onChange={handleChange}
            type="password"
          />
          <InputTextGroup
            name="confirmaSenha"
            value={cadastro.confirmaSenha}
            onChange={handleChange}
            label="Confirme sua Senha"
            type="password"
          />
          <div className="flex justify-between items-center w-8/12 mt-4">
            <Button
              value="Cadastrar-se"
              secondary={true}
              onClick={handleCadastrarUsuario}
            />
            <Button value="Login" onClick={() => navigate('/login')} />
          </div>
        </form>
      </div>
    </div>
  )
}
