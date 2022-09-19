import { useContext } from 'react'
import { ToastContext } from '../../context/toast/toast.context'

export function useToastContext() {
  return useContext(ToastContext)
}
