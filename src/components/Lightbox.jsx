import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * Lightbox – renders via a portal directly into document.body so that
 * parent CSS transforms (e.g. reveal animations) never clip the overlay.
 *
 * Props:
 *   images  – array of { src, alt } objects
 *   index   – currently open index (or null / -1 to close)
 *   onClose – called when the lightbox should close
 *   onPrev  – called to go to previous image
 *   onNext  – called to go to next image
 */
export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index >= 0 && images && images.length > 0

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!images || images.length === 0) return null

  const current = images[index] || {}

  const content = (
    <div
      className={`lightbox${isOpen ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="lightbox-close"
        aria-label="Close image viewer"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          aria-label="Previous image"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        {isOpen && (
          <img
            key={index}
            src={current.src}
            alt={current.alt || 'Gallery image'}
          />
        )}
        {current.alt && (
          <p className="lightbox-caption">{current.alt}</p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          aria-label="Next image"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          ›
        </button>
      )}
    </div>
  )

  // Portal to body — bypasses any parent transform/stacking context
  return createPortal(content, document.body)
}
