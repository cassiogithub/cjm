import { useState } from 'react'
import {
  Button,
  Header,
  InputTextGroup,
  NovoEventoListInfo,
} from '../../components'
import { BASE_REGISTER_EVENT } from '../../../constants'
import { useEvent } from '../../../hooks/api'
import { useToastContext } from '../../../hooks/service/use-toast.hook'
import { useLoader, useUserGlobal } from '../../../context'

export function NovoEvento() {
  const { createEvent } = useEvent()
  const addToast = useToastContext()
  const [userGlobal] = useUserGlobal()
  const [, setLoader] = useLoader()
  const [registerEvent, setRegisterEvent] = useState(BASE_REGISTER_EVENT)

  async function handleCreateEvent() {
    try {
      setLoader(true)
      await createEvent(userGlobal.id, registerEvent)
      setRegisterEvent(BASE_REGISTER_EVENT)
      addToast('Evento criado com sucesso!')
      setLoader(false)
    } catch (error) {
      setLoader(false)
      error.response.data && addToast(error.response.data, true)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setRegisterEvent({ ...registerEvent, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis-full">
      <Header />
      <main className="flex container justify-between items-stretch mt-4 grow gap-3 mobile:flex-col-reverse mobile:items-center">
        <div className="flex justify-start items-center basis-full">
          <NovoEventoListInfo />
        </div>

        <div className="flex justify-end items-center basis-full mobile:w-full mobile:justify-center ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center
            p-4 rounded-lg border grow gap-4 max-w-xl
            h-4/6 text-zinc-900 font-bold mobile:mx-2 "
          >
            <InputTextGroup
              label="Nome do evento"
              name="nome"
              onChange={handleChange}
              value={registerEvent.nome}
              labelClass="laptop:w-full"
            />
            <InputTextGroup
              label="Local"
              name="local"
              onChange={handleChange}
              value={registerEvent.local}
              labelClass="laptop:w-full"
            />
            <InputTextGroup
              label="Data/Hora"
              name="dataEvento"
              onChange={handleChange}
              value={registerEvent.dataEvento}
              type="datetime-local"
              labelClass="laptop:w-full"
            />
            <Button
              value="Criar Evento"
              secondary={true}
              onClick={handleCreateEvent}
              labelClass="laptop:w-full"
            />
          </form>
        </div>
      </main>
    </div>
  )
}
