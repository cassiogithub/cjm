import { CopyIcon } from '../../../assets'

export function HomeInfoEvento() {
  //to clipboard
  //onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <span className="text-sm">Evento</span>
        <p className="text-lg">Churrasco na minha casa</p>
      </li>
      <li>
        <span className="text-sm">Local</span>
        <p className="text-lg">Coronel Álvaro de Moraes 1115</p>
      </li>
      <li>
        <span className="text-sm">Data/Hora</span>
        <p className="text-lg">Dia 01/01/2022 as 14:00</p>
      </li>
      <li>
        <span className="text-sm">Link de cnvite</span>
        <p className="flex items-center gap-2">
          <CopyIcon />
          <a href="https://bityli.com/lJjHshV" target="_blank" rel="noopener noreferrer">
            https://bityli.com/lJjHshV
          </a>
        </p>
      </li>
    </ul>
  )
}
