import cjmLogo from '../../../assets/cjm_logo.png'
export function NovoEventoListInfo() {
  return (
    <ul
      className="
      flex flex-col items-start justify-around
      bg-gray-200 p-4 max-w-xl rounded-lg
      h-4/6 text-zinc-900 font-bold
      mobile:gap-4 mobile:mx-2
      "
    >
      <li className="flex gap-3 items-center">
        <img src={cjmLogo} className="w-6 h-6" />
        <p>Você deve informar o nome do seu evento</p>
      </li>
      <li className="flex gap-3 items-center">
        <img src={cjmLogo} className="w-6 h-6" />
        <p>Você deve informar onde acontecerá seu evento</p>
      </li>
      <li className="flex gap-3 items-center">
        <img src={cjmLogo} className="w-6 h-6" />
        <p>
          Você deve informar qual será a data e a hora do seu evento, <br />{' '}
          Exemplo: 01/01/2023 às 00:00
        </p>
      </li>
      <li className="flex gap-3 items-center">
        <img src={cjmLogo} className="w-6 h-6" />
        <p>
          Ao clicar em criar você será redirecionado para visualização do seu
          evento, obtendo o link para convites e pré visualização!
        </p>
      </li>
    </ul>
  )
}
