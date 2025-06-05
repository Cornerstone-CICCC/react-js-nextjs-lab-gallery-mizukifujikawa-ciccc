"use client"

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {
  const router = useRouter()

  const onDismiss = () => {
    router.back()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onDismiss}>
      <div className="bg-white p-4 rounded" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
