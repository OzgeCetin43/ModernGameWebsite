import { matches } from "../../assets/data/matches";

import "./Matches.css";

const Matches = () => {
  return (
    <div className="matches-container">
      <small className="matches-subtitle">#Matches</small>
      <h1 className="matches-title">Battles extreme masters tournament</h1>
      <div className="match-items">
        {matches.map((item) => (
          <div key={item.id} className="match-item">
            <div className="match-player-container">
              <svg
                viewBox="0 0 173.20508075688772 200"
                height="200"
                width="174"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                  fill="#1e2530"
                ></path>
              </svg>
              <img src={item.player1Image} alt={item.player1} />
            </div>
            <div className="match-info-container">
              <h1 className="match-player-name">{item.player1}</h1>
              <div>
                <p>{item.score}</p>
                <small>{item.date}</small>
              </div>
              <h1 className="match-player-name">{item.player2}</h1>
            </div>
            <div className="match-player-container">
              <svg
                viewBox="0 0 173.20508075688772 200"
                height="200"
                width="174"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                  fill="#1e2530"
                ></path>
              </svg>
              <img src={item.player2Image} alt={item.player2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
