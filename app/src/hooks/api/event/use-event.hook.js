import { useHttp } from '../_base/use-http.hook'
import { BASE_URL, EVENT_SIZE_PAGEABLE_DEFAULT } from '../../../constants'
import { useMemo } from 'react'
export function useEvent() {
  const instance = useHttp(BASE_URL)

  async function createEvent(id, eventData) {
    return instance.post(`/evento/${id}`, eventData)
  }

  async function listEvents(userId, page) {
    return instance.get(
      `/evento/${userId}/${page}/${EVENT_SIZE_PAGEABLE_DEFAULT}`
    )
  }

  async function alterAtivoEvent(userId, eventId) {
    return instance.put(`/evento/${userId}/alterAtivo`, {
      eventoId: eventId,
    })
  }

  async function editEvent(userId, hashEvento, event) {
    return instance.put(`/evento/${userId}/${hashEvento}/editar`, {
      nome: event.nome,
      local: event.local,
      dataEvento: event.dataEvento,
    })
  }

  async function getEvent(hashEvento) {
    return instance.get(`/evento/${hashEvento}`)
  }

  async function listConfirmed(eventId) {
    return instance.get(`/evento/${eventId}/listarConfirmados`)
  }

  async function confirmPresence(eventId, presence) {
    return instance.post(`/evento/${eventId}/listarConfirmados`, presence)
  }

  async function removePresence(userId, eventId, userRemoved) {
    return instance._delete(`/evento/${userId}/${eventId}/${userRemoved}`)
  }

  async function removeEvent(userId, hashEvento) {
    return instance._delete(`/evento/removeEvento/${userId}/${hashEvento}`)
  }

  return useMemo(
    () => ({
      createEvent,
      listEvents,
      alterAtivoEvent,
      listConfirmed,
      confirmPresence,
      removePresence,
      removeEvent,
      getEvent,
      editEvent,
    }),
    []
  )
}
