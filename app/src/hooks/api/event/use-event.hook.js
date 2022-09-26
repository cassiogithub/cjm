import { useHttp } from '../_base/use-http.hook'
import { BASE_URL } from '../../../constants'
export function useEvent() {
  const instance = useHttp(BASE_URL)

  async function createEvent(id, eventData) {
    return instance.post(`/evento/${id}`, eventData)
  }

  return {
    createEvent
  }
}
