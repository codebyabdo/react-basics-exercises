import { useState, useEffect } from "react";

function Greeting() {
  const name = "Abd El-Rahman | Web Developer";
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
          <i className="fas fa-hand-wave me-2"></i> Greeting Component
        </h3>
      </div>
      <div className="card-body text-center">
        <h4 className="display-6">
          Hello, <span className="text-primary">{name}</span>!
        </h4>
        <p className="text-muted mt-2">
          <i className="fas fa-clock me-1"></i> Current time: {time}
        </p>
      </div>
    </div>
  );
}

export default Greeting;
