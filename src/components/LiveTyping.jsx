import { useState } from "react";

function LiveTyping() {
  const [inputValue, setInputValue] = useState("");
  const [isUppercase, setIsUppercase] = useState(false);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h3 className="h5 mb-0">
          <i className="fas fa-keyboard me-2"></i> Live Typing
        </h3>
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
          <button className="btn btn-danger" onClick={() => setInputValue("")}>
            <i className="fas fa-times"></i>
          </button>

          <button
            title={
              isUppercase ? "Convert to lowercase" : "Convert to uppercase"
            }
            className={`btn ${isUppercase ? "btn-warning" : "btn-secondary"}`}
            onClick={() => setIsUppercase(!isUppercase)}
          >
            <i
              className={`fas ${isUppercase ? "fa-text-height" : "fa-font"}`}
            ></i>
          </button>
        </div>

        <div className="alert alert-info">
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <i className="fas fa-eye me-2"></i>
              <strong>Live Preview:</strong>
            </span>
            <span className="badge bg-dark">
              {inputValue.length} characters
            </span>
          </div>
          <hr />
          <p className="mb-0">
            {inputValue
              ? isUppercase
                ? inputValue.toUpperCase()
                : inputValue
              : "Start typing to see preview..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LiveTyping;
