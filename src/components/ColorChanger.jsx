import { useState } from "react";

function ColorChanger() {
  const colors = [
    { bg: "bg-primary", text: "text-white", name: "Blue" },
    { bg: "bg-success", text: "text-white", name: "Green" },
    { bg: "bg-danger", text: "text-white", name: "Red" },
    { bg: "bg-warning", text: "text-dark", name: "Yellow" },
    { bg: "bg-info", text: "text-dark", name: "Cyan" },
    { bg: "bg-dark", text: "text-white", name: "Dark" },
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  return (
    <div className="card shadow-sm mb-4 overflow-hidden">
      <div className="card-header bg-dark text-white">
        <h3 className="h5 mb-0">
          <i className="fas fa-palette me-2"></i> Color Changer
        </h3>
      </div>
      <div
        className={`card-body text-center ${currentColor.bg} ${currentColor.text} transition-all`}
      >
        <h4 className="mb-3">
          Current Theme:{" "}
          <span className="badge bg-light text-dark">{currentColor.name}</span>
        </h4>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`btn ${color.bg} ${color.text} border border-2 ${
                currentColor.name === color.name
                  ? "border-white"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentColor(color)}
              style={{ width: "50px", height: "50px" }}
              title={color.name}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ColorChanger;
