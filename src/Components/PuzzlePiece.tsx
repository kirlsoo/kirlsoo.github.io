import React, { useState, useRef, useEffect } from "react";

interface PuzzlePieceProps {
  onComplete: () => void;
}

export default function PuzzlePiece({ onComplete }: PuzzlePieceProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pieceRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pieceRef.current) return;
    setIsDragging(true);
    setPosition({
      x: e.clientX - pieceRef.current.getBoundingClientRect().left,
      y: e.clientY - pieceRef.current.getBoundingClientRect().top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !pieceRef.current) return;
    pieceRef.current.style.left = `${e.clientX - position.x}px`;
    pieceRef.current.style.top = `${e.clientY - position.y}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (!pieceRef.current) return;
    const pieceRect = pieceRef.current.getBoundingClientRect();
    const target = document.getElementById("puzzle-target");
    if (!target) return;

    const targetRect = target.getBoundingClientRect();

    // Check if piece's center is inside the target area
    const pieceCenterX = pieceRect.left + pieceRect.width / 2;
    const pieceCenterY = pieceRect.top + pieceRect.height / 2;

    const isDroppedInTarget =
      pieceCenterX >= targetRect.left &&
      pieceCenterX <= targetRect.right &&
      pieceCenterY >= targetRect.top &&
      pieceCenterY <= targetRect.bottom;

    if (isDroppedInTarget) {
      console.log("Puzzle complete! Calling onComplete prop.");
      onComplete();
    } else {
      console.log("Puzzle not in target.");
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, position]);

  return (
    <div
      ref={pieceRef}
      onMouseDown={handleMouseDown}
      className="absolute z-50 cursor-grab active:cursor-grabbing transition-all duration-100 select-none"
      style={{
        left: "200px", // Initial position
        top: "200px",
      }}
    >
      <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
        🧩
      </div>
    </div>
  );
}
