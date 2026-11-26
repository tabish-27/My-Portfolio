import { lazy, Suspense, useEffect, useRef, useState } from 'react'

const RiveCanvas = lazy(() => import('./RiveCanvas.jsx'))

function RiveVisual() {
  const host = useRef(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    const element = host.current
    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true)
          observer.disconnect()
        }
      },
      { rootMargin: '180px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="rive-stage" ref={host} aria-label="Rive-powered animation preview">
      {isNearViewport ? (
        <Suspense fallback={<div className="rive-fallback" role="status">Loading Rive animation…</div>}>
          <RiveCanvas />
        </Suspense>
      ) : (
        <div className="rive-fallback" aria-hidden="true">
          <div className="rive-fallback-orbit" />
        </div>
      )}
    </div>
  )
}

export default RiveVisual
