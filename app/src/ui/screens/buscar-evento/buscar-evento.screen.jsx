import { useState } from 'react'
import { EditEventForm, Header, InfoEvento } from '../../components'
import { useEvent } from '../../../hooks/api/event/use-event.hook'
import { useToastContext } from '../../../hooks/service/use-toast.hook'
import { useLoader } from '../../../context'
import editIcon from '../../../assets/edit.svg'
import trashIcon from '../../../assets/trash.svg'

export function BuscarEventoScreen() {
  const [, setLoader] = useLoader()
  const { getEvent } = useEvent()
  const addToast = useToastContext()
  const [search, setSearch] = useState('')
  const [event, setEvent] = useState({})
  const [editEvent, setEditEvent] = useState({
    event: {},
    active: false,
  })

  async function handleGetEvent() {
    try {
      setLoader(true)
      const response = await getEvent(search)
      setEvent(response)
      setEditEvent({ ...editEvent, event: { ...response } })
      setLoader(false)
    } catch (error) {
      setLoader(false)
      addToast(error.response.data, true)
    }
  }

  function handleChange(event) {
    const { value } = event.target
    setSearch(value)
  }

  function handleEditEvent() {
    setEditEvent({ ...editEvent, active: true })
  }

  function handleCancelEdit() {
    setEditEvent({ event: event, active: false })
  }

  function handleFormChange(event) {
    const { value, name } = event.target
    setEditEvent({ ...editEvent, event: { ...editEvent.event, [name]: value } })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis-full">
      <Header />
      <main className="container flex flex-col items-center mt-4 grow gap-4">
        <div className="flex h-8 rounded w-2/4 mt-4">
          <input
            type="text"
            name="search"
            className="outline-none p-2 rounded-l-sm w-full"
            placeholder="Informe a hash de evento"
            onChange={handleChange}
            value={search}
          />
          <button
            onClick={handleGetEvent}
            className="bg-gray-200 flex items-center justify-center p-4 font-semibold hover:brightness-110 rounded-r-sm"
          >
            Buscar
          </button>
        </div>

        {editEvent.active && (
          <div className="flex items-center justify-center w-2/4 border border-gray-200 rounded p-4 text-gray-200">
            <div className="flex justify-between items-start w-full ">
              <EditEventForm
                editEvent={editEvent}
                handleCancelEdit={handleCancelEdit}
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-center w-2/4 border border-gray-200 rounded p-4 text-gray-200">
          {event.nome ? (
            <div className="flex justify-between items-start w-full ">
              <InfoEvento event={event} />
              <div className="flex gap-4">
                <img
                  src={editIcon}
                  alt="editicon"
                  onClick={handleEditEvent}
                  className="hover:cursor-pointer"
                />
                <img
                  src={trashIcon}
                  alt="trashicon"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <h2> Aguardando busca ...</h2>
          )}
        </div>
      </main>
    </div>
  )
}
