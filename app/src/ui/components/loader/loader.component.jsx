import { useLoader } from '../../../context'
export function Loader() {
  const [isLoader] = useLoader()
  return (
    <div
      className={`${
        isLoader ? 'fixed' : 'hidden'
      } fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-200 bg-opacity-25`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-red-700"
        viewBox="0 0 100 101"
      >
        <path
          fill="currentColor"
          d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919z"
        ></path>
        <path
          fill="currentFill"
          d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0041.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0144.131 25.769c.902 2.34 3.361 3.802 5.787 3.165z"
        ></path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

Loader.defaultProps = {
  active: false,
}
