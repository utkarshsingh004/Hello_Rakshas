import { useState, useRef } from 'react'
import './GreetingCard.css'
import Slide from './Slide'

function GreetingCard() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: './1.jpg',
      title: 'Happy Birthday!',
      text: 'Wishing you a day filled with love, joy, and wonderful memories!'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Celebrate Life',
      text: 'May this special day bring you endless happiness and countless blessings.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1369870/pexels-photo-1369870.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Make a Wish',
      text: 'Here\'s to another year of laughter, joy, and unforgettable moments!'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/264887/pexels-photo-264887.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cheers to You!',
      text: 'Thank you for being such an amazing person. Have a fantastic birthday!'
    }
  ]

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="greeting-card">
      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-happyrock.mp3" type="audio/mpeg" />
      </audio>

      <div className="card-container">
        <div className="music-control">
          <button onClick={toggleMusic} className="music-btn">
            {isPlaying ? '🔊' : '🔇'}
          </button>
        </div>

        <Slide
          image={slides[currentSlide].image}
          title={slides[currentSlide].title}
          text={slides[currentSlide].text}
        />

        <div className="navigation">
          <button
            onClick={handlePrevious}
            className="nav-btn prev-btn"
            disabled={currentSlide === 0}
          >
            ← Previous
          </button>

          <div className="slide-indicator">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="nav-btn next-btn"
            disabled={currentSlide === slides.length - 1}
          >
            Next →
          </button>
        </div>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

export default GreetingCard
