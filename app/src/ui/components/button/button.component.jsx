export function Button({ value, secondary, onClick }) {
  const primaryStyle =
    'bg-zinc-900 text-gray-200 border-gray-200 hover:bg-gray-200 hover:border-zinc-900 hover:text-zinc-900 '
  const secondaryStyle =
    'bg-gray-200 text-zinc-900 border-zinc-900 hover:bg-zinc-900 hover:text-gray-200 hover:border-gray-200 '
  return (
    <button
      type="button"
      className={` ${
        secondary ? secondaryStyle : primaryStyle
      } border p-3 rounded-md w-32 font-bold transition-all`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

Button.defaultProps = {
  value: 'Não especificado',
  secondary: false,
  onClick: () => null,
}
