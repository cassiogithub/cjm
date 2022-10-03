import { useEffect, useState } from 'react'
import { BASE_LIST_EVENT } from '../../../constants'
import { useUserGlobal, useLoader } from '../../../context'
import { useEvent } from '../../../hooks/api'
import {
  EventoCard,
  Header,
  HomeInfoEvento,
  HomeTableUsers,
} from '../../components'

export function Home() {
  const [userGlobal] = useUserGlobal()
  const [, setLoader] = useLoader()
  const { listEvents, alterAtivoEvent } = useEvent()
  const [listEvent, setListEvent] = useState(BASE_LIST_EVENT)
  const [eventSelected, setEventSelected] = useState({})
  const [pages, setPages] = useState([])

  async function handleSelectPage(page) {
    const response = await listEvents(userGlobal.id, page)
    setListEvent({
      ...listEvent,
      content: [...response.content],
      totalPages: response.totalPages,
    })
  }

  function handleSelectEvent(evento) {
    setEventSelected(evento)
  }

  async function handleDisableEvent(eventId) {
    setLoader(true)
    const response = await alterAtivoEvent(userGlobal.id, eventId)
    const filterSameEvent = listEvent.content.filter(
      (value) => value.id !== response.id
    )
    const newArray = [...filterSameEvent, response]
    const sorted = newArray.sort((a, b) => {
      return new Date(a.data_evento) - new Date(b.data_evento)
    })
    setListEvent({
      ...listEvent,
      content: [...sorted],
    })
    setLoader(false)
  }

  useEffect(() => {
    async function getListEvent() {
      try {
        setLoader(true)
        const response = await listEvents(userGlobal.id, listEvent.atualPage)
        setListEvent({
          ...listEvent,
          content: [...response.content],
          totalPages: response.totalPages,
        })
        setLoader(false)
      } catch (error) {
        setLoader(false)
        return
      }
    }
    getListEvent()
  }, [listEvents, listEvent.atualPage])

  useEffect(() => {
    function mapPages() {
      setPages([...Array(listEvent.totalPages).keys()])
    }
    mapPages()
  }, [listEvent.totalPages])

  useEffect(() => {
    if (Object.keys(eventSelected).length > 0) return
    const nextEvent = listEvent.content.reduce((prev, value) => {
      if (!prev.data_evento) return value
      const prevDate = new Date(prev.data_evento)
      const valueDate = new Date(value.data_evento)
      const now = Date.now()
      if (valueDate > now && valueDate < prevDate) return value
      return prev
    }, {})
    setEventSelected(nextEvent)
  }, [listEvents.content, eventSelected])

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis">
      <Header />
      <main className="flex items-stretch justify-between container text-gray-200 mt-4 grow ">
        <section className="flex flex-col justify-around p-4 grow">
          <h2 className="font-bold self-center text-xl">Evento Selecionado</h2>
          <HomeInfoEvento event={eventSelected} />
          <HomeTableUsers />
        </section>

        <section className="flex flex-col p-4 border border-gray-200 rounded my-4 grow justify-between">
          <h2 className="font-bold self-center text-xl mb-6">Seus Eventos</h2>
          <div className="flex flex-col gap-2">
            {listEvent.content &&
              listEvent.content.map((evento) => (
                <EventoCard
                  key={evento.id}
                  evento={evento}
                  handleDisableEvent={() => handleDisableEvent(evento.id)}
                  handleSelectEvent={() => handleSelectEvent(evento)}
                />
              ))}
          </div>
          <span className="self-center flex gap-2">
            {pages.map((page) => {
              const INCREMENT_PAGE = 1
              return (
                <button key={page} onClick={() => handleSelectPage(page)}>
                  {page + INCREMENT_PAGE}
                </button>
              )
            })}
          </span>
        </section>
      </main>
    </div>
  )
}
