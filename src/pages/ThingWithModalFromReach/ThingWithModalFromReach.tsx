import { ModalFromReach } from '@/components'
import { ThingWithPortalledLiveRegion } from '@/components'
import './ThingWithModalFromReach.scss'

export const ThingWithModalFromReach = () => {
  return (
    <div className="ThingWithModalFromReach">
      <h1>ThingWithModalFromReach</h1>
      <ModalFromReach>
        <ThingWithPortalledLiveRegion />
      </ModalFromReach>
    </div>
  )
}
