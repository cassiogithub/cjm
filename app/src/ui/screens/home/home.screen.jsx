import { useEffect, useState } from 'react'
import { BASE_LIST_EVENT } from '../../../constants'
import { useUserGlobal } from '../../../context'
import { useEvent } from '../../../hooks/api'
import { EventoCard, Header, HomeInfoEvento, HomeTableUsers } from '../../components'

export function Home() {
  const [userGlobal] = useUserGlobal()
  const { listEvents, alterAtivoEvent } = useEvent()
  const [listEvent, setListEvent] = useState(BASE_LIST_EVENT)
  const [pages, setPages] = useState([])

  async function handleSelectPage(page) {
    const response = await listEvents(userGlobal.id, page)
    setListEvent({
      ...listEvent,
      content: [...response.content],
      totalPages: response.totalPages,
    })
  }

  async function handleDisableEvent(eventId) {
    const response = await alterAtivoEvent(userGlobal.id, eventId)
    const filterSameEvent = listEvent.content.filter((value) => value.id !== response.id)
    const newArray = [...filterSameEvent, response]
    const sorted = newArray.sort((a, b) => {
      return new Date(a.data_evento) - new Date(b.data_evento)
    })
    setListEvent({
      ...listEvent,
      content: [...sorted],
    })
  }

  useEffect(() => {
    async function getListEvent() {
      const response = await listEvents(userGlobal.id, listEvent.atualPage)
      setListEvent({
        ...listEvent,
        content: [...response.content],
        totalPages: response.totalPages,
      })
    }
    getListEvent()
  }, [listEvents, listEvent.atualPage])

  useEffect(() => {
    function mapPages() {
      setPages([...Array(listEvent.totalPages).keys()])
    }
    mapPages()
  }, [listEvent.totalPages])

  return (
    <div className="min-h-screen bg-zinc-900 bg-cover bg-no-repeat flex flex-col items-center basis">
      <Header />
      <main className="flex items-stretch justify-between container text-gray-200 mt-4 grow ">
        <section className="flex flex-col justify-around p-4 grow">
          <h2 className="font-bold self-center text-xl">Ultimo Evento</h2>
          <HomeInfoEvento />
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
                  handleDisableEvent={handleDisableEvent}
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
