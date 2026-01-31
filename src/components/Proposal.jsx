import { useState } from "react";
import "./Proposal.css";

function Proposal() {
  const [noStyle, setNoStyle] = useState({});
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const buttonWidth = 120;
    const buttonHeight = 50;

    const randomX = Math.random() * (window.innerWidth - buttonWidth);
    const randomY = Math.random() * (window.innerHeight - buttonHeight);

    setNoStyle({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div className="proposal-container">
      {!accepted ? (
        <>
          <h1>Will you be my BFF ?</h1>

          <div className="btn-wrapper">
            <button className="yes-btn" onClick={() => setAccepted(true)}>
              YES 💕
            </button>

            <button
              className="no-btn"
              style={noStyle}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              NO 😅
            </button>
          </div>
        </>
      ) : (
        <h1 className="ok-text">
          Arre wah! Curious ho gaye? 👀 <br />
          Sirf ₹100 mein milega exclusive content… <br />
          Free version mein sirf “trailer”, premium mein full movie 🎬😎
        </h1>
      )}
    </div>
  );
}

export default Proposal;
