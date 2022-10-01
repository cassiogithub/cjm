import { formatDate } from '../../../functions'

export function EventoCard({ evento, handleDisableEvent, handleSelectEvent }) {
  const styleEnable = 'bg-green-600 text-zinc-900'
  const styleDisabled = 'bg-red-600 text-gray-400'

  function renderButton() {
    const style =
      'h-full p-2 rounded-md text-sm font-semibold hover:brightness-125 text-gray-200 w-20 border border-gray-400'
    if (evento.ativo) {
      return (
        <button className={`${style} bg-red-600`} onClick={handleDisableEvent}>
          Desativar
        </button>
      )
    } else {
      return (
        <button
          className={`${style} bg-green-600`}
          onClick={handleDisableEvent}
        >
          Ativar
        </button>
      )
    }
  }

  return (
    <div
      className={`
    flex flex-col rounded-md py-2 px-4  border
    border-gray-50 font-semibold 
    ${evento.ativo ? styleEnable : styleDisabled} `}
    >
      <button onClick={() => handleSelectEvent(evento)}>
        <h3 className="font-bold text-md self-center hover:translate-x-1 hover:scale-105 transition-all">
          {evento.nome}
        </h3>
      </button>

      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <span>{evento.local}</span>
          <span>{formatDate(evento.data_evento)}</span>
        </div>
        {renderButton()}
      </div>
    </div>
  )
}

EventoCard.defaultProps = {
  evento: {},
  handleDisableEvent: () => null,
  handleSelectEvent: () => null,
}
