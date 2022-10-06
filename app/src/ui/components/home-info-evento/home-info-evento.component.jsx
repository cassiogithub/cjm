import { CopyIcon } from '../../../assets'
import { formatDate } from '../../../functions'
import { useToastContext } from '../../../hooks/service'
export function HomeInfoEvento({ event }) {
  const addToast = useToastContext()
  function copyToClipboard(copy, message) {
    navigator.clipboard.writeText(copy)
    addToast(message)
  }

  function renderEvent() {
    return (
      <ul className="flex flex-col gap-2">
        <li>
          <span className="text-sm mobile:max-w-[70vw] break-words">
            Evento
          </span>
          <p className="text-lg">{event.nome}</p>
        </li>
        <li>
          <span className="text-sm ">Local</span>
          <p className="text-lg mobile:max-w-[70vw] break-words">
            {event.local}
          </p>
        </li>
        <li>
          <span className="text-sm">Código de busca</span>
          <p className="text-lg flex items-center gap-2">
            <button
              onClick={() =>
                copyToClipboard(
                  event.hash_evento,
                  'Código copiado com sucesso!'
                )
              }
            >
              <CopyIcon />
            </button>
            {event.hash_evento}
          </p>
        </li>
        <li>
          <span className="text-sm">Data/Hora</span>
          <p className="text-lg">{formatDate(event.data_evento)}</p>
        </li>
        <li>
          <span className="text-sm">Link de convite</span>
          <p className="flex items-center gap-2">
            <button
              onClick={() =>
                copyToClipboard(event.link_convite, 'Link copiado com sucesso!')
              }
            >
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

  return (
    <>
      {event.nome ? (
        renderEvent()
      ) : (
        <h2 className="flex justify-center items-center">
          Nenhum evento encontrado
        </h2>
      )}
    </>
  )
}
