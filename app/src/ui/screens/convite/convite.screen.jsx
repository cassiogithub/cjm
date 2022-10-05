import { useState, useEffect } from 'react'
import {
  Button,
  Header,
  HeaderSecondary,
  InfoEvento,
  InputTextGroup,
} from '../../components'
import { useEvent } from '../../../hooks/api'
import { useToastContext } from '../../../hooks/service/use-toast.hook'
import { useLoader, useUserGlobal } from '../../../context'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_PRESENCE } from '../../../constants'

export function ConviteScreen() {
  const { getEvent, confirmPresence } = useEvent()
  const { hashEvento } = useParams()
  const [globalUser] = useUserGlobal()
  const addToast = useToastContext()
  const navigate = useNavigate()
  const [, setLoader] = useLoader()
  const [event, setEvent] = useState({})
  const [presence, setPresence] = useState(BASE_PRESENCE)

  useEffect(() => {
    async function getEventData() {
      try {
        setLoader(true)
        const response = await getEvent(hashEvento)
        setEvent(response)
        setLoader(false)
      } catch (error) {
        setLoader(false)
        addToast(`${error.response.data}, você foi redirecionado!`, true)
        navigate('/')
        return
      }
    }
    getEventData()
  }, [getEvent])

  async function handleConfirmPresence() {
    try {
      await confirmPresence(event.id, presence)
      addToast('Você agora participa deste evento')
      setPresence(BASE_PRESENCE)
    } catch (error) {
      setLoader(false)
      addToast(error.response.data, true)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setPresence({ ...presence, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis-full">
      {globalUser.token ? <Header /> : <HeaderSecondary />}

      <main className="flex container justify-between items-stretch mt-4 grow gap-3">
        <div className="flex justify-center items-center basis-full">
          <div
            className="flex items-center justify-start
            p-4 rounded-lg border grow gap-4 max-w-xl
            h-4/6 text-zinc-900 font-bold"
          >
            <InfoEvento event={event} textWhite={true} />
          </div>
        </div>
        <div className="flex justify-center items-center basis-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center
            p-4 rounded-lg border grow gap-4 max-w-xl
            h-4/6 text-zinc-900 font-bold"
          >
            <InputTextGroup
              label="Seu nome"
              name="nome"
              onChange={handleChange}
              value={presence.nome}
            />
            <InputTextGroup
              label="Contato"
              name="contato"
              onChange={handleChange}
              value={presence.contato}
            />
            <div className="flex w-2/4 gap-4">
              <Button
                value="Entrar em evento"
                secondary={true}
                onClick={handleConfirmPresence}
              />
              <Button value="Login" onClick={() => navigate('/')} />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
