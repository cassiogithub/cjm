import { MenuHamburger } from '../'
import { ExitIcon } from '../../../assets'
import { Link, useLocation } from 'react-router-dom'
import LogoCJM from '../../../assets/cjm_logo.png'

export function Header() {
  const styleLink =
    'block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

  const styleAtualLink =
    'block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white'

  const styleList =
    'flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700'

  function isLocation(path) {
    const location = useLocation()
    return path === location.pathname
  }

  return (
    <header className="w-screen  border-b py-2">
      <nav className="border-gray-200  container mx-auto">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div className="w-10 sm:w-12">
              <img src={LogoCJM} alt="logo" />
            </div>
          </Link>

          <MenuHamburger />

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={styleList}>
              <li>
                <Link
                  to="/"
                  className={isLocation('/') ? styleAtualLink : styleLink}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/novo-evento"
                  className={isLocation('/novo-evento') ? styleAtualLink : styleLink}
                >
                  Novo evento
                </Link>
              </li>
              <li>
                <Link
                  to="/buscar-evento"
                  className={isLocation('/buscar-evento') ? styleAtualLink : styleLink}
                >
                  Buscar eventos
                </Link>
              </li>
              <li>
                <Link to="/dicas" className={isLocation('/discas') ? styleAtualLink : styleLink}>
                  Dicas
                </Link>
              </li>
            </ul>
          </div>

          <ExitIcon />
        </div>
      </nav>
    </header>
  )
}
