import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './ModalFromScratch.scss'

export const ModalFromScratch = ({ children }: { children: ReactNode }) => {
  return ReactDOM.createPortal(
    <div className="ModalFromScratch">
      <div className="ModalFromScratch__shade">
        <div className="ModalFromScratch__content" role="dialog">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
