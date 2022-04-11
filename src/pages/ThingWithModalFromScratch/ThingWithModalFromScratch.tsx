import { ModalFromScratch } from '@/components'
import { ThingWithPortalledLiveRegion } from '@/components'
import './ThingWithModalFromScratch.scss'

export const ThingWithModalFromScratch = () => {
  return (
    <div className="ThingWithModalFromScratch">
      <h1>ThingWithModalFromScratch</h1>
      <ModalFromScratch>
        <ThingWithPortalledLiveRegion />
      </ModalFromScratch>
    </div>
  )
}
