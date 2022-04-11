import { useState } from 'react'
import ReactDOM from 'react-dom'
import './ThingWithPortalledLiveRegion.scss'

export const ThingWithPortalledLiveRegion = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="ThingWithPortalledLiveRegion">
      <h2>ThingWithPortalledLiveRegion</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button>nothing</button>
      <p>{count}</p>

      {ReactDOM.createPortal(
        <div
          className="ThingWithPortalledLiveRegion__live-region"
          aria-live="assertive"
        >
          {`The count is now ${count}`}
        </div>,
        document.body
      )}
    </div>
  )
}
