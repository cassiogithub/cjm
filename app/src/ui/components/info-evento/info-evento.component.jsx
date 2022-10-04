import { formatDate } from '../../../functions'

export function InfoEvento({ event }) {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <span className="text-sm">Evento</span>
        <p className="text-lg">{event.nome}</p>
      </li>
      <li>
        <span className="text-sm">Local</span>
        <p className="text-lg">{event.local}</p>
      </li>
      <li>
        <span className="text-sm">Hash de busca</span>
        <p className="text-lg">{event.hashEvento}</p>
      </li>
      <li>
        <span className="text-sm">Data/Hora</span>
        <p className="text-lg">{formatDate(event.dataEvento)}</p>
      </li>
    </ul>
  )
}
