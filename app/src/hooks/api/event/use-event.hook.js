import { useHttp } from '../_base/use-http.hook'
import { BASE_URL, EVENT_SIZE_PAGEABLE_DEFAULT } from '../../../constants'
import { useMemo } from 'react'
export function useEvent() {
  const instance = useHttp(BASE_URL)

  async function createEvent(id, eventData) {
    return instance.post(`/evento/${id}`, eventData)
  }

  async function listEvents(userId, page) {
    return instance.get(`/evento/${userId}/${page}/${EVENT_SIZE_PAGEABLE_DEFAULT}`)
  }

  async function alterAtivoEvent(userId, eventId) {
    return instance.patch(`/evento/${userId}/alterAtivo`, {
      eventoId: eventId,
    })
  }

  return useMemo(
    () => ({
      createEvent,
      listEvents,
      alterAtivoEvent,
    }),
    []
  )
}
