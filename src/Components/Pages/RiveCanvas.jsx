import { useEffect, useState } from 'react'
import { Alignment, Fit, useRive } from '@rive-app/react-canvas'

const RIVE_SAMPLE_URL = 'https://cdn.rive.app/animations/vehicles.riv'

function RiveCanvas() {
  const [loadFailed, setLoadFailed] = useState(false)
  const { rive, RiveComponent } = useRive(
    {
      src: RIVE_SAMPLE_URL,
      stateMachine: 'bumpy',
      autoplay: true,
      onLoadError: () => setLoadFailed(true),
    },
    {
      alignment: Alignment.Center,
      fit: Fit.Contain,
    },
  )

  useEffect(() => {
    if (rive) {
      setLoadFailed(false)
      return undefined
    }

    const timeout = window.setTimeout(() => setLoadFailed(true), 12000)
    return () => window.clearTimeout(timeout)
  }, [rive])

  if (loadFailed) {
    return (
      <div className="rive-fallback" role="status">
        <div>
          <div className="rive-fallback-orbit" aria-hidden="true" />
          Rive preview could not be loaded.
        </div>
      </div>
    )
  }

  return (
    <>
      {!rive && <div className="rive-fallback" role="status">Loading Rive animation…</div>}
      <RiveComponent />
    </>
  )
}

export default RiveCanvas
