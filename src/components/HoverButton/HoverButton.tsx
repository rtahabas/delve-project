import React from "react";

const HoverButton: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  const createSVG = (width: string, height: string, radius: number | undefined) => (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <rect x="0" y="0" width="100%" height="100%" rx={radius} ry={radius} pathLength="10" />
    </svg>
  );

  React.useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => setHovered(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [hovered]);

  const buttonWidth = "100%";
  const buttonHeight = "100%";
  const borderRadius = 11;

  return (
    <button className={`hoverButton ${hovered ? "start" : ""}`} onMouseEnter={() => setHovered(true)}>
      Canvas View
      <div className="lines">
        <div>
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
        </div>
        <div>
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
          {createSVG(buttonWidth, buttonHeight, borderRadius)}
        </div>
      </div>
    </button>
  );
};
export default HoverButton;
