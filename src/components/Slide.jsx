import { useState, useEffect } from 'react'
import './Slide.css'

function Slide({ image, title, text }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [image, title, text])

  return (
    <div className={`slide ${isVisible ? 'visible' : ''}`}>
      <div className="slide-image-container">
        <img src={image} alt={title} className="slide-image" />
        <div className="image-overlay" />
      </div>
      <div className="slide-content">
        <h1 className="slide-title">{title}</h1>
        <p className="slide-text">{text}</p>
      </div>
    </div>
  )
}

export default Slide
