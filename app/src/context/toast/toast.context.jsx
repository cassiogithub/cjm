import { createContext, useCallback, useEffect, useState } from 'react'

export const ToastContext = createContext()

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000
      )
      return () => clearTimeout(timer)
    }
  }, [toasts])

  const addToasts = useCallback((toast, error) =>
    setToasts(
      (toasts) => [...toasts, { message: toast, error: error }],
      [setToasts]
    )
  )

  return (
    <ToastContext.Provider value={addToasts}>
      {children}
      <div>
        {toasts.map(({ message, error }) => {
          return (
            <div
              key={message}
              className={`
              flex justify-center items-center text-gray-200
              border-slate-200 border 
              ${error ? 'bg-red-700' : 'bg-green-700'}
              fixed top-2 left-2 w-80 p-4 rounded
              `}
            >
              {message}
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}
