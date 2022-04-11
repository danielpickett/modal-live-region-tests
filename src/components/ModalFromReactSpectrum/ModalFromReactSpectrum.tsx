import { ReactNode } from 'react'
import './ModalFromReactSpectrum.scss'

export const ModalFromReactSpectrum = ({
  children,
}: {
  children: ReactNode
}) => {
  return <div className="ModalFromReactSpectrum">{children}</div>
}
