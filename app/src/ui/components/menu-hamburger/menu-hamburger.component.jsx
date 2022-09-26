import { HamburgerIcon } from '../../../assets/jsx_icons/hamburgerIcon'

export function MenuHamburger() {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden
      hover:bg-gray-100 hover:text-gray-900
      focus:outline-none border focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <HamburgerIcon />
    </button>
  )
}
