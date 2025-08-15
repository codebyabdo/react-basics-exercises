import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white">
                <h3 className="h5 mb-0">
                    <i className="fas fa-calculator me-2"></i> Counter App
                </h3>
            </div>
            <div className="card-body">
                <div className="text-center mb-4">
                    <span className="badge bg-primary rounded-pill fs-1 px-4 py-2">
                        {count}
                    </span>
                </div>

                <div className="mb-3">
                    <label className="form-label">Step size:</label>
                    <input
                        type="range"
                        className="form-range"
                        min="1"
                        max="10"
                        value={step}
                        onChange={(e) => setStep(parseInt(e.target.value))}
                    />
                    <div className="d-flex justify-content-between">
                        <small>1</small>
                        <small>10</small>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <button
                        className="btn btn-success flex-grow-1"
                        onClick={() => setCount(c => c + step)}
                    >
                        <i className="fas fa-plus-circle me-2"></i> Add {step}
                    </button>
                    <button
                        className="btn btn-danger flex-grow-1"
                        onClick={() => setCount(c => c - step)}
                    >
                        <i className="fas fa-minus-circle me-2"></i> Subtract {step}
                    </button>
                    <button
                        className="btn btn-warning w-100"
                        onClick={() => setCount(0)}
                    >
                        <i className="fas fa-redo me-2"></i> Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;