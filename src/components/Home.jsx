import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="bg-dark text-white p-5 rounded-3 mb-5 shadow">
                <h1 className="display-4 fw-bold">React Basics Exercises</h1>
                <p className="lead">Master fundamental React concepts through interactive examples</p>
                <div className="d-flex gap-3 mt-4">
                    <Link to="/greeting" className="btn btn-primary btn-lg px-4">
                        Get Started
                    </Link>
                    <Link to="/counter" className="btn btn-outline-light btn-lg px-4">
                        Try Counter
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="h4 card-title text-primary">
                                <i className="fas fa-code me-2"></i>

                                Component Basics
                            </h2>
                            <p className="card-text">
                                Learn how to create and compose React components with props and state.
                            </p>
                            <Link to="/greeting" className="btn btn-sm btn-outline-primary">
                                View Examples
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="h4 card-title text-success">
                                <i className="fas fa-sliders-h me-2"></i>

                                State Management
                            </h2>
                            <p className="card-text">
                                Master useState hook with counters, color changers, and interactive UIs.
                            </p>
                            <Link to="/counter" className="btn btn-sm btn-outline-success">
                                Try Exercises
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Code Slash icon (similar to bi-code-slash) */}

                {/* Sliders icon (similar to bi-sliders) */}

                {/* List Check icon (similar to bi-list-check) */}

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="h4 card-title text-warning">
                                <i className="fas fa-tasks me-2"></i>

                                Practical Examples
                            </h2>
                            <p className="card-text">
                                Build real-world features like todo lists and live previews.
                            </p>
                            <Link to="/todo-list" className="btn btn-sm btn-outline-warning">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="mt-5 pt-4 border-top">
                <h2 className="h4 mb-4">All Exercises</h2>
                <div className="d-flex flex-wrap gap-2">
                    <Link to="/greeting" className="btn btn-outline-secondary">
                        Greeting
                    </Link>
                    <Link to="/counter" className="btn btn-outline-secondary">
                        Counter
                    </Link>
                    <Link to="/color-changer" className="btn btn-outline-secondary">
                        Color Changer
                    </Link>
                    <Link to="/live-typing" className="btn btn-outline-secondary">
                        Live Typing
                    </Link>
                    <Link to="/todo-list" className="btn btn-outline-secondary">
                        Todo List
                    </Link>
                    <Link to="/toggle-text" className="btn btn-outline-secondary">
                        Toggle Text
                    </Link>
                    <Link to="/fruit-list" className="btn btn-outline-secondary">
                        Fruit List
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;