import React, { useEffect, useState } from "react";
import "./Background.css";

const createPieces = () => {
  const pieces = [];
  const numPieces = Math.floor(Math.random() * 1) + 2;
  const heights = [40, 30, 20, 10];

  for (let i = 0; i < numPieces; i++) {
    const height = heights[Math.floor(Math.random() * heights.length)];
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;
    pieces.push({ height, delay, duration });
  }

  return pieces;
};

const Background = () => {
  const [pageHeight, setPageHeight] = useState(document.body.scrollHeight);

  useEffect(() => {
    const handleResize = () => setPageHeight(document.body.scrollHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lines = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="vertical-container" style={{ height: pageHeight }}>
      {lines.map((line, index) => {
        const pieces = createPieces();
        const left = (index / lines.length) * 100;

        return (
          <div className="line" key={index} style={{ left: `${left}%` }}>
            {pieces.map((piece, idx) => (
              <div
                key={idx}
                className="piece"
                style={{
                  height: `${piece.height}px`,
                  animationDelay: `${piece.delay}s`,
                  animationDuration: `${piece.duration}s`,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
