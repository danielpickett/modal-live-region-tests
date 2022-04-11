import Dialog from '@reach/dialog'
import '@reach/dialog/styles.css'
import React, { ReactNode } from 'react'
import './ModalFromReach.scss'

export const ModalFromReach = ({ children }: { children: ReactNode }) => {
  // return <div className="ModalFromReach">{children}</div>
  return (
    <Dialog aria-label="Test Modal" isOpen={true}>
      {children}
    </Dialog>
  )
}
