import { CopyIcon } from '../../../assets'
import { formatDate } from '../../../functions'
import { useToastContext } from '../../../hooks/service'
export function HomeInfoEvento({ event }) {
  const addToast = useToastContext()
  function copyToClipboard() {
    navigator.clipboard.writeText(event.link_convite)
    addToast('Link copiado com sucesso!')
  }

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
        <span className="text-sm">Data/Hora</span>
        <p className="text-lg">{formatDate(event.data_evento)}</p>
      </li>
      <li>
        <span className="text-sm">Link de cnvite</span>
        <p className="flex items-center gap-2">
          <button onClick={copyToClipboard}>
            <CopyIcon />
          </button>
          <a
            href={event.link_convite}
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.link_convite}
          </a>
        </p>
      </li>
    </ul>
  )
}
