import { Link } from 'react-router-dom'
import LogoCJM from '../../../assets/cjm_logo.png'

export function HeaderSecondary() {
  const styleLink =
    'block py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

  const styleList =
    'flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700'

  return (
    <header className="w-screen  border-b py-2">
      <nav className="border-gray-200  container mx-auto">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div className="w-10 sm:w-12">
              <img src={LogoCJM} alt="logo" />
            </div>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={styleList}>
              <li>
                <Link to="/login" aria-current="page" className={styleLink}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className={styleLink}>
                  Cadastrar-se
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
