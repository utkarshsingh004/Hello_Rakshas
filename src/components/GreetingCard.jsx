import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './GreetingCard.css'
import Slide from './Slide'

function GreetingCard() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: './1.jpg',
      title: '',
      text: 'Masoom si hasi, nanhe se armaan, Tasveer mein chhupi hai ek pyaari si pehchaan. Waqt ne badla rang, chehra badal gaya, Par is bachpan ki muskaan mein dil aaj bhi wahi bas gaya. 💖'
    },
    {
      id: 2,
      image: './2.jpg',
      title: '',
      text: 'Gulabi saari mein tu lag rahi thi ek pyaari si muskaan, Jaise Diwali ki roshni ne pehan li ho naya armaan. Na ishq, na sharmahat, bas dosti ka rang chhaya, Teri hansi ne har andheri shaam ko roshan banaya. 💖🤝✨'
    },
    { id: 3, image: './3.jpg', title: '', text: 'Will' },
    { id: 4, image: './4.jpg', title: '', text: 'You' },
    { id: 5, image: './5.jpg', title: '', text: 'Be' },
    { id: 6, image: './6.jpg', title: '', text: 'My' },
    { id: 7, image: './7.jpg', title: '', text: '---->' },
    { id: 8, image: './8.jpg', title: '', text: '---->' },
    { id: 9, image: './9.jpg', title: '', text: '---->' },
    { id: 10, image: './10.jpg', title: '', text: '---->' },
    { id: 11, image: './11.jpg', title: '', text: '---->' },
    { id: 12, image: './12.jpg', title: '', text: '---->' },
    { id: 13, image: './13.jpg', title: '', text: '---->' },
    { id: 14, image: './14.jpg', title: '', text: '---->' },
  ]

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const handleClickMe = () => {
    navigate("/proposal");
  };

  // ✅ Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greeting-card">
      <audio ref={audioRef} loop>
        <source src="./Madhubala.mp3" type="audio/mpeg" />
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

        {/* Slide dots */}
        <div className="slide-indicator">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Show Click Me only on last slide */}
        {currentSlide === slides.length - 1 && (
          <div className="clickme-container">
            <button onClick={handleClickMe} className="nav-btn clickme-btn">
              Click Me 💖
            </button>
          </div>
        )}

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

export default GreetingCard
