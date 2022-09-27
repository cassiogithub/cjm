export function EventoCard({ disabled }) {
  const styleEnable = 'bg-green-600 text-zinc-900'
  const styleDisabled = 'bg-red-600 text-gray-400'

  function renderButton() {
    const style =
      'h-full p-2 rounded-md text-sm font-semibold hover:brightness-125 text-gray-200 w-20 border border-gray-400'
    return disabled ? (
      <button className={`${style} bg-green-600`}>Ativar</button>
    ) : (
      <button className={`${style} bg-red-600`}>Desativar</button>
    )
  }

  return (
    <div
      className={`
    flex flex-col rounded-md py-2 px-4  border
    border-gray-50 font-semibold 
    ${disabled ? styleDisabled : styleEnable} `}
    >
      <h3 className="font-bold text-md self-center">Nome do evento</h3>
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <span>Coronel alvaro de moraes</span>
          <span>Dia 21/04/2022 às 15:00</span>
        </div>
        {renderButton()}
      </div>
    </div>
  )
}
