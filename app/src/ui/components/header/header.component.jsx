import { MenuHamburger } from '../'
import { ExitIcon } from '../../../assets'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LogoCJM from '../../../assets/cjm_logo.png'
import { useUserGlobal } from '../../../context'
export function Header() {
  const [, setUserGlobal] = useUserGlobal()
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const styleLink =
    'block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

  const styleAtualLink =
    'block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white'

  const styleList =
    'flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700'

  function isLocation(path) {
    return path === location.pathname
  }

  function handleLogout() {
    setUserGlobal({})
    navigate('/login')
  }

  function renderList() {
    return (
      <>
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
            className={
              isLocation('/buscar-evento') ? styleAtualLink : styleLink
            }
          >
            Buscar eventos
          </Link>
        </li>
        <li>
          <Link
            to="/dicas"
            className={isLocation('/discas') ? styleAtualLink : styleLink}
          >
            Dicas
          </Link>
        </li>
      </>
    )
  }

  return (
    <header className="container w-screen border-b py-2 mobile:px-4 ">
      <nav className="border-gray-200   mx-auto">
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div className="w-10 sm:w-12">
              <img src={LogoCJM} alt="logo" />
            </div>
          </Link>

          <MenuHamburger setNavOpen={setNavOpen} navOpen={navOpen} />

          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-default"
          >
            <ul className={styleList}>{renderList()}</ul>
          </div>

          <span onClick={handleLogout}>
            <ExitIcon />
          </span>
        </div>
      </nav>

      {navOpen && (
        <div
          className="md:hidden static top-0 mt-4 left-0 w-full h-60 rounded transition-all bg-gray-200 flex justify-center items-center animate-fade-in-down"
          data-transition-leave-active="animate-fade-in-up"
        >
          <ul className="bg-zinc-900 rounded w-2/4">{renderList()}</ul>
        </div>
      )}
    </header>
  )
}
