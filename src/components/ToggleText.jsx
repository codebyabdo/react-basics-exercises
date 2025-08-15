import { useState, useEffect } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h3 className="h5 mb-0">
          <i className="fas fa-eye-slash me-2"></i> Toggle Text
        </h3>
      </div>
      <div className="card-body">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <button
            className={`btn ${isVisible ? "btn-danger" : "btn-success"}`}
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <>
                <i className="fas fa-eye-slash me-2"></i> Hide Text
              </>
            ) : (
              <>
                <i className="fas fa-eye me-2"></i> Show Text
              </>
            )}
          </button>

          <button
            className={`btn ${isAnimated ? "btn-warning" : "btn-info"}`}
            onClick={() => setIsAnimated(!isAnimated)}
          >
            <i
              className={`fas ${
                isAnimated ? "fa-toggle-on" : "fa-toggle-off"
              } me-2`}
            ></i>
            {isAnimated ? "Disable" : "Enable"} Animation
          </button>
        </div>

        {isVisible && (
          <div
            className={`alert ${
              isAnimated ? "animate__animated animate__fadeIn" : ""
            } alert-success`}
          >
            <i className="fas fa-info-circle me-2"></i>
            This text can be toggled! Current time is {time}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleText;
